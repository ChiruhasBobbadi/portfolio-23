import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


import { FaTerminal } from 'react-icons/fa'


const Nav = ()=>{


         return (

            <Navbar isBordered variant="floating">
                <Navbar.Brand>


                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="/">About</Navbar.Link>
                    <Navbar.Link href="/projects">Projects</Navbar.Link>
                    <Navbar.Link href="/education">Education</Navbar.Link>
                    <Navbar.Link href="/tech">Tech</Navbar.Link>
                    <Navbar.Link href="/publications">Publications</Navbar.Link>
                    <Navbar.Link href="/connect">Connect</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="/shell" color='gradient'>
                            Enter Shell
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <FaTerminal/>



                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>

    )
}



export default Nav;
