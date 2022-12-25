import React, { useEffect } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import './App.css'
import MatchStack from './components/MatchStack'

function App() {
  useEffect(() => {})

  return (
    <div className='App'>
      <Heading mx={2} my={1} textAlign={'center'}>
        Badminton Match Database
      </Heading>
      <Box display={'flex'} justifyContent={'center'}>
        <MatchStack />
      </Box>
    </div>
  )
}

export default App
