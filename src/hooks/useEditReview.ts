import { useState, useEffect } from 'react'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { getReviews, writeReview } from '../remote/review'
import { Review } from '../models/review'

function useEditReview({ partyId }: { partyId: string }) {
  const client = useQueryClient()

  const { data: reviews, isLoading } = useQuery(['review', partyId], () =>
    getReviews({ partyId }),
  )

  const [comment, setComment] = useState('')

  useEffect(() => {
    if (reviews && reviews?.length > 0) {
      setComment(reviews[0].text)
    }
  }, [reviews])

  const { mutateAsync: write } = useMutation(
    async (text: string) => {
      const newReview = {
        createdAt: new Date().toISOString(),
        partyId,
        text,
        images: [],
      } as Omit<Review, 'id'>

      await writeReview(newReview)

      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['review', partyId])
      },
    },
  )

  const handleCreateReview = async () => {
    if (comment.length < 30) {
      alert('30자 이상 입력해주세요')
      return
    }

    if (comment.length > 500) {
      alert('500자 이상 입력해주세요')
      return
    }

    const success = await write(comment)

    if (success) {
      setComment('')
    }
  }

  return {
    reviews,
    isLoading,
    comment,
    setComment,
    handleCreateReview,
  }
}

export default useEditReview
