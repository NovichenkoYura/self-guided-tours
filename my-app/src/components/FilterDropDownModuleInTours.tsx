// @ts-nocheck
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ReactComponent as FilterArrow } from '../img/arrow-down-sort.svg';
import { sortBudgetLowToHigh } from '../store/toursSlice';

export const FilterDropDownModuleInTours = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { tours } = useAppSelector((state) => state.tours);
  console.log(tours);

  const dispatch = useAppDispatch();
  const onFilterBudgetLowToHigh = () => dispatch(sortBudgetLowToHigh());

  return (
    <>
      <div className="dropdown__startWindow__container">
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__startWindow">
          <p className="dropdown__text">Sort by:</p>
          <FilterArrow className="dropdown__startWindow__svg" width="20" height="20" />
        </div>
        {showDropdown && (
          <ul className="dropdownWindowSort__list ">
            <li className="dropdownWindowSort__Item" onClick={() => onFilterBudgetLowToHigh()}>
              Budget: Low to High
            </li>
            <li className="dropdownWindowSort__Item">Budget: High to Low</li>
            <li className="dropdownWindowSort__Item">Duration</li>
          </ul>
        )}
      </div>
    </>
  );
};
