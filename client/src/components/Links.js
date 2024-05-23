import './css/Links.css';
import { Link } from 'react-router-dom';

const Links = () => (
  <div className="links-bar">
    <Link className="sign-link" to="/signup">Sign up</Link>
    <Link className="sign-link" to="/signin">Sign in</Link>
  </div>
);

export default Links;