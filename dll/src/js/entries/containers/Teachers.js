import React, {Component} from 'react'
import Teacher from '../components/teacher'
import '../../../css/teachers.scss'

class Teachers extends Component{
  render(){
    return(
      <ul className="Teachers">
        {
          this.props.data.teachers.map((teacherData)=>{
          return <Teacher {...teacherData} />
          })
        }
      </ul>
    )
  }
}

export default Teachers
