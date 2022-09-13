import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../components/forms/sign-in/SignIn';
import { SignUp } from '../components/forms/sing-up/SignUp';
import PetSidebar from '../components/PetSidebar/PetSidebar';
import { Header } from '../components/header/Header';

function App (): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PetSidebar />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
