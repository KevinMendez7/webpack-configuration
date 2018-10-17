import '../css/style.css'
import { principal } from './message.js'
import imgPlatzi from '../img/platzi.png'

const img = document.createElement('img')
const h1 = document.createElement('h1')

img.setAttribute('src', imgPlatzi)
img.setAttribute('height', "200px")
img.setAttribute('width', "200px")

h1.textContent = "HOLA MUNDO"

document.body.append(h1)
document.body.append(img)

console.log('hola mundo desde webpack.config.js')
