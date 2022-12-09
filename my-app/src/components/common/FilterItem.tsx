interface FilterItemProps {
  callback: () => void;
  title: string;
}

export const FiterItem: React.FC<FilterItemProps> = ({ callback, title }) => {
  return (
    <li className="dropdownWindowSort__Item" onClick={callback}>
      {title}
    </li>
  );
};
