import AppHookData from '../types/AppHookTypes';

const useAppHook = (): AppHookData => {
    const h1Title = "React Training";
    const h1Style = {
        color: "black",
        fontSize: "3.3rem",
    };
    const h2Title = "Full-time Course";
    const boxPosition = 2;
    const img = 'react';

    const technologies = [
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
    ];

    function handleClick() {
        alert("Hello World!");
    }

    return { h1Title, h1Style, h2Title, boxPosition, img, technologies, handleClick };
}

export default useAppHook;