import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import ImgProfile from '../images/dennis.jpg'
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { CloseOutlined, Facebook, Instagram, LinkedIn, MoreVertOutlined, Twitter } from '@material-ui/icons';
import styled from "styled-components";



const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;

`;
const Desc = styled.p`
    font-size: 11px;
    font-style: italic;
    display: flex;
    justify-content: center;
`;

const SocialIcons = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Icons = styled.div`
    margin-left: 15px;
    cursor: pointer;
    &:hover{
        color: #${props => props.color};;
    }

`

const Profile = () => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img className='activator' src={ImgProfile} alt="Dennis Akagha" />
                    <a className='btn-floating halfway-fab waves-effect waves-light red' style={{ width: '35px', height: '35px' }}>
                        <MoreVertOutlined style={{ justifyContent: 'center', alignItems: 'center', fontSize: '32px' }} className='activator' />
                    </a>
                </div>
                <div style={{ padding: '15px' }} className="card-content">
                    <Title className="activator text-darken-4 grey-text">
                        Dennis Akagha
                    </Title>
                    <Desc>Frontend and Mobile Developer</Desc>
                </div>
                <div className="card-reveal" style={{ padding: '20px' }} >
                    <span className="card-title grey-text text-darken-4" style={{ fontSize: '15px', padding: '0px' }}>
                        Follow Me
                        <CloseOutlined className="material-icons right"></CloseOutlined>
                    </span>
                    <SocialIcons>
                        <Icons color='0077b5'>
                            <Link to={{ pathname: 'https://www.linkedin.com/in/dennisakagha/' }} target='_blank'><LinkedIn />
                            </Link>
                        </Icons>
                        <Icons color='1DA1F2'>
                            <Link to={{ pathname: 'https://twitter.com/dennisakagha' }} target="_blank"><Twitter /></Link>
                        </Icons>
                        <Icons color='8a3ab9'>
                            <Instagram />
                        </Icons>
                        <Icons color='3b5998'>
                            <Facebook />
                        </Icons>
                    </SocialIcons>
                </div>
            </div>
        </div>
    );
}

export default Profile;