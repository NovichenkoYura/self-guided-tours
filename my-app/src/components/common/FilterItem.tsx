import { useAppDispatch } from '../../app/hooks';

interface FilterItemProps {
  callback: () => void;
  title: string;
}

export const FiterItem: React.FC<FilterItemProps> = ({ callback, title }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="dropdownWindowSort__Item" onClick={callback}>
      {title}
    </li>
  );
};
