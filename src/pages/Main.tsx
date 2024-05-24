import { Link } from 'react-router-dom'
import Header from '../components/shared/Header'
import Layout from '../components/shared/Layout'
import Spacing from '../components/shared/Spacing'
import Text from '../components/shared/Text'

function MainPage() {
  return (
    <Layout>
      <Header title="메인페이지" />
      <Link to="/my">
        <Text typography="t1" color="blue" bold>
          👉🏻 마이페이지로 이동
        </Text>
      </Link>
      <Spacing size={100} />
      <main>
        <Text>
          이 페이지는 구현 과제에 포함되어 있지 않지만 <br />
          <u>라우터의 정상적인 동작</u>을 위해 구현되었습니다.
        </Text>
      </main>
    </Layout>
  )
}

export default MainPage
