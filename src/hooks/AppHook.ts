import { useState } from 'react';
import AppHookData from '../types/AppHookTypes';

const useAppHook = (): AppHookData => {
    const h1Title = "React Training";
    const h1Style = {
        color: "black",
        fontSize: "3.3rem",
    };
    const boxPosition = 2;
    const img = 'react';

    const [technologies, setTechnologies] = useState([
        {
            id: "react",
            title: "React",
            imgSrc: "/react.svg",
            isPopular: true,
            isJsFramework: false,
            description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications.",
        },
        {
            id: "vite",
            title: "Vite",
            imgSrc: "/vite.svg",
            isPopular: true,
            isJsFramework: false,
            description: "Vite is a build tool that manages the development and build process of a web application.",
        },
        {
            id: "cobol",
            title: "Cobol",
            imgSrc: "/cobol.png",
            isPopular: false,
            isJsFramework: false,
            description: "COBOL is a historical programming language, designed for commercial and administrative applications.",
        },
        {
            id: "vue",
            title: "Vue",
            imgSrc: "/vue.png",
            isPopular: true,
            isJsFramework: true,
            description: "Vue.js is a progressive JavaScript framework for building user interfaces.",
        },
        {
            id: "angular",
            title: "Angular",
            imgSrc: "/angular.png",
            isPopular: true,
            isJsFramework: true,
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        },
    ])

    const addTechnology = () => {
        const newTechnology = {
            id: `tech-${technologies.length + 1}`,
            title: `New Technology_${technologies.length + 1}`,
            imgSrc: "/new-tech.png",
            isPopular: false,
            isJsFramework: false,
            description: "This is a new technology added to the list.",
        };

        setTechnologies([newTechnology, ...technologies]);
    }

    const removeTechnology = () => {
        setTechnologies(technologies.slice(1));
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.value);
    }

    function handleSubmit(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
    }

    return { h1Title, h1Style, boxPosition, img, technologies, addTechnology, removeTechnology, handleChange, handleSubmit };
}

export default useAppHook;