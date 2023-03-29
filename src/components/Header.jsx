
import '../assets/css/Title.css';
import V2 from '../assets/image/V2.png';

function Header() {

    const currentDate = new Date().toLocaleDateString()

    return (  
        <header>
            <img src={V2} className="logo"/>
            <div className="tito">
                <h3>{currentDate}</h3>
                <h3>I2P_URY</h3>
            </div>
        </header>

    );
}

export default Header;