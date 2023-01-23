import { Box } from '@chakra-ui/react'
import React from 'react'

interface WrapperProps {
  children: JSX.Element
  variant?: 'small' | 'regular'
}

const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => (
  <Box
    w={'100%'}
    mt={8}
    mx={'auto'}
    width={variant === 'small' ? '400px' : '800px'}
  >
    {children}
  </Box>
)

export default Wrapper
