import styled from "styled-components";
// import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-scroll";


export const Nav = styled.nav`
    background: teal;
    margin: 0;
    padding: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);

`


export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    z-index: 1;
  

`

