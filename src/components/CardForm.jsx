import { useState } from 'react';
import PropTypes from 'prop-types';

function CardForm({ addTechnology, removeTechnology }) {

    const [formData, setFormData] = useState({
        title: "",
        imgSrc: "",
        isPopular: false,
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: inputValue });
    }

    const handleAdd = () => {
        const newTechnology = {
            id: Math.random(),
            title: formData.title,
            imgSrc: formData.imgSrc,
            isPopular: formData.isPopular,
            description: formData.description,
        };

        addTechnology(newTechnology);

        formData.title = "";
        formData.imgSrc = "";
        formData.isPopular = false;
        formData.description = "";
    }

    const handleDelete = () => {
        removeTechnology();
    }

    return (
        <div className="d-flex flex-column gap-3">
            <button className="mx-auto" data-bs-toggle="collapse" data-bs-target="#collpseForm" aria-expanded="false" aria-controls="collpseForm">
                <span className="fs-6">Click me!</span>
            </button>
            <div className="collapse" id="collpseForm">
                <form onSubmit={(e) => { e.preventDefault(); handleAdd() }} className="rounded p-5" style={{ backgroundColor: "#162638" }}>
                    <div className="d-flex align-items-center gap-5">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label text-white">Name</label>
                            <input type="text" value={formData.title} onChange={handleInputChange} id="title" name="title" className="form-control" placeholder="Enter new name" minLength="3" maxLength="23" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imgSrc" className="form-label text-white">Image URL</label>
                            <input type="text" value={formData.imgSrc} onChange={handleInputChange} id="imgSrc" name="imgSrc" className="form-control" placeholder="Enter new image URL" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label text-white">Description</label>
                            <textarea value={formData.description} onChange={handleInputChange} className="form-control" id="description" name="description" rows="2" placeholder="Enter new description" minLength="3" maxLength="100" required />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" checked={formData.isPopular} onChange={handleInputChange} className="form-check-input" id="isPopular" name="isPopular" />
                            <label className="form-check-label text-white" htmlFor="isPopular">
                                Popular
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-4 mt-2">
                        <button type="submit" className="btn btn-outline-success px-5">Add</button>
                        <button type="button" onClick={handleDelete} className="btn btn-outline-danger px-5">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// Prop type validation
CardForm.propTypes = {
    addTechnology: PropTypes.func.isRequired,
    removeTechnology: PropTypes.func.isRequired,
};

export default CardForm;