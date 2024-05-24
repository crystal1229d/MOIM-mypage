import InfiniteScroll from 'react-infinite-scroll-component'

import Card from '../../components/my/reviewList/Card'
import Button from '../../components/shared/Button'
import Flex from '../../components/shared/Flex'
import useParties from '../../hooks/useParties'

function ReviewListPage() {
  const { data: parties, hasNextPage, loadMore } = useParties()

  return (
    <Flex as="main" dir="column">
      <InfiniteScroll
        dataLength={parties?.length ?? 0}
        next={loadMore}
        hasMore={hasNextPage}
        loader={<></>}
      >
        <ul>
          {parties?.map((party) => <Card key={party.id} party={party} />)}
        </ul>
      </InfiniteScroll>
      <Button label="더 보기" color="neutral" size="medium" withshadow />
    </Flex>
  )
}

export default ReviewListPage
