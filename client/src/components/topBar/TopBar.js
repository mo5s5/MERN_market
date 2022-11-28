import Basket from './basket/Basket';
import logo from '../../img/logo1.svg';
import phone from '../../img/red-phone.svg';
import './topBar.scss';
import NavBar from './navBar/NavBar';

function TopBar(props) {
    const { cartItems } = props;

    return (
        <div className='topBar'>
            <div className='top'>
                <img src={logo} className="logo" alt="logo"></img>
                <div className='top-phone-info'>
                    <div className='phone'><img className='red-phone' alt='phone' src={phone}></img>
                        <a className='phone-number' href="tel:+7-987-705-78-96" >+7-987-705-78-96</a>
                    </div>
                </div>

                <div className='top-info' >
                    <div>
                        <span className='info'>Часы работы: </span>
                        <span className='text'>Пн. - Сб. 9:00 - 18:00</span>
                    </div>

                    <div>
                        <span className='info'>Эл. почта: </span>
                        <span className='text'>info@mail.ru</span>
                    </div>

                    <div>
                        <span className='info'>Адрес: </span>
                        <span className='text'>МКАД, 98 км, вл3 (Одинцово)</span>
                    </div>
                </div>
                <Basket cartItems={cartItems}></Basket>
            </div>
            <div className='navbar'><NavBar cartItems={cartItems} /></div>
        </div>
    );
}
export default TopBar;