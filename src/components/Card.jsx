function Card({ title, imgSrc, children }) {
    return (
        <div className="card" style={{ width: "18rem", height: "30rem" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "12rem" }}>
                <img src={imgSrc} className="card-img-top" alt={title} style={{ width: "12rem" }} />
            </div>
            <button className="btn btn-dark mt-4">Click me!</button>
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{children}</p>
            </div>
        </div>
    );
}

export default Card;