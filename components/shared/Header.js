import React, {useState} from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';


const BsNavLink = props => {
    const {href, title} = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const BsNavBrand = ({name}) =>
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">{name}</a>
    </Link>

const LoginLink = () =>
    <a className="navbar-brand port-navbar-brand" href="/api/v1/login" title={'login'}>Login</a>

const LogoutLink = () =>
    <a className="navbar-brand port-navbar-brand" href="/api/v1/logout" title={'logout'}>Logout</a>

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {data, loading, error} = props

    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md">
                <BsNavBrand name={data ? data.name : "anonymous"}/>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/" title="Home"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/about" title="About"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/blogs" title="Blogs"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/cv" title="Cv"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/secretssr" title="SecretSSR"/>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        {
                            data ?
                            <NavItem className="port-navbar-item">
                                <LogoutLink/>
                            </NavItem>
                            :
                            <NavItem className="port-navbar-item">
                                <LoginLink/>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
