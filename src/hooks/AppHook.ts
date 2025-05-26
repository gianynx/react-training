import { useState, useReducer } from 'react';
import { AppHookData, Technology, FormState, FormAction, SendFormEvent } from '../types/AppHookTypes';

const useAppHook = (): AppHookData => {
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
        { type: 'image', src: '/images/nike/nike_1.jpg', alt: 'first_slide' },
        { type: 'image', src: '/images/nike/nike_2.jpg', alt: 'second_slide' },
        { type: 'image', src: '/images/nike/nike_3.jpg', alt: 'third_slide' },
        { type: 'image', src: '/images/nike/nike_4.jpg', alt: 'fourth_slide' },
        { type: 'image', src: '/images/nike/nike_5.jpg', alt: 'fifth_slide' },
        { type: 'image', src: '/images/nike/nike_6.jpg', alt: 'sixth_slide' },
    ];

    const productsNikeDunk = [
        {
            id: 0,
            imgTitle: "Nike Dunk Low",
            imgInfo: "Best seller",
            imgSrc: "/images/dunk/dunk_1.jpg",
        },
        {
            id: 1,
            imgTitle: "Nike Dunk Low Next nature",
            imgInfo: "Best seller",
            imgSrc: "/images/dunk/dunk_2.jpg",
        },
        {
            id: 2,
            imgTitle: "Nike Dunk Low Retro",
            imgSrc: "/images/dunk/dunk_3.jpg",
        },
        {
            id: 3,
            imgTitle: "Nike Dunk Low Retro SE",
            imgSrc: "/images/dunk/dunk_4.jpg",
        },
    ];

    const productsNikeJordan = [
        {
            id: 0,
            imgTitle: "Luka 4 Gone Fishing",
            imgSrc: "/images/jordan/jordan_1.jpg",
        },
        {
            id: 1,
            imgTitle: "Air Jordan 1 Mid",
            imgInfo: "Best seller",
            imgSrc: "/images/jordan/jordan_2.jpg",
        },
        {
            id: 2,
            imgTitle: "Air Jordan 4 White Cement",
            imgSrc: "/images/jordan/jordan_3.jpg",
        },
    ];

    const iconsCarouselMedia = [
        { title: 'Air Jordan', src: '/images/icons/air_jordan_4_retro_white_cement.jpg', alt: 'first_slide' },
        { title: 'Air Force 1', src: '/images/icons/nike_air_force.jpg', alt: 'second_slide' },
        { title: 'Air Max', src: '/images/icons/nike_air_max_plus.jpg', alt: 'third_slide' },
        { title: 'Metcon', src: '/images/icons/nike_free_metcon_6.jpg', alt: 'fourth_slide' },
        { title: 'Mercurial', src: '/images/icons/nike_mercurial_vapor_16_elite.jpg', alt: 'fifth_slide' },
        { title: 'P-6000', src: '/images/icons/nike_p_6000.jpg', alt: 'sixth_slide' },
        { title: 'Pegasus', src: '/images/icons/nike_pegasus_41.jpg', alt: 'seventh_slide' },
        { title: 'Shox', src: '/images/icons/nike_shox_tl.jpg', alt: 'eighth_slide' },
        { title: 'Vomero', src: '/images/icons/nike_zoom_vomero_5_premium.jpg', alt: 'ninth_slide' },
    ];

    return { technologies, addTechnology, removeTechnology, formData, handleInputChange, resetForm, sendForm, carouselMedia, productsNikeDunk, productsNikeJordan, iconsCarouselMedia };
}

export default useAppHook;