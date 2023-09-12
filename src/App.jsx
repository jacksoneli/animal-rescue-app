import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail';
import Nav from './components/Nav';
import MatchAllRoute from './pages/MatchAllRoute';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json`;
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json);
      })
  }, [])
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* {}객체에 값이 있으면 랜더링 */}
        { Object.keys(data).length > 0 &&
          <Route path='/' element={<Home data={data} />} />
        }
        <Route path='/about' element={<About />} />
        { Object.keys(data).length > 0 &&
          <Route path='/detail/:id' element={<Detail data={data} />} />
        }
        <Route path="*" element={<MatchAllRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
