// import { MouseEvent } from "react";

import { useState } from "react";

//{items:[], headings:string}

interface Props {
    items: string[];
    heading: string;

    onSelectItem: (item: string) => void;
}
//destructure it to items and headings from props:Props
function ListGroup({ items, heading, onSelectItem }: Props) {


    // function ListGroup() {
    //     let items = [
    //         'New York',
    //         'Lagos',
    //         'Paris',
    //         'London',
    //         'Canada'
    //     ];
    // items = [];

    // const handleClick=(event:MouseEvent) => console.log(event);

    // let selecedIndex= 0;

    //Hook having data that can change
    //A variable and a function
    const [selecedIndex, setSelectedIndex] = useState(-1);


    // const message= items.length==0 ? <p>No items found</p> :null;


    return (
        <>

            <h1>{heading}</h1>
            {items.length == 0 && <p>No item found</p>}

            {/* {message} */}

            <ul className='list-group'>
                {/* we use key to indentify each items uniquely */}
                {/* {items.map((item,index) => <li className="list-group-item" key={item} onClick={(handleClick) => console.log(item,index)}>{item}</li>)} */}
                {items.map((item, index) => <li

                    className={selecedIndex === index ? 'list-group-item active' : 'list-group-item'}

                    key={item} onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);


                    }}

                >{item}</li>)}


            </ul>

        </>
    )
}

export default ListGroup;