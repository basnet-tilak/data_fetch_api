
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DataFetchApp from './DataFetchApp';
import PageNotFound from './pages/PageNotFound';

const App =()=>{
  return(
    <>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/species" element={<DataFetchApp/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App;
