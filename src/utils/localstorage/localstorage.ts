
export const loadFromLocalStorage = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error("Could not load tasks from localStorage", error);
        return [];
    }
};

export const saveToLocalStorage = (key: string, value: unknown) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Could not save tasks to localStorage", error);
    }
};