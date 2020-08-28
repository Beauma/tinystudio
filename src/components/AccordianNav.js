import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navcard.css'


class AccordianNav extends React.Component{
    constructor(props){
       super(props)
    }

    //Not currently used
    handleOnClick = (event) => {
        console.log(event.currentTarget);
        event.currentTarget.scrollIntoView(true)
    }
    
    render() {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    About
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    Tiny Studio grew out of <a href="https://www.unboundary.com/">Unboundary</a>, a transformation design firm based in Atlanta with clients accross the world. To conduct their business during the COVID-19 pandemic, a small studio setup was created.   
                </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                    Capabilities 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <ul>
                    <li>Live, multicamera switching</li>
                    <li>Streaming to any service (Zoom, Youtube, etc)</li>
                    <li>Recording in 4K</li>
                    <li>Proffessional audio from lavalier mics</li>
                    <li>Proffessional lighting from 4x panel lights</li>
                    <li>Computer input for presenting</li>
                    <ul>
                        <li>Picture-in-Picture mixing</li>
                        <li>Green Screening</li>
                    </ul>
                    <li>Monitor for teleprompting or videoconfrencing</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                    Rates
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>Studio rate is $99 per hour, staffed with one operator. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                    Contact
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                    You can <a href="mailto:BeauMartin96@icloud.com">email us</a> to get in touch. 
                    We'd be happy to set up a time to talk over call or video. 
                    Automated booking is available for existing clients. 
                    
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

}

export default AccordianNav
