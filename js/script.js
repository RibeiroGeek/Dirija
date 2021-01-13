const openSreenButtons = document.querySelectorAll('[data-screen-target]')
const closeSreenButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openSreenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const screen = document.querySelector(button.dataset.screenTarget)
        openScreen(screen)
    })
})

overlay.addEventListener('click', () => {
    const screen = document.querySelectorAll('.screen.active')
    screen.forEach(screen => {
        closeScreen(screen)
    })
})

closeSreenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const screen = button.closest('.screen')
        closeScreen(screen)
    })
})

function openScreen(screen){
    if (screen == null) return
    screen.classList.add('active')
    overlay.classList.add('active')
}

function closeScreen(screen){
    if (screen == null) return
    screen.classList.remove('active')
    overlay.classList.remove('active')
}