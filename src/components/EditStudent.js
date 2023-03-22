import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-route'

class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          code: '',
          firstname: '',
          lastname: '',
          email: ''
        }
      }
    componentDidMount(){
        axios.get('http://localhost:5000/students/edit-student/'+ this.props.router.params.id)
        .then(res => {
                this.setState({
                    code: res.data.code,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    email: res.data.email
                })
            })
        .catch(err =>{
                console.log(err)
            })
    }
    onChangeStudentCode = (e) =>{
        this.setState({code: e.target.value})
    }
    onChangeStudentFirstname = (e) =>{
        this.setState({firstname: e.target.value})
    }
    onChangeStudentLastname = (e) =>{
        this.setState({lastname: e.target.value})
    }
    onChangeStudentEmail = (e) =>{
        this.setState({email: e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault()
        const studentObject = {
            code: this.state.code,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }
        axios.put('http://localhost:5000/students/update-student/'+ this.props.router.params.id,studentObject)
        .then(res => {
                console(res.data)
            })
        .catch(err =>{
                console.log(err)
            })

    }
  render() {
    return (
      <div>
        <Form onValidate onSubmit={this.onSubmit}>
          <Form.Group  md='4'>
            <Form.Label>CODE</Form.Label>
            <Form.Control type='text'  value={this.state.code} onChange={this.onChangeStudentCode} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Firstname</Form.Label>
            <Form.Control type='text' value={this.state.firstname} onChange={this.onChangeStudentFirstname } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lastname</Form.Label>
            <Form.Control type='text' value={this.state.lastname} onChange={this.onChangeStudentLastname}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value={this.state.email} onChange={this.onChangeStudentEmail}/>
          </Form.Group>
          <Form.Group className='mt-4 text-center'>
          <Button variant='outline-primary' type='submit' >Update</Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default withRouter (EditStudent)
