import '../css/style.css'
import { principal } from './message.js'
import data from './teachers.json'
import React, {Component} from 'react'
import { render } from 'react-dom'
import Teachers from './entries/containers/teachers'


render(<Teachers data={data} /> , document.getElementById('container'))
