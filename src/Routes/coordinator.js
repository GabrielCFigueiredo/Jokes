export const goToHome = (history) => {
    history.goBack('/')
}

export const goToStylizedJokes = (history) => {
    history.push(`/piada/random`)
}

export const goToSelectJokes = (history, id) => {
    history.push(`/piada/${id}`)
}
