export const getFromLocalStorage = (key: string) => {
    if (typeof localStorage !== "undefined") {
        const item = localStorage.getItem(key)

        return item ? JSON.parse(item) : null
    }
}

export const setToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}