export function getItem(storageName) {
    const isCartAvaliable = localStorage && localStorage.getItem(storageName);
    return isCartAvaliable ? JSON.parse(localStorage.getItem(storageName)) : []
}

export function setItem(storageName, data) {
    localStorage.setItem(storageName, JSON.stringify(data));
}
