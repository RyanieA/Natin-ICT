export function ScrollintoView(id) {
    const elementId = document.getElementById(id)

    elementId.scrollIntoView({
        behavior: 'smooth'
    })
}