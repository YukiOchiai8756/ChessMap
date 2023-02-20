import { VectorMap } from "@south-paw/react-vector-maps";
import world from './world.json';
import React from 'react';
import './css/Home.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useNavigate} from 'react-router-dom';

function Home() {
    const [hovered, setHovered] = React.useState("None");
    const [focused, setFocused] = React.useState("None");
    const [clicked, setClicked] = React.useState("None");
    const [openings, setOpenings] = React.useState("");

    // Retrieve the openings from the country code provided in the request
    const retrieveOpenings = async () => {
        const res = await fetch("http://localhost:8000/api/retrieve", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"countryCode": clicked})
        });
        const body = await res.json();

        if (body.error) {
            if (body.error_description) {
                alert(`${body.error}: ${body.error_description}`);
            } else {
                alert(`${body.status}: ${body.error}`);
            }
        } else {
            var strings = "";
            body.forEach(function(object) {
                let keys = Object.keys(object);
                strings = strings + keys + "\n";
            })
            setOpenings(strings);
        }
    }

    // Whenever the value of clicked is modified, it will trigger this hook
    React.useEffect(() => {
        if (clicked !== 'None') {
            retrieveOpenings();
            initModal();
        }
    }, [clicked]);

    const layerProps = {
        onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        onMouseLeave: ({ target }) => setHovered('None'),
        onFocus: ({ target }) => setFocused(target.attributes.name.value),
        onBlur: ({ target }) => setFocused('None'),
        onClick: ({ target }) => {
            setClicked(target.attributes.id.value);
        }
    };

    const [show, setShow] = React.useState(false);

    // Function to show the modal
    function initModal() {
        setShow(true)
    }
    
    // Function to close the modal
    function closeModal() {
        // Reset the value of clicked to None so pressing on the same country works
        setClicked("None");
        setShow(false);
    }

    return (
        <>
            <div>
                <VectorMap {...world} layerProps={layerProps}/>
                <p>Hovered: {hovered && <code>{hovered}</code>}</p>
                <p>Focused: {focused && <code>{focused}</code>}</p>
                <p>Clicked: {clicked && <code>{clicked}</code>}</p>            
            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>Here are the openings from the country you chose!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {openings}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
        

    )
}
export default Home