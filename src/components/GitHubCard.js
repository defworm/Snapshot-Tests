import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react'

function GitHubCard() {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant='top' src='https://avatars.githubusercontent.com/u/101788833?s=400&v=4' />
            <Card.Body>
                <Card.Title>GitHubCard</Card.Title>
                <Card.Text>
                    Just a little preliminary gobblyguck to get started
                </Card.Text>
                <Button variant='primary'>Going Somewhere?</Button>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;