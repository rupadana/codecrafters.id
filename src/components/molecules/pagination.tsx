import React, { ReactNode } from 'react';
import { PaginationLinkModel } from '../../models/pagination-model';
import Purify from '../atoms/purify';
import clsx from 'clsx';

type PaginationProps = {
  links: PaginationLinkModel[];
  onChange?: (link: PaginationLinkModel) => void;
};

export const Pagination = (props: PaginationProps) => {
  return (
    <div className={`flex gap-[2px] w-fit px-2 md:px-4 bg-white rounded-full`}>
      {props.links.map((item, index) => (
        <PaginationItem
          link={item}
          links={props.links}
          key={index}
          onChange={props.onChange}
          activeLink={props.links.find((item) => item.active)}
        />
      ))}
    </div>
  );
};

type PaginationItemProps = {
  link: PaginationLinkModel;
  activeLink?: PaginationLinkModel;
  onChange?: (link: PaginationLinkModel) => void;
  links: PaginationLinkModel[];
};

export const PaginationItem = (props: PaginationItemProps) => {
  let isMore = false;

  const itemComponent = () => {
    let label = '';
    if (props.link.label.toLocaleLowerCase().includes('previous')) {
      label = '<';
    } else if (props.link.label.toLocaleLowerCase().includes('next')) {
      label = '>';
    } else {
      label = props.link.label;
    }

    return (
      <button
        onClick={() => !isMore && props.link.url && props.onChange && props.onChange(props.link)}
        className={clsx(
          {
            'gradient text-white font-bold': props.link.active,
            'font-bold': !props.link.active,
            'hover:gradient hover:text-white cursor-pointer': props.link.url && !isMore && !props.link.active,
            'cursor-default': props.link.url && !isMore
          },
          (props.link.label ?? '').length > 1 ? 'px-2' : 'w-10',
          'h-10',
          'rounded-full',
          'flex',
          'justify-center',
          'items-center',
          'flex-none',
          'text-lg'
        )}>
        <Purify html={!isMore ? label : '...'} />
      </button>
    );
  };

  if (!Number(props.link.label)) {
    return itemComponent();
  } else {
    if (Number(props.link.label) <= 2) {
      return itemComponent();
    }

    if (Number(props.link.label) >= props.links.length - 1 - 2) {
      return itemComponent();
    }

    if (
      Number(props.link.label) > Number(props.activeLink?.label) - 2 &&
      Number(props.link.label) < Number(props.activeLink?.label) + 2
    ) {
      return itemComponent();
    }

    if (
      Number(props.link.label) === Number(props.activeLink?.label) - 2 ||
      Number(props.link.label) === Number(props.activeLink?.label) + 2
    ) {
      isMore = true;
      return itemComponent();
    }
  }

  return <></>;
};
