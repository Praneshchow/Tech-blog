import './Header.css'
import logo from '../../images/profile.png'

const Header = () => {
    return (
            <nav className='header'>
                <h1>Tech Blog</h1>

                <div>
                    <a href="/News">NEWS</a>
                    <a href="/other">OTHER</a>
                    <img src={logo} alt="" />
                </div>
            </nav>
    );
};

export default Header;