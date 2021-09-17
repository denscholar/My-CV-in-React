import { Link } from "react-router-dom";


const Portfolio = ({title}) => {
    return ( 
        <div className="card" id='portfolio'  >
            <div className="card-content">
                <h6><strong>{title}</strong></h6>
                <p style={{marginTop:'12px'}}>
                    To view all my personal projects, kindly use the button below to visit my github account. 
                </p>
                <div className="btn red" style={{marginTop:'12px'}}>
                    <Link style={{color: 'white', fontStyle:'bold'}} to={{ pathname: 'https://github.com/denscholar'}} target='_blank'>Visit Portfolio Page</Link>
                </div>


            </div>
        </div>
     );
}
 
export default Portfolio;