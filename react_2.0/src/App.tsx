import React from 'react';
import './App.css';
import {Dropdown, OptionsType} from "./Tuesday/Select/Dropdown";


function App() {

    const options: OptionsType[] = [
        {value: 'green1', label: "Green"},
        {value: 'green2', label: "Red"},
        {value: 'green3', label: "Yellow"},
    ]

    const handleChange = (value: any) => {
        console.log(value)
    }

    return (
        <div className="App">

            <Dropdown
                placeHolder='Select...'
                options={options}
                isMulti={true}
                isSearchable
                onChange={handleChange}
            />
        </div>

    );
}


export default App;


// type PageTitleType = {
//     title: string
// }
//
// const PageTitle = (props: PageTitleType) => {
//     return (
//         <h4>{props.title}</h4>
//     )
// }


// let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
// let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
// let [switchOn, setSwitchOn] = useState<boolean>(false)


{/*<Accordion*/
}
{/*    title={'Menu'}*/
}
{/*    items={[]}*/
}
{/*    onClick={() => {}}*/
}
{/*    collapsed={accordionCollapsed}*/
}
{/*    onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/
}
{/*<Rating value={ratingValue} onClick={setRatingValue}/>*/
}
{/*<UncontrolledRating/>*/
}
{/*<UncontrolledOnOff on={switchOn} onChange={setSwitchOn}/>*/
}
{/*<Accordion title={'Users'} collapsed={false} onChange={() => {}}/>*/
}
{/*<UncontrolledAccordion title={'Menu'}/>*/
}
{/*<UncontrolledAccordion title={'Users'}/>*/
}
{/*<PageTitle title={'This is APP component'}/>*/
}
{/*<OnOff on={true} onChange={setSwitchOn}/>*/
}
{/*<Rating value={1}/>*/
}
{/*<Rating value={2}/>*/
}
{/*<Rating value={3}/>*/
}
{/*<Rating value={4}/>*/
}
{/*<Rating value={5}/>*/
}