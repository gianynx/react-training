import { useState } from 'react';
import AppHookData, { Technology } from '../types/AppHookTypes';

const useAppHook = (): AppHookData => {
    const h1Title = "React Training";
    const h1Style = {
        color: "black",
        fontSize: "3.3rem",
    };
    const boxPosition = 2;
    const img = 'react';

    const [count, setCount] = useState(0);

    const [technologies, setTechnologies] = useState([
        {
            id: 1,
            title: "React",
            imgSrc: "/react.svg",
            isPopular: true,
            description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications.",
        },
        {
            id: 2,
            title: "Vite",
            imgSrc: "/vite.svg",
            isPopular: true,
            description: "Vite is a build tool that manages the development and build process of a web application.",
        },
        {
            id: 3,
            title: "Cobol",
            imgSrc: "/cobol.png",
            isPopular: false,
            description: "COBOL is a historical programming language, designed for commercial and administrative applications.",
        },
        {
            id: 4,
            title: "Vue",
            imgSrc: "/vue.png",
            isPopular: true,
            description: "Vue.js is a progressive JavaScript framework for building user interfaces.",
        },
        {
            id: 5,
            title: "Angular",
            imgSrc: "/angular.png",
            isPopular: true,
            description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
        },
        {
            id: 6,
            title: "Ada",
            imgSrc: "/ada.png",
            isPopular: false,
            description: "Ada is a programming language developed in the late 1970s by the US Department of Defense.",
        },
    ])

    const addTechnology = (newTechnology: Technology): void => {
        setTechnologies([newTechnology, ...technologies]);
    }

    const removeTechnology = (id: number): void => {
        setTechnologies(technologies.filter((technology) => technology.id !== id));
    }

    return { h1Title, h1Style, boxPosition, img, technologies, count, setCount, addTechnology, removeTechnology };
}

export default useAppHook;