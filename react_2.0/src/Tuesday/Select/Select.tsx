import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


const items = [
    {title: 'Minsk', value: 1},
    {title: 'Kiev', value: 2},
    {title: 'Moscow', value: 3}
]

export const MyComponent = () => {
    return (
        <h4>Select an option:</h4>
    )
}


export const Select = (props: SelectPropsType) => {

// const [items, setItems] = useState<ItemType[]>([
//     {title: 'Minsk', value: 1},
//     {title: 'Kiev', value: 2},
//     {title: 'Moscow', value: 3}
// ])


    return (
        <div>


            <>
                {props.items.find(i => i.value === i.value ? i.title : i.value)}
            </>

            {items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

