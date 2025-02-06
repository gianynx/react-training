import PropTypes from 'prop-types';

function CardForm({ addTechnology, removeTechnology }) {

    const handleAdd = () => {
        const newTechnology = {
            id: "new-technology",
            title: "New Technology",
            imgSrc: "spinner",
            isPopular: false,
            isJsFramework: false,
            description: "This is a new technology added to the list.",
        };

        addTechnology(newTechnology);
        console.log(newTechnology);

    }

    const handleDelete = () => {
        removeTechnology();
    }

    return (
        <>
            <button type="button" className="btn btn-outline-success px-5" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-outline-danger px-5" onClick={handleDelete}>Delete</button>
        </>
    )
}

// Prop type validation
CardForm.propTypes = {
    addTechnology: PropTypes.func.isRequired,
    removeTechnology: PropTypes.func.isRequired,
};

export default CardForm;