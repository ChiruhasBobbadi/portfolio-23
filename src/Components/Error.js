import {Grid, Text} from "@nextui-org/react";

const Error =()=>{

    return (
        <Grid.Container gap={2} justify='center'>
            <Grid xs={1} md={4}>

            </Grid>
            <Grid xs={10} md={4}>
                    <Text h1>Hmm, looks like a 404!.</Text>
            </Grid>
            <Grid xs={1} md={4}>

            </Grid>
        </Grid.Container>
    )

}

export default Error;
