import React, { Component } from 'react'
import axios from 'axios'

import './App.css';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log(event)
				console.log(this.state.username)
				console.log(this.state.password )
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div className="App ">
				<h4>Sign Up</h4>
				<form className="form-group ">
					<div className="form-group">
						<div className=" ">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="">
							<input className=" "
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className=" ">
							<label className=" " htmlFor="password">Password: </label>
						</div>
						<div className=" ">
							<input className="form-input"
								placeholder="password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className=" ">
						<div className=" "></div>
						<button
							className="btn btn-primary  "
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
			</div>

		)
	}
}

export default Signup
