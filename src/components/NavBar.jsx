import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/states">All States</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
