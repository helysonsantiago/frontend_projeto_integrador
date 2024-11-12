
import './App.css';
import GlobalStyles from '../GlobalStyles';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

const App = () => {
  return (
    <div id={'id'}>
    <GlobalStyles />
    <Routes/>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  
  )
}

export default App
