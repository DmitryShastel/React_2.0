// import React from 'react';
//
// type ItemType = {
//     title: string
//     value: any
// }
//
// type SelectPropsType = {
//     value: any
//     onChange: (value: any) => void
//     items: ItemType[]
// }
//
//
// export const Select = (props: SelectPropsType) => {
//
//     return (
//
//         <div>
//             <h4>Title</h4>
//             <div>{}</div>
//             {props.items.map(i => <div>{i.title}</div>)}
//         </div>
//
//     );
// };

import React, {useState, useRef, useEffect, ChangeEvent} from 'react';

type ItemType = {
    title: string;
    value: any;
};

type SelectPropsType = {
    value: any;
    onChange: (value: any) => void;
    items: ItemType[];
};

export const Select = (props: SelectPropsType) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleItemClick = (item: ItemType) => {
        setSelectedItem(item);
        setIsDropdownOpen(false);
        props.onChange(item.value);
    };

    return (
        <div className="select" ref={dropdownRef}>
            <h4 onClick={toggleDropdown}>Title</h4>
            {selectedItem && <div>{selectedItem.title}</div>}
            {isDropdownOpen && (
                <div className="options">
                    {props.items.map((item) => (
                        <div key={item.value} onClick={() => handleItemClick(item)}>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};



const items = [
    { value: 1, title: 'Option 1' },
    { value: 2, title: 'Option 2' },
    { value: 3, title: 'Option 3' },
];

export const MyComponent = () => {
    const [selectedValue, setSelectedValue] = useState<any>(null);

    const handleSelectChange = (value: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(value);
    };

    return (
        <div>
            <Select value={selectedValue} onChange={handleSelectChange} items={items} />
        </div>
    );
};