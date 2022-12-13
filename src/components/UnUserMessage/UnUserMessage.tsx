import React from 'react';
import { MessageProps } from '../../interfaces/MessageProps';
import styles from './UnUserMessage.module.scss';

const UnUserMessage: React.FC<MessageProps> = ({ user, text, date }) => {
  return (
    <div className={styles.message__item__left} >
        <div className={styles.message__item} >
            <span className={styles.message__user_left} >
                {user}
            </span>
            <div className={styles.messages__unuser} >
                <p className={styles.messages__user_text}>
                    {text}
                </p>
                <span className={styles.messages__user_date} >
                    {date}
                </span>
            </div>
        </div>
    </div>
  )
}

export default UnUserMessage
