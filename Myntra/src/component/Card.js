function Card(props) {
    return (
        <div className="card">
            <img 
                src={props.imageUrl}
                alt={props.cloths}
                className="card-image"
            />
            <div className="card-content">
                <h2 className="card-title">{props.cloths}</h2>
                <h1 className="card-offer">{props.offers}</h1>
                <h2 className="card-cta">Shop NOW</h2>
                <h1 className="card-price">Price : ${props.price}</h1>
            </div>
        </div>
    );
}

export default Card;