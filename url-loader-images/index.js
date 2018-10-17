import './style.css'
import { principal } from './message.js'
import imgPlatzi from './platzi.png'

const img = document.createElement('img')

img.setAttribute('src', imgPlatzi)
img.setAttribute('height', "200px")
img.setAttribute('width', "200px")

document.body.append(img)

console.log('hola mundo desde webpack.config.js')
