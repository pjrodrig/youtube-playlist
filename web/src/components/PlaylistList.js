import React from 'react';
import {
    Image,
    Table
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretUp, 
    faCaretDown,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

class PlaylistList extends React.Component {

    render() {
        if(this.props.playlist !== undefined) {
            return (
                <Table>
                    <tbody>
                        {this.props.playlist.map((video, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><Image src={'https://img.youtube.com/vi/' + video.id + '/default.jpg'} thumbnail /></td>
                                <td>{video.id}</td>
                                <td>{video.start}</td>
                                <td>{video.end}</td>
                                <td>
                                    <FontAwesomeIcon icon={faCaretUp}/>
                                    <FontAwesomeIcon icon={faCaretDown}/>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            );
        } else {
            return (<p>Loading playlist</p>);
        }
    }
}

export default PlaylistList;
