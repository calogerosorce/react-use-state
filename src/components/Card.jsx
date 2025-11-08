

export default function Card(props) {



    return (
        <div className="card p-3">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div >
    )
}
