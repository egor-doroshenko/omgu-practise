function scrollToTop() {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

let upButton = document.querySelector('#upButton')

upButton.addEventListener('click', () => {
    scrollToTop()
})