import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap';

class AddVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {form: {}};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let form = this.state.form;
        if(form.url) {
            let urlMatch = form.url.match(/v=(.*)/);
            let videoId;
            if(urlMatch && urlMatch.length > 1) {
                videoId = urlMatch[1];
            }
            this.props.submit({id: videoId, start: form.start, end: form.end});
        }
    }

    handleChange = (event) => {
        this.setState({form: {...this.state.form, [event.target.name]: event.target.value}});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="url">
                                <Form.Label>Video Url</Form.Label>
                                <Form.Control required name="url" onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="start">
                                <Form.Label>Start</Form.Label>
                                <Form.Control required type="number" name="start" onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="end">
                                <Form.Label>End</Form.Label>
                                <Form.Control required type="number" name="end" onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

export default AddVideo;
