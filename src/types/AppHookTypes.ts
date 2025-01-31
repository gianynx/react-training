export interface AppHookData {
    h1Title: string;
    h1Style: React.CSSProperties;
    boxPosition: number;
    img: string;
    technologies: Technology[];
    addTechnology: () => void;
    removeTechnology: () => void;
    handleSubmit: (e: any) => void;
    handleChange: (e: any) => void;
}

export interface Technology {
    id: string;
    title: string;
    imgSrc: string;
    isPopular: boolean;
    isJsFramework: boolean;
    description: string;
}

export default AppHookData;