import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../components/forms/sign-in/SignIn';
import { SignUp } from '../components/forms/sing-up/SignUp';

function App (): JSX.Element {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<h2>Main</h2>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
