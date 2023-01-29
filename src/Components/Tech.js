import {Container, Grid, Link, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";
import data from "../data/data";
import reactjs from "../icons/reactjs.svg";
import nodejs from "../icons/nodejs.svg";
import android from "../icons/android.svg";
import sqlite from "../icons/sqlite.svg";
import mongodb from "../icons/mongodb.svg";


const Tech = () => {


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
                        'Technologies I use.',
                        2000,

                    ]}
                    speed={30} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    // Repeat this Animation Sequence infinitely
                />
            </Text>
        </Grid>


        {data.skills.map(el => {

            return <>

                <Grid xs={3}>

                </Grid>
                <Grid xs={6}>
                    <Text h2> {el.name}</Text>

                </Grid>
                <Grid xs={3}>

                </Grid>


                <Grid xs={3}>

                </Grid>
                <Grid xs={6}>
                    <Text h4 eight='bold'>

                            {el.skills.map((skill,i)=>{
                                if(i===el.skills.length-1)
                                    return skill;
                                return skill+" | "
                            })}

                    </Text>

                </Grid>
                <Grid xs={3}>

                </Grid>

            </>
        })}




    </Grid.Container>;


}


export default Tech;
