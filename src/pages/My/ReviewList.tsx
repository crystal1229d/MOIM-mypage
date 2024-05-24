import { PARTIES } from '../../components/mock/data'
import Card from '../../components/my/Card'
import Button from '../../components/shared/Button'
import Flex from '../../components/shared/Flex'

function ReviewListPage() {
  return (
    <Flex as="main" dir="column">
      <ul>
        {PARTIES.map((party) => (
          <Card key={party.id} party={party} />
        ))}
      </ul>
      <Button label="더 보기" color="neutral" size="medium" withshadow />
    </Flex>
  )
}

export default ReviewListPage
