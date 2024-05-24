import { Outlet } from 'react-router'

import Header from '../../components/shared/Header'
import Layout from '../../components/shared/Layout'
import Navbar from '../../components/shared/Navbar'

function MyPage() {
  return (
    <Layout>
      <Header title="마이페이지" link="/my/reviewList" />
      <Navbar />
      <Outlet />
    </Layout>
  )
}

export default MyPage
