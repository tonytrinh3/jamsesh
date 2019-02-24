import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col} from 'react-bootstrap';
import './style.css';
import ReactPlayer from 'react-player';

class DJScreen extends Component {
    render() {
        return (
            <div className = "DJScreenGrid">
                <div className="DJScreen"><ReactPlayer url='https://www.youtube.com/watch?v=pj0M6zOMXus' playing loop controls width = "510px"/></div>
                <div className="DJScreen"><ReactPlayer url='https://www.youtube.com/watch?v=ketCT1eRgmo' playing loop controls muted width = "510px"/></div>
            </div>
        )
    }

}

export default DJScreen;

/*
<Container >
<Row style = {{backgroundColor: 'pink'}}>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
</Row>
<Row>
    <Col variant = 'primary'>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
</Row>
</Container>
*/