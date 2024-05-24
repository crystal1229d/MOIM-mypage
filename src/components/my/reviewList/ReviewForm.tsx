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
  filePreviews: string[]
  handleFileChange: (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void
}

function ReviewForm({
  review,
  comment,
  onChange,
  filePreviews,
  handleFileChange,
}: ReviewFormProps) {
  return (
    <Flex dir="column" align="flex-start">
      <Spacing size={36} />

      <TextField text={review?.text || comment} onChange={onChange} />

      <Spacing size={20} />

      <Flex justify="flex-start" gap="20px">
        {filePreviews.map((previewUrl, index) => (
          <InputFile
            key={index}
            onChange={handleFileChange}
            previewUrl={previewUrl}
            index={index}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default ReviewForm
