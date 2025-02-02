import '../assets/css/Card.css';

function Card({ title, imgSrc, children, isPopular, isJsFramework }) {
    const popularLabel = isPopular ? <span className="text-success">&#10003; Popular</span> : <span className="text-danger mx-3">&#10007; Popular</span>
    const jsFrameworkLabel = isJsFramework ? <span className="text-success">&#10003; JavaScript Framework</span> : ""

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "12rem" }}>
                {imgSrc === "spinner" ? (
                    <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }}>
                        <output className="visually-hidden">Loading...</output>
                    </div>
                ) : (
                    <img src={imgSrc} className="card-img-top" alt={title} />
                )}
            </div>
            <h5 className="card-title fw-bold text-center mt-3">{title}</h5>
            <div className="text-center mt-4">
                <p className="fw-bold">{popularLabel}</p>
                <p className="fw-bold">{jsFrameworkLabel}</p>
            </div>
            <hr />
            <div className="card-body text-center p-2">
                <p className="card-text">{children}</p>
            </div>
        </div>
    );
}

export default Card;