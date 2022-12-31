import { useState, useEffect } from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import { initialMatches } from './helper'
import matchService from './services/matches'
import MatchStack from './components/MatchStack'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Heading mx={2} my={1} textAlign={'center'}>
        Badminton Match Database
      </Heading>
      <Center>
        <MatchStack />
      </Center>
    </div>
  )
}

export default App
