import { ChangeEvent } from 'react'
import { Review } from '../../../models/review'
import Flex from '../../shared/Flex'
import InputFile from '../../shared/InputFile'
import Spacing from '../../shared/Spacing'
import TextField from '../../shared/TextField'

interface ReviewFormProps {
  review: Review | undefined
  comment: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
function ReviewForm({ review, comment, onChange }: ReviewFormProps) {
  const handleFileChange = () => {}

  return (
    <Flex dir="column" align="flex-start">
      <Spacing size={36} />

      <TextField text={review?.text || comment} onChange={onChange} />

      <Spacing size={20} />

      <Flex justify="flex-start" gap="20px">
        <InputFile onChange={handleFileChange} />
        <InputFile onChange={handleFileChange} />
        <InputFile onChange={handleFileChange} />
      </Flex>
    </Flex>
  )
}

export default ReviewForm
