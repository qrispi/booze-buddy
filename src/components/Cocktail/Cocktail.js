import './Cocktail.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Cocktail() {
  return (
    <div>
        <NavLink to="/">
            <p>LOGO - HOME</p>
        </NavLink>
        <h2>Im a cocktail</h2>
        <button>Spin Again</button>
    </div>
  );
}

export default Cocktail;