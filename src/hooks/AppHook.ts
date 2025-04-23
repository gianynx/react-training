import { useState, useReducer } from 'react';
import { AppHookData, Technology, FormState, FormAction, SendFormEvent } from '../types/AppHookTypes';

const useAppHook = (): AppHookData => {
    const [products, setProducts] = useState([
        {
            id: 0,
            title: "Nike Dunk Low",
            imgSrc: "/images/dunk_1.jpg",
        },
        {
            id: 1,
            title: "Nike Dunk Low Next nature",
            imgSrc: "/images/dunk_2.jpg",
        },
        {
            id: 2,
            title: "Nike Dunk Low Retro",
            imgSrc: "/images/dunk_3.jpg",
        },
        {
            id: 3,
            title: "Nike Dunk Low Retro SE",
            imgSrc: "/images/dunk_4.jpg",
        },
    ]);

    const [technologies, setTechnologies] = useState([
        {
            id: 0,
            title: "React",
            imgSrc: "/react.svg",
            isPopular: true,
            description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications.",
        },
        {
            id: 1,
            title: "Vite",
            imgSrc: "/vite.svg",
            isPopular: true,
            description: "Vite is a build tool that manages the development and build process of a web application.",
        },
        {
            id: 2,
            title: "Cobol",
            imgSrc: "/cobol.png",
            isPopular: false,
            description: "COBOL is a historical programming language, designed for commercial and administrative applications.",
        },
        {
            id: 3,
            title: "Vue",
            imgSrc: "/vue.png",
            isPopular: true,
            description: "Vue.js is a progressive JavaScript framework for building user interfaces.",
        },
        {
            id: 4,
            title: "Angular",
            imgSrc: "/angular.png",
            isPopular: true,
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        },
        {
            id: 5,
            title: "Ada",
            imgSrc: "/ada.png",
            isPopular: false,
            description: "Ada is a programming language developed in the late 1970s by the US Department of Defense.",
        },
    ]);

    const addTechnology = (newTechnology: Technology): void => {
        setTechnologies([newTechnology, ...technologies]);
    };

    const removeTechnology = (id: number): void => {
        setTechnologies(technologies.filter((technology) => technology.id !== id));
    };

    const formReducer = (state: FormState, action: FormAction): FormState => {
        switch (action.type) {
            case "CHANGE_FIELD":
                return { ...state, [action.field as keyof FormState]: action.value };
            case "RESET_FIELD":
                return { email: "", name: "", privacyChecked: false };
            default:
                return state;
        }
    };

    const [formData, dispatchFormData] = useReducer(formReducer, {
        email: "",
        name: "",
        privacyChecked: false,
    });

    const handleInputChange = (field: keyof FormState, value: string | boolean): void => {
        dispatchFormData({ type: "CHANGE_FIELD", field, value });
    };

    const resetForm = () => {
        dispatchFormData({ type: "RESET_FIELD" });
    };

    const sendForm = (e: SendFormEvent): void => {
        e.preventDefault();
        console.log("Form submitted: ", formData);
    };

    const carouselMedia = [
        { type: 'video', src: '/videos/nike_1_video.mp4', alt: 'first_video' },
        { type: 'image', src: '/images/nike_1.jpg', alt: 'first_slide' },
        { type: 'image', src: '/images/nike_2.jpg', alt: 'second_slide' },
        { type: 'image', src: '/images/nike_3.jpg', alt: 'third_slide' },
        { type: 'image', src: '/images/nike_4.jpg', alt: 'fourth_slide' },
        { type: 'image', src: '/images/nike_5.jpg', alt: 'fifth_slide' },
        { type: 'image', src: '/images/nike_6.jpg', alt: 'sixth_slide' },
    ];

    return { technologies, addTechnology, removeTechnology, formData, handleInputChange, resetForm, sendForm, carouselMedia };
}

export default useAppHook;