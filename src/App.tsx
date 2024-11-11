
import './App.css';
import GlobalStyles from '../GlobalStyles';
import Auth from './pages/auth/Auth';
import SidebarComponent from './components/sidebar/SidebarComponent';

const App = () => {
  return (
    <div id={'id'}>
  <GlobalStyles />
  {/* <Auth/> */}
  <SidebarComponent/>
    </div>
  )
}

export default App
