export interface AppHookData {
    h1Title: string;
    h1Style: React.CSSProperties;
    boxPosition: number;
    img: string;
    technologies: Technology[];
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    addTechnology: (newTechnology: Technology) => void;
    removeTechnology: (id: number) => void;
}

export interface Technology {
    id: number;
    title: string;
    imgSrc: string;
    isPopular: boolean;
    description: string;
}

export default AppHookData;