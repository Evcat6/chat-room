import React, { KeyboardEvent, useState, useEffect } from 'react'
import styles from './Input.module.scss';
import { InputProps } from '../../interfaces/InputProps';
import { IoSend } from "react-icons/all";
import { addMessage } from '../../utils/firebase';

const Input: React.FC<InputProps> = ({placeholder, type, scroll}) => {

  const storage = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_TOKEN) || "{}");

  useEffect(() => {
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: 'smooth' })
    }, 400);
  })

  const [ value, setValue ] = useState<string>("");

  const sendMessage = (): void => {
    if(value === "") {
      return alert("Please enter message") ;
    }
    addMessage(value, storage.user.displayName, storage.user.email);
    setValue("");
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <form className={styles.input__group} >
    <input className={styles.input} placeholder={placeholder} type={type} value={value} onChange={e => setValue(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
    <div className={styles.input__toolbar} >
      <IoSend 
        className={styles.input__toolbar_send} 
        onClick={sendMessage}
      />
    </div>
    </form>
  )
}

export default Input;
