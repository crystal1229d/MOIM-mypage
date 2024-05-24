import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyPage from '../pages/My'
import ApplyListPage from '../pages/My/ApplyList'
import WishListPage from '../pages/My/WishList'
import PointPage from '../pages/My/Point'
import InfoPage from '../pages/My/Info'
import ReviewListPage from '../pages/My/ReviewList'
import QnaListPage from '../pages/My/Qna'
import MainPage from '../pages/Main'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />}>
          <Route index element={<ReviewListPage />} />
          <Route path="applyList" element={<ApplyListPage />} />
          <Route path="wishList" element={<WishListPage />} />
          <Route path="point" element={<PointPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="reviewList" element={<ReviewListPage />} />
          <Route path="qnaList" element={<QnaListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
