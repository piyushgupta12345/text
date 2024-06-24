const button = document.getElementById('btn')
const span = document.getElementById('color')

function colorChange() {
    let colorName = `#${Math.random().toString(16).slice(2, 8)}`
    return colorName
}

button.addEventListener('click', () => {
    document.body.style.backgroundColor = colorChange()
    span.textContent = colorChange()
}) 