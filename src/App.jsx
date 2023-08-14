import { Route, Routes} from 'react-router-dom';
import ImageSearchBar from './pages/ImageSearchBar';
import Home from './Home';
import LogPage from './LogPage';
 


const App = () => {
  return (
      <div>
      <Routes>
        <Route path='/' element={<LogPage/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/ImageSearchBar' element={<ImageSearchBar/>}/>
      </Routes>
      </div>
  );
};

export default App;
