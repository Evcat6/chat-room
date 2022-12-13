import React from 'react'
import styles from './LogOutButton.module.scss';
import { LogOutButtonProps } from '../../interfaces/LogOutButtonProps';

const LogOutButton: React.FC<LogOutButtonProps> = ({children}) => {

    const logOut = (): void => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <button className={styles.button} onClick={logOut} >{children}</button>
  )
}

export default LogOutButton;
