import { EmailOutlined, HouseOutlined, PhoneOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Add = styled.span`
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 15px;

`
const Phone = styled.span`
    display: flex;
    padding-top: 10px;
    flex-direction: row; 
    color: white;
    font-size: 15px;
`
const Email = styled.span`
    display: flex;
    padding-top: 10px;
    flex-direction: row; 
    color: white;
    font-size: 12px;
    text-decoration: underline;
    font-weight: bold;
    letter-spacing: 1px;

    
`;

const BasicInfo = () => {
    return (
        <div class="column" >
            <div >
                <div class="card-panel teal" style={{padding: '10px'}}>
                    <Add class="white-text">
                        <HouseOutlined style={{paddingRight:'5px'}}/>4, Sijuwola Street, Ago Palace Way, Lagos, Nigeria
                    </Add>
                    <Phone class="white-text">
                        <PhoneOutlined style={{paddingRight:'5px'}} /> +2348145986650
                    </Phone>
                    <Email class="white-text">
                        <EmailOutlined style={{paddingRight:'5px'}} /> d.akagha20@gmail.com
                    </Email>
                </div>
                
            </div>
            
        </div>
    );
}

export default BasicInfo;