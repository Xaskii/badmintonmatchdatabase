import {
  Stack,
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeMatches } from '../reducers/matchReducer'
import { FlagCanada } from '../icons/FlagCanada'

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

const MatchStack = () => {
  const matches = useSelector((state) => state.matches)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeMatches())
  }, [dispatch])

  return (
    <Flex width={'100%'} justifyContent={'center'}>
      <Stack spacing={8} maxWidth={'600px'} width={'600px'} mx={2}>
        {matches &&
          matches.map((m) => {
            const dateObject = new Date(m.date)
            console.log(dateObject)
            const date = dateObject.toLocaleDateString()
            return (
              <Box key={m.id}>
                <Box px={5} py={3} my={2} shadow='xs' rounded={'md'}>
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
                  <Accordion allowToggle colorScheme={'teal'}>
                    <AccordionItem>
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
              </Box>
            )
          })}
      </Stack>
    </Flex>
  )
}

export default MatchStack
