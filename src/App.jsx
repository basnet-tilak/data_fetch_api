
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DataFetchApp from './DataFetchApp';
import PageNotFound from './pages/PageNotFound';
import NavBar from './NavBar';

const App =()=>{
  return(
    <>
      <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/species" element={<DataFetchApp/>} />
          <Route path="/species/continent" element={<DataFetchApp/>}/>
          <Route path="/species/asia" element={<DataFetchApp/>}/>
          <Route path="/species/europe" element={<DataFetchApp/>}/>
          <Route path="/species/africa" element={<DataFetchApp/>}/>
          <Route path="/species/north-american" element={<DataFetchApp/>}/>
          <Route path="/species/south-american" element={<DataFetchApp/>}/>
          <Route path="/species/austrlia" element={<DataFetchApp/>}/>
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App;
