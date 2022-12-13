import React from 'react'
import styles from './Auth.module.scss';
import { FcGoogle, BsGithub } from 'react-icons/all'
import { signInWithGoogle, signInWithGitHub } from '../../utils/firebase';


const Auth: React.FC = () => {
  return (
    <section className={styles.section} >
      <main className={styles.section__authform} >
        <h1 className={styles.section__title} >Sign In</h1>
        <div className={styles.container__icons} >
          <FcGoogle className={styles.container__icon_google} onClick={signInWithGoogle}/>
          <BsGithub className={styles.container__icon_github} onClick={signInWithGitHub}/>
        </div>
      </main>
    </section>
  )
}

export default Auth;
