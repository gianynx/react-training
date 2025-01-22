function Card({ title, imgSrc, children, isPopular, isJsFramework }) {
    const popularLabel = isPopular ? <p className="text-success">&#10003; Popular</p> : <p className="text-danger mx-3">&#10007; Popular</p>
    const jsFrameworkLabel = isJsFramework ? <p className="text-success">&#10003; JavaScript Framework</p> : ""

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "12rem" }}>
                <img src={imgSrc} className="card-img-top" alt={title} style={{ width: "12rem", height: "12rem" }} />
            </div>
            <button className="btn btn-dark mt-4">Click me!</button>
            <div className="text-center mt-4">
                <p className="fw-bold">{popularLabel}</p>
                <p className="fw-bold">{jsFrameworkLabel}</p>
            </div>
            <div className="card-body text-center p-2">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">{children}</p>
            </div>
        </div>
    );
}

export default Card;