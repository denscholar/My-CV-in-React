// import { HashLink as Link } from "react-router-hash-link";
import { Link } from 'react-router-dom';

const Education = ({ title }) => {
    return (
        <div id='education' className='card'>
            <div className="card-content table-responsive">
                <h6><strong>{title}</strong></h6>
                <table className="table table-striped" style={{marginTop: '10px'}}>
                    <thead>
                        <tr>
                            <th scope="col">College/University</th>
                            <th scope="col">Course</th>
                            <th scope="col">Date</th>
                            <th scope="col">View It</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>University of the People, USA</td>
                            <td>Computer Science</td>
                            <td>In View</td>
                            <td><Link to={{ pathname: 'https://www.google.com' }} target="_blank" className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Amani Institute, Nairobi, Kenya</td>
                            <td>Social Innovation Mgt</td>
                            <td>2018</td>
                            <td><Link to='#' className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                            <td>University of Calabar</td>
                            <td>Finance</td>
                            <td>2010</td>
                            <td><Link to='#' className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                         <td>Federal Polytechnic, Oko</td>
                             <td>Business Management</td>
                           <td>2003</td>
                           <td><Link to='#' className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                            <td>FofX Academy</td>
                            <td>Software Engineering</td>
                            <td>2019</td>
                            <td><Link to='#' className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                            <td>FofX Academy</td>
                            <td>Software Engineering</td>
                            <td>2019</td>
                            <td><Link to={{pathname: 'https://drive.google.com/file/d/1z4ue0icI6CcxgQgZmCwrUdHMqki6Pd9k/view?usp=sharing'}} target="_blank" className='btn blue'>View</Link></td>
                        </tr>
                        <tr>
                            <td>Curators Interactive</td>
                            <td>Data Science</td>
                            <td>2019</td>
                            <td><Link to={{pathname:'https://drive.google.com/file/d/1RIYgt1_IfIHazNq0SfwHYNnDZQlDI1fc/view'}} target="_blank" className='btn blue'>View</Link></td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Education;
