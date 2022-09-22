import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../components/forms/sign-in/SignIn';
import { SignUp } from '../components/forms/sing-up/SignUp';
import { Header } from '../components/header/Header';
import AdminPage from '../pages/admin-page';
import ClientPage from '../pages/client-page';
import DoctorPage from '../pages/doctor-page';
import ManagerPage from '../pages/manager-page';
import MainPage from '../pages/main-page';
import ForumPage from '../pages/forum-page';

function App (): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/clientPage" element={<ClientPage />} />
        <Route path="/managerPage" element={<ManagerPage />} />
        <Route path="/doctorPage" element={<DoctorPage />} />
        <Route path="/forumPage" element={<ForumPage />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
