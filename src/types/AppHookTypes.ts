export interface AppHookData {
    h1Title: string;
    h1Style: React.CSSProperties;
    boxPosition: number;
    img: string;
    technologies: Technology[];
    addTechnology: (newTechnology: Technology) => void;
    removeTechnology: (id: number) => void;
    formData: FormState;
    handleInputChange: (field: keyof FormState, value: string | boolean) => void;
    resetForm: () => void;
    sendForm: (e: SendFormEvent) => void;
}

export interface Technology {
    id: number;
    title: string;
    imgSrc: string;
    isPopular: boolean;
    description: string;
}

export interface FormState {
    email: string;
    name: string;
    privacyChecked: boolean;
}

export interface FormAction {
    type: "CHANGE_FIELD" | "RESET_FIELD";
    field?: keyof FormState;
    value?: string | boolean;
}

export interface SendFormEvent extends React.FormEvent<HTMLFormElement> { }

export default AppHookData;