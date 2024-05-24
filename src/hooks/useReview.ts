import { useState, useEffect } from 'react'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import {
  getReviews,
  writeReview,
  deleteReview,
  updateReview,
} from '../remote/review'
import { Review } from '../models/review'

// @TODO: 코드 정리 필요
function useReview({ partyId }: { partyId: string }) {
  const client = useQueryClient()
  const [comment, setComment] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [updatedReview, setUpdatedReview] = useState<Review | null>(null)

  const { data: reviews, isLoading } = useQuery(['review', partyId], () =>
    getReviews({ partyId }),
  )

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setComment(reviews[0].text)
      setImages(reviews[0].images || [])
      setUpdatedReview(reviews[0])
    }
  }, [reviews])

  const { mutateAsync: write } = useMutation(
    async (newReview: Omit<Review, 'id'>) => {
      await writeReview(newReview)
      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['review', partyId])
      },
    },
  )

  const { mutateAsync: update } = useMutation(
    async (updatedReview: Review) => {
      await updateReview(updatedReview)
      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['review', partyId])
      },
    },
  )

  const { mutate: remove } = useMutation(
    ({ reviewId, partyId }: { reviewId: string; partyId: string }) => {
      return deleteReview({ reviewId, partyId })
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['review', partyId])
      },
    },
  )

  const handleUpdateReview = async () => {
    if (comment.length < 30) {
      alert('30자 이상 입력해주세요')
      return
    }

    if (comment.length > 500) {
      alert('500자 이하로 입력해주세요')
      return
    }

    const updatedReviewData = {
      ...updatedReview,
      text: comment,
      images,
      createdAt: new Date().toISOString(),
    } as Review

    const success = await update(updatedReviewData)

    if (success) {
      setComment('')
      setImages([])
    }
  }

  const handleCreateReview = async () => {
    if (comment.length < 30) {
      alert('30자 이상 입력해주세요')
      return
    }

    if (comment.length > 500) {
      alert('500자 이하로 입력해주세요')
      return
    }

    const success = await write({
      createdAt: new Date().toISOString(),
      partyId,
      text: comment,
      images,
    })

    if (success) {
      setComment('')
      setImages([])
    }
  }

  return {
    reviews,
    isLoading,
    comment,
    setComment,
    images,
    setImages,
    updatedReview,
    handleCreateReview,
    handleUpdateReview,
    update,
    remove,
  }
}

export default useReview
