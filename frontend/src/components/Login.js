import React, { useEffect } from 'react';
import {Button ,InputGroup,FormControl,Alert,Popover,OverlayTrigger,Spinner} from 'react-bootstrap';
import * as api from '../api';
import style from '../styles/LoginDesktopStyle';
import {
	Link,
  } from "react-router-dom";
  
import { IoIosMail,IoIosLock,IoLogoFacebook,IoIosPerson} from "react-icons/io";
import { fadeIn } from 'react-animations';
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 })
	return isDesktop ? children : null
  }

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
	return isMobile ? children : null
}


class Login extends React.Component{
	constructor(){
		super();
		this.state ={
			email:"danR@g2mail.com",
			password:"abc12345",
			newAccountEmail:"",
			newAccountPassword:"",
			newAccountConfirmPassword:"",
			username:"",
			infoTextRegister:"",
			alert:"",
			success:"",
			userData:{},
			loading:false,
			error:"",
			fieldsError:"",
			option:2,
			accountType:"",
		}

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleRegisterClick = this.handleRegisterClick.bind(this);
		this.handleChangeNewEmail = this.handleChangeNewEmail.bind(this);
		this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
		this.handleChangeNewPasswordConfirm = this.handleChangeNewPasswordConfirm.bind(this);
		this.handleChangeUsername = this.handleChangeUsername.bind(this);

	}


	async handleLoginClick(){
		console.log(JSON.stringify(this.state,null,'...'))
		this.setState({success:""})
		if(this.state.email === ""){
			this.setState({fieldsError:'email'})
		} else if(this.state.password === ""){
			this.setState({fieldsError:'password'})
		} else {
			this.setState({fieldsError:""});

			try{
				this.setState({loading:true})
				let answer = await api.login(this.state.email,this.state.password);
				if(answer.success === true){
					this.setState({loading:false,userData:answer.user,success:true})
				} else {
					this.setState({loading:false,success:false,error:answer.errorMessage})
				}
				console.log(answer)
			} catch(err){
				console.log(err);
				this.setState({error:err,loading:false,success:false})
			}
		}
	}

	async handleRegisterClick(){
		console.log(JSON.stringify(this.state,null,'...'))

		this.setState({success:""})
		if(this.state.newAccountEmail === ""){
			this.setState({fieldsError:'email'})
		} else if(this.state.newAccountPassword === ""){
			this.setState({fieldsError:'password'})
		} else if(this.state.newAccountConfirmPassword === ""){
			this.setState({fieldsError:"confirm password"});
		} else if(this.state.newAccountConfirmPassword !== this.state.newAccountPassword){
			this.setState({fieldsError:"Parolele trebuie sa coincida!"})
		} else if(this.state.accountType === ""){
			this.setState({fieldsError:"Selecteaza tipul de cont!"})
		} else {
			this.setState({fieldsError:""});

			try{
				this.setState({loading:true})
				let answer = await api.register(this.state.username,this.state.accountType,this.state.email,this.state.newAccountPassword);
				if(answer.success === true){
					this.setState({loading:false,userData:answer.user,success:true})
				} else {
					this.setState({loading:false,success:false,error:answer.errorMessage})
				}
				console.log(answer)
			} catch(err){
				console.log(err);
				this.setState({error:err,loading:false,success:false})
			}
		}
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangePassword(event){
		this.setState({password: event.target.value});
	}

	handleChangeNewEmail(event){
		this.setState({newAccountEmail: event.target.value});
	}

	handleChangeNewPassword(event){
		this.setState({newAccountPassword: event.target.value});
	}

	handleChangeNewPasswordConfirm(event){
		this.setState({newAccountConfirmPassword: event.target.value});
	}

	handleChangeUsername(event){
		this.setState({username: event.target.value});
	}

	infoText = (success) =>{
		if(success === ""){
			return <p></p>
		}
		if(success === false){
			return <p style={{color:'#F80505'}}>Ops ! Error: {this.state.error} </p>
		}
		if(success === true){
			return <p style={{color:'#1FF01B'}}>Te-ai logat cu succes !</p>
		}
	}
	
	fieldsErrorText = (error) => {	
		if(error !== ""){
			if(error === "Parolele trebuie sa coincida!" || error === "Selecteaza tipul de cont!") 			
				return <p style={{color:'#F80505'}}>{error}</p>
			else return <p style={{color:'#F80505'}}>Te rog completeaza campul {error} !</p>
		}
	}

	renderInputfield = (topText,placeHolder,inputFunction,type) => {
		return(
			<div style={style.inputContainer}>
			<p style={style.inputText}>{topText}</p>
			<InputGroup className="mb-3" style={style.inputGroup}>
				<FormControl
					placeholder={placeHolder}
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={inputFunction}
					type={type}
				/>
				<InputGroup.Prepend>
					<InputGroup.Text style={style.inputGroupText} id="basic-addon1">
						<IoIosMail size={22} color={'#D9054F'}/>
					</InputGroup.Text>
				</InputGroup.Prepend>
			</InputGroup>
		</div>
		);
	}


	renderRoleButton = (text,role) => {
		return(
			<Button variant="outline-danger" onClick={()=>{this.setState({accountType:role})}}
				style={{backgroundColor:this.state.accountType === role ? "red" : "white",color:this.state.accountType === role ? "white" : "red"}}>
				{text}
			</Button>
		);
	}

	render(){
		return (
			<div>
				<Desktop>
					<div style={style.container}>
					<div style={style.leftContainer}>
						{
							this.state.option === 1 ? 
							<div className="shadow p-3 mb-5 bg-white rounded" style={style.loginContainer}>

								<p style={style.loginText}>Log in to your account</p>

								{this.renderInputfield("Email address","example@mail.com",this.handleChangeEmail)}
								{this.renderInputfield("Passsword","●●●●●●●●●",this.handleChangePassword,"password")}

								<Button variant="danger" style={style.logInButton} onClick={this.handleLoginClick}>
									Log in
								</Button>

								<Button variant="outline-danger" style={style.logInFacebook}>
									<IoLogoFacebook size={25} style={style.facebookLogo} color={'#D9054F'}/>
									 Log in with Facebook
								</Button>

								<button style={style.dontHaveAccount} onClick={()=>{this.setState({option:2,fieldsError:"",success:""})}}>
									Don't have an account? Create one
								</button>

								{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={{marginTop:'5%'}} /> : <p></p>}
								{this.infoText(this.state.success)}
								{this.fieldsErrorText(this.state.fieldsError)}

							</div> 

							: <div className="shadow p-3 mb-5 bg-white rounded" style={style.loginContainer}>
								<p style={style.createAccountText}>Create account</p>

								<div style={style.roleContainer}>
									{this.renderRoleButton("Client","client")}
									{this.renderRoleButton("Provider","provider")}
								</div>

								{this.renderInputfield("Username","username",this.handleChangeUsername)}
								{this.renderInputfield("Email address","example@mail.com",this.handleChangeNewEmail)}
								{this.renderInputfield("Password","●●●●●●●●●",this.handleChangeNewPassword,"password")}
								{this.renderInputfield("Confirm password","●●●●●●●●●",this.handleChangeNewPasswordConfirm,"password")}

								<Button variant="danger" style={style.logInButton} onClick={this.handleRegisterClick} >
									Register
								</Button>
								
								<button style={style.alreadyHaveAccount} onClick={()=>{this.setState({option:1,fieldsError:"",success:""})}}>
									Already have an account? Log in 
								</button>

								{this.state.loading === true ? <Spinner animation="grow" variant="danger" style={{marginTop:'5%'}} /> : <p></p>}
								{this.infoText(this.state.success)}
								{this.fieldsErrorText(this.state.fieldsError)}

							</div>
						}
					</div>
					<div style={style.rightContainer}>
					<img src="https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg" alt="Logo" style={style.chefImg} />;
					</div>
		
				</div>
			</Desktop>
				<Mobile>
					<div>
						<p>Hello</p>
					</div>
				</Mobile>
			</div>
		);
	}
}

export default Login;
