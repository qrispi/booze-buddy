import './Quiz.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Quiz() {
  return (
    <div>
        <NavLink to="/">
            <p>LOGO - HOME</p>
        </NavLink>
        <h1>Im a Quiz</h1>
    </div>
  );
}

export default Quiz;