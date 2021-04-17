export const getitem = (itemName) => {
    try {
        return JSON.parse(localStorage.getItem(itemName))
    } catch (err) {
        console.error('Error: getting data from localStorage', err)
        return null
    }
}

export const setitem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.error('Error: saving data in localStorage', err);
    }
}