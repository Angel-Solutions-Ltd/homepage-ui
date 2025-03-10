import { useState, useEffect } from 'react';

type ActivitiesMap = {
    [date: string]: string[];
};

const useLocalStorage = (key: string, initialValue: ActivitiesMap) => {
    const [storedValue, setStoredValue] = useState<ActivitiesMap>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: ActivitiesMap | ((val: ActivitiesMap) => ActivitiesMap)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
};

export default useLocalStorage;