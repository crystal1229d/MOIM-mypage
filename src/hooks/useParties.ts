import { useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'

import { getParties } from '../remote/party'

function useParties() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(['parties'], ({ pageParam }) => getParties(pageParam), {
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible
    },
  })

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  const parties = data?.pages.map(({ items }) => items).flat()

  return { data: parties, loadMore, isFetching, hasNextPage }
}

export default useParties
