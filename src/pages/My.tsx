import { PARTIES } from '../components/mock/data'
import Card from '../components/my/Card'
import Button from '../components/shared/Button'
import Header from '../components/shared/Header'
import Layout from '../components/shared/Layout'
import Navbar from '../components/shared/Navbar'

function MyPage() {
  return (
    <Layout>
      <Header title="마이페이지" />
      <Navbar />
      <main>
        <ul>
          {PARTIES.map((party) => (
            <Card key={party.id} party={party} />
          ))}
        </ul>
        <Button label="더 보기" color="neutral" size="medium" withShadow />
      </main>
    </Layout>
  )
}

export default MyPage
