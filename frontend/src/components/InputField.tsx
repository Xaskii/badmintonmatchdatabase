import { useField } from 'formik'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react'
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<any> & {
  label: string
  name: string
  isTextarea?: boolean
}

// look later for when ben awad is creating this, why size and name are required
const InputField: React.FC<InputFieldProps> = ({
  label,
  isTextarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props)
  const Area = isTextarea ? Textarea : Input
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Area {...field} {...props} id={field.name} />
      {/* <Input {...field} {...props} id={field.name} /> */}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default InputField
