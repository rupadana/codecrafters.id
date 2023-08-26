import Image from 'next/image';
import NavItem from '../molecules/nav-item';
import Button from '../atoms/button';
import MobileNavItem from '../molecules/mobile-nav-item';
import { useRecoilState } from 'recoil';
import { mobileMenuOpen } from '@/src/recoils/menu-atom';

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(mobileMenuOpen);

  return (
    <nav className='container container-fit relative'>
      <div className='flex items-center justify-between space-x-20 my-3'>
        {/* Logo */}
        <div className='z-30'>
          <Image src='/assets/images/logo.png' width={50} height={50} alt='logo' />
        </div>

        {/* Menu Item */}
        <div className='hidden items-center space-x-10 md:flex'>
          <NavItem url='/' title='Home' />
          <NavItem url='#service' title='Services' />
          <NavItem url='/blogs' title='Blogs' />
        </div>

        {/* Button */}
        <Button
          text='Hubungi Kami'
          onClick={() => {
            window.open('https://wa.me/6283119030893', '_blank');
          }}
        />

        {/* Hamburger Menu */}
        <button
          id='menu-btn'
          className={`${isOpen && 'open'} z-30 md:hidden focus:outline-none hamburger`}
          onClick={() => setIsOpen(!isOpen)}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id='menu'
        className={`fixed inset-0 z-20 ${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-white opacity-90 bg-soft-blue`}>
        <MobileNavItem url='/' title='Home' />
        <MobileNavItem url='/services' title='Services' />
        <MobileNavItem url='/blogs' title='Blogs' />
        <MobileNavItem url='/call-us' title='Hubungi Kami' />
      </div>
    </nav>
  );
};

export default NavbarSection;
