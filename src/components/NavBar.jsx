import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <div className="container">
            <nav>
                <Link to="/" id="home-link">
                    <h1 id="home-text">FuelPrice USA</h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/states" className="link">
                            All States
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
