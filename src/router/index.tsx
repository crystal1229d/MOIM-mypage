import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyPage from '../pages/My'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
