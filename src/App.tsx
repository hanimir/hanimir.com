import { Route, Routes } from 'react-router-dom'
import { ResumePage } from './pages/ResumePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResumePage />} />
    </Routes>
  )
}
