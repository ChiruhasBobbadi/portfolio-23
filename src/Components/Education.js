import {Grid, Text} from "@nextui-org/react";
import {TypeAnimation} from "react-type-animation";


const Education=()=>{



    return (
        <Grid.Container gap={2} justify="center">

            <Grid xs={3}>

            </Grid>
            <Grid xs={6}>

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


}



export default Education;
