import {Grid, Text} from '@nextui-org/react';
import {TypeAnimation} from "react-type-animation";

import FadeIn from 'react-fade-in';

const About = () => {


    return (
        <Grid.Container gap={2} justify='center'>

            <Grid md={3} xs={1}>

            </Grid>
            <Grid md={6} xs={10}>

                <Text h1 css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                      weight="bold">
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'Hey there, I\'m Chiruhas.',
                            2000,


                        ]}
                        speed={40} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        // Repeat this Animation Sequence infinitely
                    />
                </Text>
            </Grid>
            <Grid md={3} xs={1}>


            </Grid>


            <Grid xs={1} md={3}>

            </Grid>
            <Grid xs={10} md={6}>

                <FadeIn delay={1800} transitionDuration={1000}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem corporis culpa,
                        dignissimos distinctio earum est excepturi id illo incidunt ipsa maxime nesciunt nobis obcaecati
                        optio, perspiciatis possimus quibusdam quisquam reprehenderit similique ut veniam voluptate.
                    </Text>
                </FadeIn>

            </Grid>
            <Grid xs={1} md={3}> </Grid>


        </Grid.Container>


    );


};


export default About;
