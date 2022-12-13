import React from 'react'
import styles from './UserMessage.module.scss';
import { MessageProps } from '../../interfaces/MessageProps'

const UserMessage: React.FC<MessageProps> = ({ user, text, date }) => {
  return (
    <div className={styles.message__item__right} >
        <div className={styles.message__item} >
            <span className={styles.message__user_right} >
                {user}
            </span>
    <div className={styles.messages__user}>
    <p className={styles.messages__unuser_text}>
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

export default UserMessage
