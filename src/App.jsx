import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import UserList from './components/UserList/UserList';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='registration' element={<Registration />} />
        <Route path='/' element={<Registration />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/loginpage' element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
