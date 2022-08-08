import React from "react";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';




export function Header() {
    return (<>
        <Nav className="justify-content-center" activeKey="/home" style={{ display: 'flex', gap: '5rem' }}>
            <Nav.Item style={{ display: 'flex', marginTop: '1rem', gap: '5rem' }} >
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item >
            <Nav.Item style={{ display: 'flex', marginTop: '1rem', gap: '5rem' }}>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ display: 'flex', marginTop: '1rem', gap: '5rem' }}>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
    );
}

