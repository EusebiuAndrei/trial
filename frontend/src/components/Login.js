import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as api from '../api';
import { IoIosMail,IoIosLock,IoLogoFacebook} from "react-icons/io";

const formWidth = {
	width: '60%',
	margin: 'auto',
};

const Login = () => {
	useEffect(() => {
		const apiCall = async () => {
			const {
				success,
				users,
				errorMessage,
			} = await api.getAllUsers();

			console.log(success, users, errorMessage);
		};
		apiCall();
	}, []);

	return (
		<div style={{width:'100%',height:'93%',flexDirection:'row',display:'flex'}}>

			<div style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center',display:'flex'}}>
				<div class="shadow p-3 mb-5 bg-white rounded" style={{width:'70%',height:'90%',backgroundColor:'#F8E1BE',alignItems:'center',justifyContent:'cemter',display:'flex',flexDirection:'column',borderRadius:10,}}>
					<p style={{fontSize:25,fontWeight:'bold',marginTop:'15%',marginBottom:'10%'}}>Log in to your account</p>

					<div style={{display:'flex',flexDirection:'column',width:'50%',marginBottom:'5%'}}>

						<p style={{marginBottom:0,alignItems:'flex-start',display:'flex',fontWeight:'400'}}>Email address</p>
						<div style={{display:'flex',flexDirection:'row',width:'100%'}}>
							<input type="email" placeholder="Example@mail.com" style={{borderWidth:0,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#D9054F'}}/>
							<IoIosMail size={25} color={'#D9054F'}/>
						</div>

					</div>
				

					<div style={{display:'flex',flexDirection:'column',width:'50%'}}>
						<p style={{marginBottom:0,alignItems:'flex-start',display:'flex',fontWeight:'400'}}>Password</p>

						<div style={{display:'flex',flexDirection:'row',borderWidth:10,width:'100%'}}>
							<input type="password" placeholder="Password" style={{borderWidth:0,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#D9054F'}}/>
								<IoIosLock size={25} color={'#D9054F'}/>
						</div>
						
					</div>

					<div style={{width:'60%',height:'8%',backgroundColor:'#D9054F',marginTop:'10%',borderRadius:5,justifyContent:'center',alignItems:'center',display:'flex'}}>
						<p style={{color:'white',fontSize:15,fontWeight:'bold',display:'flex'}}>Log in</p>
					</div>

					
					<div style={{width:'60%',height:'8%',marginTop:'2%',backgroundColor:'#D9054F',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
						<div style={{width:'98%',height:'92%',backgroundColor:'white',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
							<div style={{display:'flex',flexDirection:'row'}}>
								<IoLogoFacebook size={25} color={'#D9054F'}/>
								<p style={{color:'#D9054F',fontSize:15,fontWeight:'bold',display:'flex'}}>Log in with Facebook</p>
							</div>
						</div>
					</div>

					<p style={{color:'#858585',fontSize:11,marginTop:'15%'}}>Don't have an account? Create one</p>
				</div>
			</div>

			<div style={{width:'60%',height:'100%',backgroundColor:'blue'}}>
			   <img src="https://cdn.dribbble.com/users/1355613/screenshots/10555328/media/aaa94d5016561c4faba977333269fb3a.jpg" alt="Logo" style={{width:'100%',height:'100%'}} />;
			</div>

		</div>
	);
};

export default Login;
