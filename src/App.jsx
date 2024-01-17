import './App.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { darktheme, lighttheme } from './components/ModoTela';
import { GlobalStyle } from './components/globalStyle';
import { Container } from './components/style';


export default function App() {

  const [theme, setTheme] = useState("light")

  function MudarTema () {
    theme === 'light'? setTheme('dark') : setTheme('light')
  }

  return (
    <>   
      <ThemeProvider theme={theme === 'light' ? lighttheme : darktheme}>
        <GlobalStyle />
        <Container>
          <p>oi</p>
          <button onClick={MudarTema}>Mudar tema</button>
        </Container>
      </ThemeProvider>
    </>
  )

}