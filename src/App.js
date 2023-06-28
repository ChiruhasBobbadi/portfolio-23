import logo from './logo.svg';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import {createTheme} from '@nextui-org/react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Nav from './Components/Nav'
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Tech from "./Components/Tech";
import Publications from "./Components/Publications";
import Connect from "./Components/Connect";
import Resume from "./Components/Resume/Resume";
import Terminal from "./Components/Terminal/Terminal"
import Error from "./Components/Error";


const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#0072F5',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})




function App() {
  return (

      <NextUIProvider theme={theme}>



        <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path ='/' element={<About/>} />
            <Route path ='/projects' element={<Projects/>} />
            <Route path ='/education' element={<Education/>} />
            <Route path ='/tech' element={<Tech/>} />
            <Route path ='/publications' element={<Publications/>} />
            <Route path ='/connect' element={<Connect/>} />
            <Route path ='/shell' element={<Terminal/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path="*" element={<Error/>} />



          </Routes>
        </BrowserRouter>



      </NextUIProvider>



  );
}

export default App;
