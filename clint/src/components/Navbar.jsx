import React from 'react';
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from '../responsive'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../redux/userRedux';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`;

// Left Side
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lnaguage = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    border-radius: 10px;
    padding: 2px
`
const Input = styled.input`
    border: none;
    padding: 5px;
    outline: none;
    ${mobile({width: "50px"})}
`

// Center Side
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`

// Right Side
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})}
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    const dipatch = useDispatch()

    const handleLogout = () => {
        dipatch(logout())
    }


    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Lnaguage>EN</Lnaguage>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TITLE.</Logo>
                </Center>
                <Right>
                    {user ? <MenuItems onClick={handleLogout}>LOGOUT</MenuItems> : (
                        <>
                            <Link to="/register" className="link">
                                <MenuItems>REGISTER</MenuItems>
                            </Link>
                            <Link to="/login" className="link">
                                <MenuItems>SIGN IN</MenuItems>
                            </Link>
                        </>
                    )}
                    <Link to="/cart" className="link">
                        <MenuItems>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItems>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;