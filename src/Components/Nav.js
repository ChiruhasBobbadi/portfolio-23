import React, {useState} from "react";
import {Link, Navbar, Text} from "@nextui-org/react";
// import {Link} from "react-router-dom";


// import { useHistory } from "react-router-dom";
import {Navigate, useNavigate} from 'react-router-dom';
const Nav = () => {

    // const [data,setData] = useState('/about')
    //
    // const history = useHistory();

    const navigate = useNavigate();

    const collapseItems = [
        {name: "About", link: '/'},
        {name: "Projects", link: '/projects'},
        {name: "Education", link: '/education'},
        {name: "Tech", link: '/tech'},
        {name: "Publications", link: '/publications'},
        {name: "Résumé", link: '/resume'},
        {name: "Connect", link: '/connect'},
    ];

    function onLinkClick(e) {
        e.preventDefault();
        // further processing happens here

        console.log("helloe");
        //history.push('/about')



        switch(e.target.innerHTML){
            case 'About':
                navigate('/')
                break;
            case 'Projects':
                navigate('/projects')
                break;
            case 'Education':
                navigate('/education')
                break;
            case  'Tech':
                navigate('/tech')
                break;
            case "Publications":
                navigate('/publications')
                break;
            case "Résumé":
                navigate('/resume')
                break;
            case "Connect":
                navigate('/connect')
                break;

        }

    }



    return (


<Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs"/>
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Text b color="inherit">
                    Chiruhas Bobbadi
                </Text>
            </Navbar.Brand>

            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >


                <Navbar.Link href="/" onClick={onLinkClick}>About</Navbar.Link>
                <Navbar.Link href="/projects" onClick={onLinkClick}>Projects</Navbar.Link>
                <Navbar.Link href="/education" onClick={onLinkClick}>Education</Navbar.Link>
                <Navbar.Link href="/tech" onClick={onLinkClick}>Tech</Navbar.Link>
                <Navbar.Link href="publications" onClick={onLinkClick}>Publications</Navbar.Link>
                <Navbar.Link href="/resume" onClick={onLinkClick}>Résumé</Navbar.Link>
                <Navbar.Link href="/connect" onClick={onLinkClick}>Connect</Navbar.Link>
            </Navbar.Content>

            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item.name}
                        activeColor="secondary"

                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.link}



                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>


    );
}


export default Nav;
