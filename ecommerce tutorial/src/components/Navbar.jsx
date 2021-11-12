import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    margin: 0;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ padding: "10px 0px",justifyContent: "space-between" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "0.75vw" })}
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: 2 })}
`

const MenuItem = styled.div`
    font-size: 14px;
    margin: 25px;
    white-space: nowrap;
    display: inline-block;
    ${mobile({ fontSize: "12px", margin: "0 0 0 10px" })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input value="Search" />
                        <Search style={{color:"grey",fontSize:"16px"}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA .</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgecontent={4} color="primary" >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar