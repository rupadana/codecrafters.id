import { useRecoilValue } from 'recoil';
import NavItem from '../molecules/nav-item';
import SettingModel from '@/src/models/setting-model';
import { settingsDataState } from '@/src/recoils/setting-atom';

const FooterSection = () => {
  const settings = useRecoilValue<SettingModel>(settingsDataState);

  return (
    <section id='footer'>
      <div className='container container-fit p-6 overflow-hidden'>
        <div className='relative lg:-bottom-14'>
          <div className='relative w-full rounded-t-3xl bg-white overflow-hidden px-10 py-10 z-10 md:px-16 md:py-16 lg:py-16 lg:px-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 lg:gap-20'>
              {/* About */}
              <div className='md:space-y-4'>
                <h2 className='text-[#292B41] font-bold text-base md:text-lg'>About CodeCrafters</h2>
                <p className='text-[#887DAB] text-sm leading-6'>
                  {settings.site_description ??
                    'CodeCrafters adalah Software House, lahir untuk mengubah ide menjadi aplikasi berkualitas, dan memanfaatkan kode untuk perubahan positif. Bersama-sama, mari ciptakan masa depan yang lebih baik melalui seni kode.'}
                </p>
              </div>

              {/* Contact */}
              <div className='md:space-y-4'>
                <h2 className='text-[#292B41] font-bold text-base md:text-lg'>Contact</h2>
                <p className='text-[#887DAB] text-sm leading-6'>
                  Diskusikan ide bisnismu, kami akan mengubahnya menjadi aplikasi.
                </p>

                <p className='gradient text-transparent bg-clip-text font-semibold text-sm leading-6'>
                  {settings.site_email ?? 'sales@codecrafters.id'}
                </p>
              </div>

              {/* Page */}
              <div className='md:space-y-4'>
                <h2 className='text-[#292B41] font-bold text-base md:text-lg'>Pages</h2>
                <div className='flex flex-col space-y-1'>
                  <NavItem url='/' title='Home' />
                  <NavItem url='#service' title='Services' />
                  <NavItem url='/blogs' title='Blogs' />
                </div>
              </div>
            </div>
          </div>

          <div className='invisible lg:visible w-full h-[105%] rounded-3xl absolute rotate-2 -mt-8 ml-3 inset-0 gradient'></div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
