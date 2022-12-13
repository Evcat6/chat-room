import React from 'react';
import styles from './Messages.module.scss';
import { UserMessage, UnUserMessage } from '..';
import { db } from '../../utils/firebase';
import { Message } from '../../interfaces/Message';
import { collection, query, orderBy, limitToLast }  from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { MessagesProps } from '../../interfaces/MessagesProps';

const Messages: React.FC<MessagesProps> = ({scroll}) => {

  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt", "asc"), limitToLast(35));
  const [messages]: any[] | Message[] = useCollectionData(q);

  const storage = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_TOKEN) || "{}");
  
  return (
    <section className={styles.messages} >
      {
        messages && messages.map((message: Message) => (
          message.email === storage.user.email? 
          <UserMessage 
            key={message.createdAt}
            text={message.text}
            date={message.date}
            user={message.user}
          />
          :
          <UnUserMessage
            key={message.createdAt}
            text={message.text}
            date={message.date}
            user={message.user}
          />
        ))
      }
      <span ref={scroll} ></span>
      </section>
  )
}

export default Messages
