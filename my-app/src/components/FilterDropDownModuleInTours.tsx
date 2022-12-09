// @ts-nocheck
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ReactComponent as FilterArrow } from '../img/arrow-down-sort.svg';
import {
  sortBudgetLowToHigh,
  sortBudgetHighToLow,
  sortDurationLowToHigh,
  sortDurationHighToLow
} from '../store/toursSlice';

import { FiterItem } from '../components/common/FilterItem';
interface FilterItemProps {
  title: string;
}

export const FilterDropDownModuleInTours: React.FC<FilterItemProps> = ({ title }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { tours } = useAppSelector((state) => state.tours);
  console.log(tours);

  const dispatch = useAppDispatch();
  const onFilterBudgetLowToHigh = () => dispatch(sortBudgetLowToHigh());
  const onFilterBudgetHighToLow = () => dispatch(sortBudgetHighToLow());
  const onFilterDurationLowToHigh = () => dispatch(sortDurationLowToHigh());
  const onFilterDurationHighToLow = () => dispatch(sortDurationHighToLow());

  return (
    <>
      <div className="dropdown__startWindow__container">
        <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown__startWindow">
          <p className="dropdown__text">Sort by:{title}</p>
          <FilterArrow className="dropdown__startWindow__svg" width="20" height="20" />
        </div>
        {showDropdown && (
          <ul className="dropdownWindowSort__list ">
            <FiterItem title="Budget: Low to High" callback={() => onFilterBudgetLowToHigh()} />
            <FiterItem title="Budget: High to Low" callback={() => onFilterBudgetHighToLow()} />
            <FiterItem title="Duration: Low to High" callback={() => onFilterDurationLowToHigh()} />
            <FiterItem title="Duration: High to Low" callback={() => onFilterDurationHighToLow()} />
          </ul>
        )}
      </div>
    </>
  );
};
