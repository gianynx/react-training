import { useState } from 'react';
import { Technology } from '../types/AppHookTypes';

const useCardFormHook = (addTechnology: (newTechnology: Technology) => void) => {
    const [formData, setFormData] = useState({
        title: "",
        imgSrc: "",
        isPopular: false,
        description: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return { formData, handleInputChange, handleAdd };
}

export default useCardFormHook;