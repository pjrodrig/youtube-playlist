import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    Row
} from "react-bootstrap";
import {
    Table
} from "react-bootstrap";

import "../css/Playlists.css";

let playlists = [
    {name: 'playlist 1', description: "this is the first playlist in the list"},
    {name: 'playlist 2', description: "this is the second playlist in the list"}
]

class Playlists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddModal: false,
            createPlaylistForm: {name: "", description: ""}
        };
    }

    openCreatePlaylistModal = () => {
        this.setState({showAddModal: true});
    }

    createPlaylist = () => {
        let createPlaylistForm = this.state.createPlaylistForm;
        console.log(createPlaylistForm);
        this.setState({
            createPlaylistForm: {name: "", description: ""},
            showAddModal: false
        });
    }

    cancelCreatePlaylist = () => {
        this.setState({showAddModal: false});
    }

    handleCreatePlaylistChange = (event) => {
        this.setState({createPlaylistForm: {...this.state.createPlaylistForm, [event.target.name]: event.target.value}});
    }

    render() {
        return (
            <div className="Playlists">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h1>Playlists</h1>
                        </Col>
                        <Col md={4}>
                            <Button className="add-button" onClick={this.openCreatePlaylistModal}>Create</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playlists.map((playlist, i) =>
                                    <tr key={i}>
                                        <td>{playlist.name}</td>
                                        <td>{playlist.description}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
                <Modal show={this.state.showAddModal} onHide={this.cancelCreatePlaylist} transition={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Playlist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control required name="name" onChange={this.handleCreatePlaylistChange}/>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control name="description" as="textarea" onChange={this.handleCreatePlaylistChange}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.cancelCreatePlaylist}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.createPlaylist}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}

export default Playlists;
