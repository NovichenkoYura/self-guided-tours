import { useState } from 'react';
import { ReactComponent as FilterArrow } from '../img/arrow-down-sort.svg';

export const FilterDropDownModuleInTours = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__startWindow">
        <p className="dropdown__text">Sort by:</p>
        <FilterArrow className="dropdown__startWindow__svg" width="20" height="20" />
      </div>
      {showDropdown && (
        <ul className="dropdown__window">
          <li>Cost: Low to High</li>
          <li>Cost: High to Low</li>
          <li>Budget: Low to High</li>
          <li>Budget: High to Low</li>
        </ul>
      )}
    </>
  );
};

// {
//   !isAuth && showDropdown && (
//     <div className="dropdown__window">
//       <NavLink to={locations.login.path} className="dropdown__item">
//         Log in
//       </NavLink>
//       <NavLink to={locations.registration.path} className="dropdown__item">
//         Sign up
//       </NavLink>
//     </div>
//   );
// }
