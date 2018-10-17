import '../css/style.css'
import { principal } from './message.js'
import data from './teachers.json'
import React, {Component} from 'react'
import { render } from 'react-dom'
import Teachers from './entries/containers/teachers'
// import '../css/main.less'

const $button = document.getElementById('dynamic-import')

$button.addEventListener('click', async () =>{
  const { default: alerta } = await import('./alerta')
  alerta()
})

render(<Teachers data={data} /> , document.getElementById('container'))
