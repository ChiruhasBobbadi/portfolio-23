import {Grid, Link, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";
import data from "../data/data";
import FadeIn from "react-fade-in";


const Connect = () => {


    return <Grid.Container gap={2} justify="center">

        <Grid xs={1} md={3}>

        </Grid>
        <Grid xs={11} md={6}>

            <Text h1 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
                  weight="bold">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        'Let\'s Connect.',
                        2000,


                    ]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    // Repeat this Animation Sequence infinitely
                />
            </Text>
        </Grid>
        <Grid xs={0} md={3}>

        </Grid>


            {
                data.connect.map(element => {
                    let link = element.link;
                    let mailto=`mailto:`+link;


                    return <Grid.Container gap={1} justify="center">
                        <Grid md={3} xs={1}>

                        </Grid>
                        <Grid md={6} xs={10}>
                            {element.name === 'E-mail' ? <Link href={mailto} isExternal><Text h2>E-mail </Text></Link> :
                                <Link href={element.link} isExternal><Text h2>{element.name}</Text></Link>}
                        </Grid>
                        <Grid md={3} xs={1}>

                        </Grid>
                    </Grid.Container>


                })
            }




    </Grid.Container>


}

export default Connect;
