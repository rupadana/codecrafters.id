/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavItemProps {
  title: string;
  url: string;
}

const NavItem = (props: NavItemProps) => {
  const { title, url } = props;

  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      setIsActive(url === '/');
    } else {
      setIsActive(pathname.includes(url) && url !== '/');
    }
  }, [pathname]);

  return (
    <Link href={url}>
      <div
        className={clsx(
          'font-bold',
          isActive && 'text-transparent bg-clip-text bg-gradient-to-b from-soft-blue to-hard-blue',
          'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-soft-blue hover:to-hard-blue',
          'active:bg-gradient-to-b active:from-soft-blue active:to-hard-blue'
        )}>
        {title}
      </div>
    </Link>
  );
};

export default NavItem;
