export interface AppHookData {
    h1Title: string;
    h1Style: React.CSSProperties;
    boxPosition: number;
    img: string;
    technologies: Technology[];
    addTechnology: (newTechnology: Technology) => void;
    removeTechnology: () => void;
    handleSubmit: (e: any) => void;
    handleChange: (e: any) => void;
}

export interface Technology {
    id: number;
    title: string;
    imgSrc: string;
    isPopular: boolean;
    description: string;
}

export default AppHookData;