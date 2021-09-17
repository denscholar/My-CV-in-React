

const Experience = ({ title }) => {
    return (
        <div className="card" id='experience'>
            <div className="card-content">
                <h6 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    <strong>{title}</strong>
                </h6>
                <div className="row">
                    <div className="col-sm-6 col-md-4" style={{marginTop: '20px'}}>
                        <p className="teal year-exp white-text" style={{padding: '5px'}}>
                            August <strong>2020</strong> - April <strong>2021</strong>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <blockquote className='no-pad'>
                            <h6 className="no-pad" style={{marginTop: '50x'}}>
                                <p style={{fontWeight: 'bolder', paddingBottom: '15px'}}>Uplanit Ltd, UK</p>
                                <strong style={{fontSize:'15px', fontStyle: 'italic', textDecoration: 'underline'}}>Junior Software Developer - Remote</strong>
                            </h6>
                            <ul style={{paddingTop: '10px'}}>
                                <li>Participation in the process of analysis, designing, implementation and testing of new applications.</li><br />
                                <li>Worked along side other developers to build an event planning application with Flutter technology.</li><br />
                                <li>Applying industry standards during the development process to ensure high quality and communicate with team mates as well as, contribute to an Agile delivery team.</li>
                            </ul>
                            
                        </blockquote>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4" style={{marginTop: '20px'}}>
                        <p className="teal year-exp white-text" style={{padding: '5px'}}>
                            Jan. <strong>2020</strong> - July <strong>2020</strong>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <blockquote className='no-pad'>
                            <h6 className="no-pad mt-bottom">
                                <p style={{fontWeight: 'bolder', paddingBottom: '15px'}}>Health Emergency Initiative</p>
                                <strong style={{fontSize:'15px', fontStyle: 'italic', textDecoration: 'underline'}}>Monitoring, Evaluation and Data Analyst</strong>
                            </h6>
                            <ul style={{paddingTop: '10px'}}>
                                <li>Oversee data quality and building interactive dashboard for stakeholder’s decision making, and other data verification.</li><br />
                                <li>Built a single page application to host the organisations dashboard after data cleaning and analysis for visualisation purposes.</li><br />
                                <li>Monitor and evaluate projects; and co-create ideas with other team members. Wrangling, manipulation, and visualization of the organization’s data for insights and decision making.</li>
                            </ul>
                            
                        </blockquote>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4" style={{marginTop: '20px'}}>
                        <p className="teal year-exp white-text" style={{padding: '5px'}}>
                            August <strong>2019</strong> - Sept. <strong>2019</strong>
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <blockquote className='no-pad'>
                            <h6 className="no-pad mt-bottom">
                                <p style={{fontWeight: 'bolder', paddingBottom: '15px'}}>Options Consultancy Services, London</p>
                                <strong style={{fontSize:'15px', fontStyle: 'italic', textDecoration: 'underline'}}>Software Tester (Short-term consulting)</strong>
                            </h6>
                            <ul style={{paddingTop: '10px'}}>
                                <li>User-test the EOS web application with the Gombe State, Nigeria Led Accountability Mechanism; a coalition focused on improving maternal, neonatal and child health by promoting the use of data for decision making.</li><br />
                                <li>Design and disseminate their own scorecard by facilitating a workshop and prepare a detailed report/recommendation on the outcome of the workshop/testing exercise.</li>
                            </ul>                           
                        </blockquote>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;