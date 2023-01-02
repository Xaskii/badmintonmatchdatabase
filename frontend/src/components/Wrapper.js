import { Box } from '@chakra-ui/react'

const Wrapper = ({ children, variant }) => (
  <Box
    w={'100%'}
    mt={8}
    mx={'auto'}
    variant={variant === 'small' ? '400px' : '800px'}
  >
    {children}
  </Box>
)

export default Wrapper
