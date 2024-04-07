
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DataFetchApp from './DataFetchApp';

const App =()=>{
  return(
    <>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<DataFetchApp/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App;
