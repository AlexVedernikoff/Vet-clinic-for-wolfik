import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import PetSidebar from './PetSidebar/PetSidebar';
import {
  AdminPage,
  ClientPage,
  DoctorPage,
  ManagerPage,
  MainPage,
  ForumPage,
  SignInPage,
  SignUpPage,
} from '../view/index';

function App(): JSX.Element {
  return (
    <div className="layout">
      <Header />
      <div className="layout_page">
        <PetSidebar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/manager" element={<ManagerPage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/forum" element={<ForumPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
