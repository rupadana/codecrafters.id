/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Button from '../atoms/button';

interface FilterItemProps {
  id: number | string | undefined;
  title: string;
  activeFilter: number | string | undefined;
  onClick?: () => void;
}

const FilterItem = (props: FilterItemProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (props.activeFilter === props.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props.activeFilter]);

  const onClick = () => {
    setIsActive(!isActive);
    if (props.onClick) {
      props.onClick();
    }
  };

  if (isActive) {
    return <Button text={props.title} onClick={onClick} />;
  }

  return (
    <button className='font-bold cursor-pointer' onClick={onClick}>
      {props.title}
    </button>
  );
};

export default FilterItem;
