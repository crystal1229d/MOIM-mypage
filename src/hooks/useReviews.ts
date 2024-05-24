import { useQuery, useMutation, useQueryClient } from 'react-query'
import { deleteReview, getReviews, writeReview } from '../remote/review'
import { Review } from '../models/review'

function useReview({ partyId }: { partyId: string }) {
  const client = useQueryClient()

  const { data, isLoading } = useQuery(['review', partyId], () =>
    getReviews({ partyId }),
  )

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

  return { data, isLoading, write, remove }
}

export default useReview
