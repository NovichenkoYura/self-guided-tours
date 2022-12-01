import { useState } from 'react';

export const FilterDropDownModuleInTours = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    showDropdown && (
      <>
        <p>Sort by:</p>
        <ul className="dropdown__window">
          <li>Cost: Low to High</li>
          <li>Cost: High to Low</li>
          <li>Budget: Low to High</li>
          <li>Budget: High to Low</li>
        </ul>
      </>
    )
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
