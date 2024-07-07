import { Container } from "react-bootstrap";
import { useContext } from "react";
import CommonContext from "../context/CommonContext";
import React from 'react'


function Home() {
  const {theme} = useContext(CommonContext)
  const {value} = useContext(CommonContext)
  return (
    <Container className= {`bg-${theme} text-${theme==='light'?'dark':'light'}` }>

        <h1>Welcome to React Tutorial</h1>
        <p>The Shared value is {value}</p>

        
    </Container>
  )
}

export default Home