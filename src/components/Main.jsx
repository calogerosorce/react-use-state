import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
export default function Main({ languages }) {


    const [active, setActive] = useState(0)
    function handleClick(id) {
        if (active === id) {
            setActive(0)
        } else {
            setActive(id)
        }
    }

    return (


        <div className="container d-flex justify-content-center">
            {languages.map((items) => (
                <div key={items.id}>
                    <button type="button" className="btn m-2" title={items.title} style={{ backgroundColor: items.id === active ? 'rgb(218, 203, 1)' : 'rgb(34, 82, 243)' }} onClick={() => handleClick(items.id)}>
                        {items.title}
                    </button>
                    {items.id === active ? <Card title={items.title} description={items.description} /> : <p>Nessun linguaggio selezionato</p>}
                </div>
            ))}
        </div>
    )
}