import {Grid, Link, Text} from "@nextui-org/react";
import './Terminal.css'


const formSubmit = (event)=>{


    event.preventDefault();

    console.log("hello");

    console.log(event.target);
}


const Terminal = ()=>{


    let initialText = 'Welcome to chiruhas\'s portfolio, type help'

    let user='chiruhas@visitor~'

    return <Grid.Container gap={5} justify='center' >

        <Grid xs={1} md={3}>

        </Grid>

        <Grid xs={10} md={6} style={{border:'medium dashed green'}}>

            <Text>{initialText}</Text>

        </Grid>

        <Grid xs={1} md={3}>

        </Grid>

        <Grid xs={1} md={3}>

        </Grid>

        <Grid xs={10} md={6} >

            <Text>{user}</Text>
            <form onSubmit={formSubmit}>
                <input  type='text' />
            </form>

        </Grid>

        <Grid xs={1} md={3}>

        </Grid>


    </Grid.Container>
}
export default Terminal;
