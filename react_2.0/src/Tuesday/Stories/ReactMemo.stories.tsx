import React, {useState} from 'react';


export default {
    title: 'React.memo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera'])

    return <>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}