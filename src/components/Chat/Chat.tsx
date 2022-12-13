import { FC, useRef } from 'react';
import styles from './Chat.module.scss';
import { Header, Input, Messages } from '..';



const Chat: FC = () => {

    const scroller = useRef<HTMLSpanElement>(document.createElement("span"));

    return (
        <>
            <div className={styles.container__header} >
            <Header/>
            </div>
            <Messages scroll={scroller} />
            <section className={styles.container__input} >
            <Input
                placeholder='Type your message here' 
                type="text"
                scroll={scroller}
            />
            </section>
        </>
    );
}

export default Chat;