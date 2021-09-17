import styled from "styled-components";

const Container = styled.div`
    background-color: teal;
    align-items: center;
    


`
const Content = styled.p`
    align-items: center;
    text-align: center;
    color: white;
    padding: 10px 0;

`
const Link = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;


`


const Bottom = () => {
    return ( 
    <Container style={{marginTop: '20px'}}>
        <Content>Copyright © 2021 <Link href="#">Dennis REACT Resume/CV Project</Link> All rights reserved</Content>
    </Container>
     );
}
 
export default Bottom;