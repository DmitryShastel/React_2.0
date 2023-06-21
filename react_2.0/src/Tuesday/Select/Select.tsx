import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.value === props.value)
    const showItems = () => setActive(true)

    return (
        <>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <div className={s.select + '' + (active ? s.active : '')}>
                <h3 onClick={showItems}>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>

        </>

    );
};