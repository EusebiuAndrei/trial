import React, { useEffect } from 'react';
import {Button ,InputGroup,FormControl,Alert,Popover,OverlayTrigger} from 'react-bootstrap';
import * as api from '../api';
import {
	Link,
  } from "react-router-dom";
  
import { IoIosMail,IoIosLock,IoLogoFacebook} from "react-icons/io";

const popover = (
	<Popover id="popover-basic">
	  <Popover.Title as="h3">Popover right</Popover.Title>
	  <Popover.Content>
		And here's some <strong>amazing</strong> content. It's very engaging.
		right?
	  </Popover.Content>
	</Popover>
  );
  

class Login extends React.Component{
	constructor(){
		super();
		this.state ={
			email:"",
			password:"",
		}

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);

	}


	handleLoginClick(){
		console.log(JSON.stringify(this.state,null,'...'))
		if(this.state.email === ""){
			return <Alert variant="danger">
				Te rog introdu un email valid!
		  	</Alert>
		} else if(this.state.password === ""){
			return <Alert variant="danger">
				Te rog introdu o parola!
		  	</Alert>
		} else {
			let answer = api.login(this.state.email,this.state.password);
			console.log(answer)
		}
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}
	handleChangePassword(event){
		this.setState({password: event.target.value});
	}

	render(){
		return (
			<div style={{width:'100%',height:'93%',flexDirection:'row',display:'flex'}}>
	
				<div style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center',display:'flex'}}>
					<div className="shadow p-3 mb-5 bg-white rounded" style={{width:'70%',height:'90%',alignItems:'center',justifyContent:'cemter',display:'flex',flexDirection:'column',borderRadius:15}}>
						<p style={{fontSize:25,fontWeight:'bold',marginTop:'15%',marginBottom:'10%'}}>Log in to your account</p>
	
						<div style={{display:'flex',flexDirection:'column',width:'65%',marginBottom:'5%'}}>
	
							<p style={{marginBottom:0,alignItems:'flex-start',display:'flex',fontWeight:'500',paddingLeft:2}}>Email address</p>
							<InputGroup className="mb-3" style={{borderColor:'#D9054F',width:'100%',marginBottom:0,borderWidth:0}}>
								<FormControl
									placeholder="example@mail.com"
									aria-label="Username"
									aria-describedby="basic-addon1"
									onChange={this.handleChangeEmail}
								/>
								<InputGroup.Prepend>
									<InputGroup.Text style={{backgroundColor:'#F9F9F9',borderLeftWidth:0}} id="basic-addon1"><IoIosMail size={22} color={'#D9054F'}/></InputGroup.Text>
								</InputGroup.Prepend>
							</InputGroup>
	
						</div>
					
						<div style={{display:'flex',flexDirection:'column',width:'65%',marginBottom:'5%'}}>
	
							<p style={{marginBottom:0,alignItems:'flex-start',display:'flex',fontWeight:'500',paddingLeft:2}}>Password</p>
							<InputGroup className="mb-3" style={{width:'100%',marginBottom:0,borderWidth:0}}>
								<FormControl
								placeholder="●●●●●●●●●"
								aria-label="Username"
								aria-describedby="basic-addon1"
								type="password"
								onChange={this.handleChangePassword}
								/>
								<InputGroup.Prepend >
									<InputGroup.Text style={{backgroundColor:'#F9F9F9',borderLeftWidth:0,marginBottom:0}} id="basic-addon1"><IoIosLock size={22} color={'#D9054F'}/></InputGroup.Text>
								</InputGroup.Prepend>
							</InputGroup>
	
						</div>
	
						<Button variant="danger" style={{width:'60%',height:'8%',marginTop:'3%',backgroundColor:'#D9054F'}} onClick={this.handleLoginClick} >
							Log in
						</Button>
	

						<OverlayTrigger trigger="click" placement="right" overlay={popover}>
							<Button variant="outline-danger" style={{width:'60%',height:'8%',marginTop:'2%',borderWidth:1.5,flexDirection:'row',display:'flex'}}>
									<IoLogoFacebook size={25} style={{marginLeft:10,marginRight:4}} color={'#D9054F'}/>
									Log in with Facebook
							</Button>
						</OverlayTrigger>
	
						<Link to="/register" style={{color:'#858585',fontSize:11,marginTop:'15%'}}>Don't have an account? Create one</Link>
					</div>
				</div>
	
				<div style={{width:'60%',height:'100%',backgroundColor:'blue'}}>
				   <img src="https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg" alt="Logo" style={{width:'100%',height:'100%'}} />;
				</div>
	
			</div>
		);
	}
}

export default Login;
