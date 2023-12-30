const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${Math.floor(Math.random() * 10) + 300}}`
    container.appendChild(img)
}