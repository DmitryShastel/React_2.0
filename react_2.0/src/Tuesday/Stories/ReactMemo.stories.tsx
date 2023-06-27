import React from 'react';


export default {
    title: 'React.memo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

export const Example1 = () => {
    return <>
        <NewMessagesCounter count={10}/>
        <Users users={['Dima', 'Valera']}/>
    </>
}