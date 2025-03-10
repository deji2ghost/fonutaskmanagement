
export const loadFromLocalStorage = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (error) {
        throw new Error(`Could not load tasks from localStorage: ${error}`);
    }
};

export const saveToLocalStorage = (key: string, value: unknown) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error(`Could not save tasks to localStorage: ${error}`);
    }
};