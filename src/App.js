import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import Goals from './pages/Goals';
import WorkoutTracker from './pages/WorkoutTraker';
import WorkoutSchedule from './pages/WorkoutSchedule';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="mx-auto max-w-[385px] min-h-screen border-blue-600 border rounded-sm">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/workout-tracker" element={<WorkoutTracker />} />
          <Route path="/workout-schedule" element={<WorkoutSchedule />} />
          <Route path="*" element={<Layout />}>
            {/* Nested routes */}
            {/* <Route path="/workout-tracker" element={<WorkoutTracker />} />
            <Route path="/workout-schedule" element={<WorkoutSchedule />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
