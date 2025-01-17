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

    return { h1Title, h1Style, h2Title, boxPosition, img };
}

export default useAppHook;