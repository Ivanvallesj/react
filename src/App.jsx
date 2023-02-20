import { useState, useEffect} from 'react'
import {LaunchItem} from './components/LaunchItem'

import * as API from "./services/launches"
import logo from './assets/SpaceX_logo.png'
import { Heading, Image } from '@chakra-ui/react'


export function App() {
  const [launches, setLaunches] = useState([]);


  useEffect(() =>{
    API.getAllLaunches()
      .then(data =>setLaunches(data))
  }, [])/* aca vuelve llamar a la funcion cada vez que finaliza*/;

  return (
    <>
      <Image m={4} src={logo} width={300}/>
      <Heading m={4} as="h1" size="lg">
        SpaceX Misions
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  )
}
