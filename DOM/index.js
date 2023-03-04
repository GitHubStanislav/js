const root = document.querySelector('#root')
const button = document.querySelector("button")

root.addEventListener('click', function (event) {
    console.log('btn click', event)
})
button.addEventListener('click', function (event) {
    event.stopPropagation()
    console.log('btn click2', event)
})