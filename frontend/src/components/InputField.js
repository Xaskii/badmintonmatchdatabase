import { useField } from 'formik'
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react'

const InputField = ({ label, textarea, size, ...props }) => {
  const [field, { error }] = useField()
  const Area = textarea ? Textarea : Input
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Area {...field} {...props} id={field.name}></Area>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default InputField
