import { Grid } from '@nextui-org/react';

import { Text } from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";


const About = () => {


    return (
        <Grid.Container gap={2} justify="center">

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
                            'Hey there, I\'m Chiruhas.',
                            1000,
                            'Hey there, I\'m a Full Stack Developer',
                            1000,
                            'Hey there, I\'m an Android Developer',
                            1000,
                            'Hey there, I\'m Chiruhas.',
                            1000,


                        ]}
                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                         // Repeat this Animation Sequence infinitely
                    />
                </Text>
            </Grid>
            <Grid xs={3}>

            </Grid>






            <Grid xs={3}>

            </Grid>
            <Grid xs={6}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, obcaecati, vitae. Ab alias, aliquid asperiores dolore doloremque doloribus, error eveniet facere illum itaque laboriosam libero officia quasi repudiandae saepe sequi tempora tenetur voluptas. Assumenda dicta, fugiat ipsum nobis quia quo unde. Aliquam asperiores, consectetur enim esse molestiae tempora temporibus veniam.
            </Grid>
            <Grid xs={3}>

            </Grid>


            <Grid xs={3}>

            </Grid>
            <Grid xs={6}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, obcaecati, vitae. Ab alias, aliquid asperiores dolore doloremque doloribus, error eveniet facere illum itaque laboriosam libero officia quasi repudiandae saepe sequi tempora tenetur voluptas. Assumenda dicta, fugiat ipsum nobis quia quo unde. Aliquam asperiores, consectetur enim esse molestiae tempora temporibus veniam.
            </Grid>
            <Grid xs={3}>

            </Grid>









        </Grid.Container>


    );


};


export default About;
