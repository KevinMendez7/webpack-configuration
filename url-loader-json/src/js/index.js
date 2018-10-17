import '../css/style.css'
import { principal } from './message.js'
import data from './teachers.json'
// import imgPlatzi from '../img/platzi.png'
// import videoPlatzi from '../video/que-es-core.mp4'

const h1 = document.createElement('h1')

data.teachers.forEach((teacher) =>{
  const element = document.createElement('li')
  element.textContent = teacher.name
  document.body.append(element)
}
)
// const img = document.createElement('img')
// const video = document.createElement('video')

// img.setAttribute('src', imgPlatzi)
// img.setAttribute('height', "200px")
// img.setAttribute('width', "200px")

// video.setAttribute('src', videoPlatzi)
// video.setAttribute('width', 400)
// video.setAttribute('height', 400)
// video.setAttribute('autoplay', true)

h1.textContent = "QUE ES CORE?"

document.body.append(h1)
// document.body.append(img)
// document.body.append(video)

// console.log('hola mundo desde webpack.config.js')
