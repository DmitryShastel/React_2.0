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
    const showItems = () => setActive(!active)

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {
                            props.items.map(i => <div key={i.value}
                                                      onClick={() => {
                                                          props.onChange(i.value)
                                                      }}
                            >{i.title}</div>)}
                    </div>
                }
            </div>

        </>

    );
};