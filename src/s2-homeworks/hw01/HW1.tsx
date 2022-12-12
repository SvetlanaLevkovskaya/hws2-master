import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar1 from './avatar1.jpg'
import avatar2 from './avatar2.jpg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessType
}

type UserType = {
    avatar: string
    name: string
}

type MessType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar1, // можно менять
        name: 'Svetlana',  // можно менять
    },
    message: {
        text: 'Hi, how are you? lkgjhljls gslgjslfgjslfg sglsjgsjkhjhkhkhkkhkjhkjhkjhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhljg srigjsfgjslg sofgislfgls', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: 'Viktor', // можно менять
    },
    message: {
        text: 'I\'m great, thanks dgjkdgjkdjgkkjhkhkhkhhkhkhkhkhkhkhkhkhkhkhkhkhkkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkhkjdgjkdjgkdgjkdjgk', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
