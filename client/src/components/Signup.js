import { Link } from 'react-router-dom';
import Button from './Button';
import './css/Signinup.css';

function Signup() {
	return (
		<div className='sign-block-wrapper'>
			<div id="sign-block">
				<div className='sign-block-flex-body'>
					<div className='sign-block-flex-wrapper'>
						<div className="sign-form-block">
							<label className='sign-label' htmlFor='username'>Username</label>
							<div className='username-input'>
								<input
									type="text"
									id="username"
									name="username"
									className="sign-input-box"
								/>
							</div>
							<div id='usnm-err' className="err-txt text text-hide">Enter valid username.</div>
						</div>
						<div className="sign-form-block">
							<label className='sign-label' htmlFor='password'>Password</label>
							<input
								id="password"
								type="password"
								name="password"
								className="sign-input-box"
							/>
							<div id='pwd-inv-err' className="err-txt text text-hide">Password must be between 6 - 30</div>
						</div>
						<div className="sign-form-block">
							<label className='sign-label' htmlFor='cnfm-password'>Confirm Password</label>
							<input
								type="password"
								id="cnfm-password"
								name="cnfm-password"
								className="sign-input-box"
							/>
							<div id='pwd-nmch-err' className="err-txt text text-hide">Passwords do not match!</div>
						</div>
					</div>
				</div>
				<div className='sign-button-wrapper'>
					<Button id='signup'>Sign Up</Button>
				</div>
				<hr />
				<div className='text'>Already have an account?</div>
				<div className='sign-button-wrapper'>
					<Link className='sign-link' to="/signin">
						<Button id='signin'>Log In</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Signup;