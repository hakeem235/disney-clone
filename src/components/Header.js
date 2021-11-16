import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="./images/logo.svg" />
            <Navmenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </Navmenu>
            <UserImg src='https://i.ibb.co/q1g7CrQ/ahmed.png' />
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
display: flex;
height: 70px;
background-color: #090b13;
align-items: center;
padding: 0 36px;
`

const Logo = styled.img`
width: 80px;
`

const Navmenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;

    img {
        width: 20px;
    }
    span {
       font-size: 13px; 
       letter-spacing: 1.42px;
    }
}


`
const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`
