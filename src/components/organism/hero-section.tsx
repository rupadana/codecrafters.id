import SettingModel from '@/src/models/setting-model';
import { settingsDataState } from '@/src/recoils/setting-atom';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const HeroSection = () => {
  const settings = useRecoilValue<SettingModel>(settingsDataState);

  return (
    <section id='hero'>
      <div className='container container-fit lg:h-[70vh] flex flex-col-reverse flex-end lg:flex-row lg:mt-3 lg:mb-0'>
        {/* Text */}
        <div className='flex flex-col space-y-5 text-center lg:text-left lg:w-1/2 lg:mt-28'>
          <h2 className='gradient bg-clip-text text-transparent font-bold text-xl'>
            {settings.site_name ?? 'CodeCrafters'}
          </h2>

          <h1 className='italic font-bold text-3xl md:text-4xl lg:text-5xl'>
            Crafting Innovation <br />
            Through Code
          </h1>

          <p className='text-[#727272]'>
            Selamat datang di CodeCrafters, tempat di mana setiap <br />
            baris kode kami menjadi karya seni yang mengubah dunia digital.
          </p>
        </div>

        {/* Image */}
        <div className='flex justify-center lg:items-start lg:justify-end mb-8 mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
          <Image
            className='w-3/4 lg:w-[500px] h-auto'
            src='/assets/images/hero-rockets.svg'
            alt='hero-img'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
