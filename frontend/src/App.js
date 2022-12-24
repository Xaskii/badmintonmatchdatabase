import React, { useState, useEffect } from 'react'
import {
  Center,
  Text,
  Box,
  Stack,
  Heading,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { FlagCanada } from './icons/FlagCanada'
import './App.css'

const initialMatches = [
  {
    players: {
      home: 'spring',
      away: 'autumn',
    },
    score: {
      home: 21,
      away: 10,
    },
    date: '2022-12-22T00:00:00.000Z',
    note: 'not so amazing',
    user: {
      username: 'spring',
      id: '639ce4b32b63a9eb715be7d2',
    },
    tags: [],
    id: '63a5fa5dbca30f76fd8d4f7d',
  },
  {
    players: {
      home: 'spring',
      away: 'autumn',
    },
    score: {
      home: 10,
      away: 21,
    },
    date: '2022-12-22T00:00:00.000Z',
    note: 'really amazing',
    user: {
      username: 'spring',
      id: '639ce4b32b63a9eb715be7d2',
    },
    tags: [],
    id: '63a5fa72bca30f76fd8d4f80',
  },
  {
    players: {
      home: 'spring',
      away: 'natalia',
    },
    score: {
      home: 21,
      away: 42,
    },
    date: '2022-12-23T00:00:00.000Z',
    note: 'long game',
    user: {
      username: 'spring',
      id: '639ce4b32b63a9eb715be7d2',
    },
    tags: [],
    id: '63a5fec3bca30f76fd8d4f8a',
  },
]

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

function App() {
  const [matches, setMatches] = useState(initialMatches)

  // useEffect(() => {
  //   // load initial matches
  // })

  return (
    <div className='App'>
      <Heading mx={2} my={1} textAlign={'center'}>
        Badminton Match Database
      </Heading>
      <Box display={'flex'} justifyContent={'center'}>
        <Stack spacing={8} maxWidth={'600px'} width={'600px'} mx={2}>
          {matches &&
            matches.map((m) => {
              const dateObject = new Date(m.date)
              console.log(dateObject)
              const date = dateObject.toLocaleDateString()
              return (
                <>
                  <Box key={m.id} px={5} py={3} shadow='base'>
                    <Center>
                      <Heading fontSize='l'>{date}</Heading>
                    </Center>

                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      shadow={'xs'}
                      my={3}
                      px={2}
                      py={1}
                    >
                      <Box display={'flex'} flexFlow={'column'}>
                        <Box display={'flex'} alignItems={'center'}>
                          {/* will implement flags and defautl flag in database schema */}
                          <FlagCanada mr={1} mt={0.5} />
                          <Text>{m.players.home}</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                          <FlagCanada mr={1} mt={0.5} />
                          <Text>{m.players.away}</Text>
                        </Box>
                      </Box>
                      <Box display={'flex'} flexFlow={'column'}>
                        <Text>{m.score?.home}</Text>
                        <Text>{m.score?.away}</Text>
                      </Box>
                    </Box>
                    <Accordion allowToggle>
                      <AccordionItem shadow={'xs'}>
                        <Heading as={'h2'}>
                          <AccordionButton px={2}>
                            <Box as='span' flex='1' textAlign={'left'}>
                              Notes
                            </Box>
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel>{text}</AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    {/* <Text>{text.slice(0, 200)}</Text> */}
                  </Box>
                  {/* <Divider /> */}
                </>
              )
            })}
        </Stack>
      </Box>
    </div>
  )
}

export default App
