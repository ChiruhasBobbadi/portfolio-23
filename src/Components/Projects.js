import {Grid, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";

//
import reactjs from '../icons/reactjs.svg'
import nodejs from '../icons/nodejs.svg'
import mongodb from '../icons/mongodb.svg'
import sqlite from '../icons/sqlite.svg'
import android from '../icons/android.svg'
import javascript from '../icons/javascript.svg'
import bootstrap from '../icons/bootstrap.svg'
import docker from '../icons/docker.svg'
import spring from '../icons/spring.svg'

import FadeIn from 'react-fade-in';

import data from '../data/data';

import { Link } from "@nextui-org/react";
const Projects = ()=>{

    const isTouchScreenDevice = () => {
        try{
            document.createEvent('TouchEvent');
            return true;
        }catch(e){
            return false;
        }
    }



    return <Grid.Container gap={2} justify="center">
        <Grid xs={1} md={3}>

        </Grid>

        <Grid xs={10} md={6}>
            <Text h1 css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }} weight="bold">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        'My Projects.',
                        2000,

                    ]}
                    speed={30} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    // Repeat this Animation Sequence infinitely
                />
            </Text>
        </Grid>

        <Grid xs={1} md={3}>

        </Grid>

        <FadeIn delay={1500} transitionDuration={1000}>
            {data.projects.map((el,index)=>
                <Grid.Container gap={1} justify="center">
                    <Grid xs={1} md={3}>

                    </Grid>
                    <Grid xs={10} md={6}>

                        <Link href={el.link} isExternal>
                            <Text h2  weight="bold">
                                {index+1+".    "+el.title}
                            </Text>




                        </Link>


                       {/* {isTouchScreenDevice()? el.techStack.map(t => {

                            let imageUrl='';

                            switch(t){
                                case 'reactjs':
                                    imageUrl = <img src={reactjs} style={{width:'30px',height:'30px',margin:'1%'}} title={'react.js'}/>
                                    break;
                                case 'nodejs':
                                    imageUrl = <img src={nodejs} style={{width:'30px',height:'30px',margin:'1%'}} title={'node.js'}/>
                                    break;
                                case 'android':
                                    imageUrl = <img src={android} style={{width:'30px',height:'30px',margin:'1%'}} title={'Android'}/>
                                    break;
                                case 'sqlite':
                                    imageUrl = <img src={sqlite} style={{width:'50px',height:'30px',margin:'1%'}} title={'SQLite'}/>
                                    break;
                                case 'mongodb':
                                    imageUrl = <img src={mongodb} style={{width:'50px',height:'30px',margin:'0.5%'}} title={'MongoDB'}/>
                                    break;
                                case 'bootstrap':
                                    imageUrl = <img src={bootstrap} style={{width:'30px',height:'30px',margin:'1%'}} title={'Bootstrap'}/>
                                    break;
                                case 'javascript':
                                    imageUrl = <img src={javascript} style={{width:'30px',height:'30px',margin:'1%'}} title={'Javascript'}/>
                                    break;
                                case 'docker':
                                    imageUrl = <img src={docker} style={{width:'30px',height:'30px',margin:'1%'}} title={'Docker'}/>
                                    break;
                                case 'spring':
                                    imageUrl = <img src={spring} style={{width:'30px',height:'30px',margin:'1%'}} title={'Spring'}/>
                                    break;



                            }


                            return imageUrl;
                        }):""}
*/}





                    </Grid>
                    <Grid xs={1} md={3}>

                    </Grid>




                    {el.description.map(el=> {


                        return <>
                            <Grid xs={1} md={3}>

                            </Grid>
                            <Grid xs={10} md={6}>
                                <Text>{el}{"\n"}</Text>
                            </Grid>
                            <Grid xs={1} md={3}>

                            </Grid>
                        </>


                    })}


                </Grid.Container>
            )}

        </FadeIn>














    </Grid.Container>;


}

export default Projects
