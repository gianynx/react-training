export interface AppHookData {
    h1Title: string;
    h1Style: React.CSSProperties;
    h2Title: string;
    boxPosition: number;
    img: string;
    technologies: Technology[];
    handleClick: () => void;
    handleChange: (e: any) => void;
}

export interface Technology {
    id: string;
    title: string;
    imgSrc: string;
    isPopular: boolean;
    description: string;
}

export default AppHookData;