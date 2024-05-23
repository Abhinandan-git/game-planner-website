import { Link } from 'react-router-dom';
import Button from './Button';
import './css/Signinup.css';

function Signin() {

	return (
		<div className='sign-block-wrapper'>
			<div id="sign-block">
				<div className='sign-block-flex-body'>
					<div className='sign-block-flex-wrapper'>
						<div className="sign-form-block">
							<label className='sign-label' htmlFor='username'>Username</label>
							<input
								type="text"
								id="username"
								name="username"
								className="sign-input-box"
							/>
							<div id='user-nf-err' className="err-txt text text-hide">This username does not exist.</div>
						</div>
						<div className="sign-form-block">
							<label className='sign-label' htmlFor='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								className="sign-input-box"
							/>
							<div id='pwd-mism-err' className="err-txt text text-hide">That password was incorrect.</div>
						</div>
					</div>
				</div>
				<div className='sign-button-wrapper'>
					<Button id='signin'>Sign In</Button>
				</div>
				<hr />
				<div className='text'>New User?</div>
				<div className='sign-button-wrapper'>
					<Link className='sign-link' to="/signup">
						<Button onClick={() => { }} id='signup'>Create Account</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Signin;