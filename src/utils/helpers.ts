export const capitalizeFirstNLetters = (str: string, size: number) => {
    return str.length < size ? str.toUpperCase() : str.slice(0, size).toUpperCase();
}

export const formatDate = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
    }).format(date);
};