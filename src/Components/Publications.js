import {Grid, Link, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";

import data from '../data/data'
import FadeIn from "react-fade-in";

const Publications = () => {


    return <Grid.Container gap={2} justify="center">

        <Grid xs={1} md={3}>

        </Grid>
        <Grid xs={10} md={6}>

            <Text h1 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
                  weight="bold">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={['My Publications.',1000]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    // Repeat this Animation Sequence infinitely
                />
            </Text>
        </Grid>
        <Grid xs={1} md={3}></Grid>

        <FadeIn delay={3200} transitionDuration={1000}>
            {data.publications.map((el, index) => {
                return <Grid.Container gap={1} justify="center">
                    <Grid xs={1} md={3}>

                    </Grid>
                    <Grid xs={10} md={6}>
                        <Link href={el.link} weight='bold' isExternal target={"_blank"}> <Text h2>{index + 1}{". "}{el.title}</Text>
                        </Link>
                    </Grid>
                    <Grid xs={1} md={3}>

                    </Grid>

                    <Grid xs={1} md={3}>

                    </Grid>
                    <Grid xs={10} md={6}>
                        <Text>{el.description} </Text>
                    </Grid>
                    <Grid xs={1} md={3}>

                    </Grid>


                </Grid.Container>
            })}
        </FadeIn>


    </Grid.Container>

}


export default Publications;
