import React from 'react'
import styles from './Header.module.scss';
import { LogOutButton } from '..';

const Header: React.FC = () => {

  const userCred = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_TOKEN) || '{}');

  return (
    <header className={styles.header}>
        <nav className={styles.header__navigation} >
            <img src={userCred.user.photoURL} className={styles.header__navigation_logo} />
            <ul className={styles.header__navigation_items} >
                <li className={styles.navigation__item_name} >{userCred.user.displayName}</li>
                <li className={styles.navigation__item_username} >{`@${userCred.user.displayName.split(" ")[0]}`}</li>
                <li className={styles.navigation__item_email} >{userCred.user.email}</li>
            </ul>
        </nav>
            <div className={styles.header__btn_logout} >
              <LogOutButton>Log Out</LogOutButton>
            </div>
    </header>
  )
}

export default Header;
