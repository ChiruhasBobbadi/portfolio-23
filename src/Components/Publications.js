import {Grid, Link, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";

import data from '../data/data'

const Publications = ()=>{


    return <Grid.Container gap={2} justify="center">

        <Grid xs={3}>

        </Grid>
        <Grid xs={6}>

            <Text h1 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
                  weight="bold">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        'My Publications.',
                        2000,
                        'My Published Literature.',
                        2000



                    ]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    // Repeat this Animation Sequence infinitely
                />
            </Text>
        </Grid>
        <Grid xs={3}>

        </Grid>


        {data.publications.map((el,index)=>{
            return <>
                <Grid xs={3}>

                </Grid>
                <Grid xs={6}>
                    <Link isExternal href={el.link} weight='bold'> <Text h2>{index+1}{". "}{el.title}</Text> </Link>
                </Grid>
                <Grid xs={3}>

                </Grid>

                <Grid xs={3}>

                </Grid>
                <Grid xs={6}>
                     <Text>{el.description} </Text>
                </Grid>
                <Grid xs={3}>

                </Grid>


            </>
        })}


    </Grid.Container>

}


export default Publications;
