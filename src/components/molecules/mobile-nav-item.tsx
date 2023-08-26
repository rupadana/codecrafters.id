import { mobileMenuOpen } from '@/src/recoils/menu-atom';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

interface MobileNavItemProps {
  url: string;
  title: string;
}

const MobileNavItem = (props: MobileNavItemProps) => {
  const { url, title } = props;

  const setIsOpen = useSetRecoilState<boolean>(mobileMenuOpen);

  return (
    <Link href={url} className='w-full py-3 text-center' onClick={() => setIsOpen(false)}>
      <span className='block font-medium hover:text-hard-blue'>{title}</span>
    </Link>
  );
};

export default MobileNavItem;
