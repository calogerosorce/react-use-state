import { useState } from "react";
import Card from "./Card";
export default function Main({ languages }) {


    const [active, setActive] = useState(0)
    const [selectedItems, setSelectedItems] = useState(0);
    function handleClick(items) {
        if (active === items.id) {
            setActive(0)
            setSelectedItems(0)
        } else {
            setActive(items.id)
            setSelectedItems(items)
        }
    }

    return (


        <div className="container d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center flex-wrap">
                {languages.map((items) => (
                    <div key={items.id} >
                        <button type="button" className="btn m-2" style={{ backgroundColor: items.id === active ? 'rgb(218, 203, 1)' : 'rgb(34, 82, 243)' }} onClick={() => handleClick(items)}>
                            {items.title}
                        </button>
                        {/* {items.id === active ? <Card title={items.title} description={items.description} /> : <p>Nessun linguaggio selezionato</p>} */}
                    </div>
                ))
                }
            </div >
            {selectedItems ? (<Card title={selectedItems.title} description={selectedItems.description} />) : (<p>Nessun linguaggio selezionato</p>)}
        </div >
    )
}