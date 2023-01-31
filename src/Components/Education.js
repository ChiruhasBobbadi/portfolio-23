import {Grid, Link, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";
import FadeIn from 'react-fade-in';

import data from '../data/data';

const Education = () => {

    const currently = data.education.filter(element => {

        if (element.currentlyPursuing)
            return element;
    });

    const notCurrently = data.education.filter(element => {

        if (!element.currentlyPursuing)
            return element;
    });


    return (
        <Grid.Container gap={2} justify="center">

            <Grid xs={1} md={3}>

            </Grid>
            <Grid xs={10} md={6}>

                <Text h1 css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                      weight="bold">
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'My Education.',
                            2000


                        ]}
                        speed={40} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        // Repeat this Animation Sequence infinitely
                    />
                </Text>
            </Grid>
            <Grid xs={1} md={3}>

            </Grid>



            <FadeIn delay={1500} transitionDuration={1000}>

                    {currently.map((element, index) => {


                        return <Grid.Container gap={1} justify="center">

                            {index === 0 ?
                                < >
                                    <Grid xs={1} md={3}>

                                    </Grid>

                                    <Grid xs={10} md={6}>
                                        <Text h2>Current</Text>

                                    </Grid>

                                    <Grid xs={1} md={3}>

                                    </Grid>


                                </> : ""

                            }

                            <Grid xs={1} md={3}>

                            </Grid>

                            <Grid xs={10} md={6}>
                                <Text h3 weight="bold">{element.degree} @ <Link href={element.collegeLink} isExternal>
                                    <Text h3 weight="bold" css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                    }}>
                                        {element.college}
                                    </Text>


                                </Link></Text>

                            </Grid>

                            <Grid xs={1} md={3}>

                            </Grid>
                            <Grid xs={1} md={3}>

                            </Grid>

                            <Grid xs={10} md={6}>
                                <Text>{element.description}</Text>

                            </Grid>

                            <Grid xs={1} md={3}>

                            </Grid>

                            <Grid xs={1} md={3}>

                            </Grid>

                            <Grid xs={10} md={6}>
                                <Text weight='bold'>Course Work: {element.coursework.map((course, index) => {
                                    if (index === element.coursework.length-1)
                                        return course;
                                    else
                                        return course + " | "
                                })}

                                </Text>


                            </Grid>

                            <Grid xs={1} md={3}>

                            </Grid>


                        </Grid.Container>


                    })


                    }

                {notCurrently.map((element, index) => {


                    return <Grid.Container gap={1} justify="center">

                        {index === 0 && currently.length > 0 ?
                            <>
                                <Grid xs={1} md={3}>

                                </Grid>

                                <Grid xs={10} md={6}>
                                    <Text h2>Past</Text>

                                </Grid>
                                <Grid xs={1} md={3}>

                                </Grid>
                            </> : ""

                        }

                        <Grid xs={1} md={3}>

                        </Grid>

                        <Grid xs={10} md={6}>
                            <Text h3 weight="bold">{element.degree} @ <Link href={element.collegeLink} isExternal>
                                <Text h3 weight="bold" css={{
                                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                }}>
                                    {element.college}
                                </Text>


                            </Link></Text>

                        </Grid>

                        <Grid xs={1} md={3}>

                        </Grid>

                        <Grid xs={1} md={3}>

                        </Grid>

                        <Grid xs={10} md={6}>
                            <Text>{element.description}</Text>

                        </Grid>

                        <Grid xs={1} md={3}>

                        </Grid>

                        <Grid xs={1} md={3}>

                        </Grid>

                        <Grid xs={10} md={6}>
                            <Text weight='bold'>Course Work: {element.coursework.map((course, index) => {
                                if (index === element.coursework.length-1)
                                    return course;
                                else
                                    return course + "  |  "
                            })}

                            </Text>


                        </Grid>

                        <Grid xs={1} md={3}>

                        </Grid>


                    </Grid.Container>


                })


                }




            </FadeIn>





        </Grid.Container>


    );


}


export default Education;
