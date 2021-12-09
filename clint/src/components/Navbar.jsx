import React from 'react';
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`

// Center Side
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

// Right Side
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px
`

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Lnaguage>EN</Lnaguage>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: "gray", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TITLE.</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;