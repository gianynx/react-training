import { useState } from 'react';
import PropTypes from 'prop-types';

function CardForm({ addTechnology, removeTechnology }) {

    const [formData, setFormData] = useState({
        title: "",
        imgSrc: "",
        description: "",
        isPopular: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: inputValue });
    }

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

    }

    const handleDelete = () => {
        removeTechnology();
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleAdd() }} className="rounded p-5" style={{ backgroundColor: "#162638" }}>
            <div className="d-flex align-items-center gap-4">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label text-white">Title</label>
                    <input type="text" value={formData.title} onChange={handleInputChange} id="inputName" name="inputName" className="form-control" placeholder="Enter new name" minLength="3" maxLength="23" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputImg" className="form-label text-white">Image URL</label>
                    <input type="text" value={formData.imgSrc} onChange={handleInputChange} id="inputImg" name="inputImg" className="form-control" placeholder="Enter new image URL" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formControlTextarea" className="form-label text-white">Description</label>
                    <textarea value={formData.description} onChange={handleInputChange} className="form-control" id="formControlTextarea" rows="2" placeholder="Enter new description" minLength="3" maxLength="100" required />
                </div>
                <div className="form-check">
                    <input type="checkbox" checked={formData.isPopular} onChange={handleInputChange} className="form-check-input" id="flexCheck" required />
                    <label className="form-check-label text-white" htmlFor="flexCheck">
                        Popular
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-2">
                <button type="submit" className="btn btn-outline-success px-5">Add</button>
                <button type="button" onClick={handleDelete} className="btn btn-outline-danger px-5">Delete</button>
            </div>
        </form>
    )
}

// Prop type validation
CardForm.propTypes = {
    addTechnology: PropTypes.func.isRequired,
    removeTechnology: PropTypes.func.isRequired,
};

export default CardForm;