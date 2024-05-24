import { useQuery, useMutation, useQueryClient } from 'react-query'

import { deleteReview, getReviews, writeReview } from '../remote/review'
import { Review } from '../models/review'

function useReview({ partyId }: { partyId: string }) {
  const client = useQueryClient()

  const { data, isLoading } = useQuery(['reviews', partyId], () =>
    getReviews({ partyId }),
  )

  const { mutateAsync: write } = useMutation(
    async (text: string) => {
      const newReview = {
        createdAt: new Date(),
        partyId,
        text,
      } as Review

      await writeReview(newReview)

      return true
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['reviews', partyId])
      },
    },
  )

  const { mutate: remove } = useMutation(
    ({ reviewId, partyId }: { reviewId: string; partyId: string }) => {
      return deleteReview({ reviewId, partyId })
    },
    {
      onSuccess: () => {
        client.invalidateQueries(['reviews', partyId])
      },
    },
  )

  return { data, isLoading, write, remove }
}

export default useReview
