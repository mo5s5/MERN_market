import React, { useEffect } from 'react'
import './navBar.scss'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar(props) {
    const { cartItems } = props;

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar'];
    let cartNavClasses = ['cart-nav'];
    if (scrolled) {
        navbarClasses.push('scrolled');
        cartNavClasses.push('scrolled-cart');

    }
    return (
        <header className={navbarClasses.join(" ")}>
            {/* <header className='navbar'> */}
            <ul className='nav'>
                <CustomLink to='/'>Главная</CustomLink>
                <CustomLink to='/delivery'>Доставка</CustomLink>
                <CustomLink to='/sale'>Акции</CustomLink>
                <CustomLink to='/contacts'>Контакты</CustomLink>
            </ul>
            <div className={cartNavClasses.join(" ")}>
                <Link to="/basket">
                    <span className='cart-count'>{cartItems.length}</span>
                    <img alt='cart' src='https://img.icons8.com/external-sbts2018-solid-sbts2018/58/FFFFFF/external-cart-ecommerce-basic-1-sbts2018-solid-sbts2018.png'></img>
                </Link>

            </div>

        </header>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li >
            <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
        </li>)

}
