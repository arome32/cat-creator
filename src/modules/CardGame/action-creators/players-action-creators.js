
export const addPoints = (points, index) => {
    return { type: 'addPoints', points, index }
}

export const uploadImage = (image, index) => {
    return { type: 'uploadImage', image, index }
}

export const removePlayer = (index) => {
    return { type: 'removePlayer', index }
}
