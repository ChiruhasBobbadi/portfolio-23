import {Grid, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";

//
// import reactjs from '../icons/reactjs.svg'
// import nodejs from '../icons/nodejs.svg'
// import mongodb from '../icons/mongodb.svg'
// import sqlite from '../icons/sqlite.svg'
// import android from '../icons/android.svg'
// import javascript from '../icons/javascript.svg'


import data from '../data/data';

import { Link } from "@nextui-org/react";
const Projects = ()=>{





    return <Grid.Container gap={2} justify="center">
        <Grid xs={3}>

        </Grid>

        <Grid xs={9}>
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


        {data.projects.map((el,index)=>
             <Grid.Container gap={1} justify="center">
                <Grid xs={3}>

                </Grid>
                <Grid xs={6}>

                    <Link href={el.link} isExternal>
                        <Text h2  weight="bold">
                            {index+1+".    "+el.title}
                        </Text>




                    </Link>

                    {/*todo*/}

                    {/*{el.techStack.map(t => {*/}
                    {/*    const images = require.context('../icons', true);*/}

                    {/*    let imgsrc = images(`../icons/${t}.svg`);*/}
                    {/*    console.log(imgsrc);*/}
                    {/*    return <img src={imgsrc} style={{width:'30px',height:'30px'}}/>*/}
                    {/*})}*/}






                </Grid>
                <Grid xs={3}>

                </Grid>
                 <Grid xs={3}>

                 </Grid>
                 <Grid xs={6}>
                     {el.description}
                 </Grid>
                 <Grid xs={3}>

                 </Grid>




            </Grid.Container>
        )}













    </Grid.Container>;


}

export default Projects
