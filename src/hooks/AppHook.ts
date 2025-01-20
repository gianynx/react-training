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
            title: "React logo",
            imgSrc: "/react.svg",
            isPopular: true,
            description: "React is a JavaScript library for building user interfaces.",
        },
        {
            id: "vite",
            title: "Vite logo",
            imgSrc: "/vite.svg",
            isPopular: true,
            description: "Vite is a build tool that manages the development and build process (&quot;engine&quot;) of a web application.",
        },
        {
            id: "cobol",
            title: "Cobol logo",
            imgSrc: "/cobol.svg",
            isPopular: false,
            description: "COBOL is a historical programming language, designed for commercial and administrative applications.",
        },
    ];

    return { h1Title, h1Style, h2Title, boxPosition, img, technologies };
}

export default useAppHook;