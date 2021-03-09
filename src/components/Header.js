import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'black' : 'green'}
          onClick={onAdd}
        />
      )}
    </div>
  );
};

export default Header;
