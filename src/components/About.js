

const About = ({title}) => {
    return ( 
        <div className="card" id='about'>
            <div className="card-content">
                <h6 className='mt-bottom'>
                    <strong>{title}</strong>
                </h6>
                <p className="grey-text" style={{marginTop: '10px'}}>
                I am a frontend and mobile app developer with experience in UI/UX and Python for Data Science with demonstrated ability to deliver valuable insights via data analytics and building interactive dashboards. I am confident my experience and expertise will be a perfect fit for your company.
                </p>
            </div>
        </div>
     );
}
 
export default About;