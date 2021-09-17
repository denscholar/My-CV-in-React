import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.p`
    padding-top: 10px;

`
const Percentage = styled.p`
    padding-top: 10px;


`

const Progress = styled.div`
    padding: 20px;
`

const Skill = ({ title }) => {
    return (
        <div className="card" id='skill'>
            <div className="card-content">
                <h6>
                    <strong>{title}</strong>
                </h6>
                <div className="row" style={{marginTop: '10px'}}>
                    <div className="col-sm-6">
                        <Container>
                            <Title>HTML</Title>
                            <Percentage>90%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '90%'}}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>CSS</Title>
                            <Percentage>50%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '50%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>PYTHON</Title>
                            <Percentage>85%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '85%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>JAVASCRIPT</Title>
                            <Percentage>60%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '60%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>DART</Title>
                            <Percentage>65%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '65%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>FLUTTER</Title>
                            <Percentage>50%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '50%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>REACT</Title>
                            <Percentage>60%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '60%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>DATA ANALYST</Title>
                            <Percentage>85%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '85%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Container>
                            <Title>UI/UX</Title>
                            <Percentage>70%</Percentage>
                        </Container>
                        <div className="progress">
                            <div className="determinate red" style={{ width: '70%' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;