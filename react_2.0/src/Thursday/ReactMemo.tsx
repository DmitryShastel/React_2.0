import React, {useState} from 'react';

export const ReactMemo = () => {
    const [users, setUsers] = useState(['Alex', 'Bob'])
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Counter count={count}/>
            <Users users={users}/>
        </div>
    );
};


const Counter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}


const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users')
    return (
        <div>
            {
                props.users.map((u, i) => <div key={i}>{u}</div>)
            }
        </div>
    )

})