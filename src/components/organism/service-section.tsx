import ServiceRepository from '@/src/repositories/service-repository';
import ServiceItem from '../molecules/service-item';
import { useEffect, useState } from 'react';
import ServiceModel from '@/src/models/service-model';
import { useRecoilValue } from 'recoil';
import { servicesDataState } from '@/src/recoils/service-atom';

const ServiceSection = () => {
  // recoil state
  const services = useRecoilValue<ServiceModel[]>(servicesDataState);

  return (
    <section id='service'>
      <div className='container container-fit p-6'>
        <div className='relative'>
          <div className='relative w-full rounded-3xl bg-dark-blue overflow-hidden px-5 py-5 z-10 md:px-16 lg:py-10 lg:px-28'>
            {/* Title */}
            <div className='flex flex-col items-center gap-5'>
              <h1 className='text-2xl lg:text-4xl italic text-white font-semibold'>Our Services</h1>

              <p className='text-[#B6A8E3] text-center text-sm md:text-base'>
                Kami adalah pengrajin kode yang menggabungkan kreativitas dan teknologi untuk membentuk solusi
                digital elegan.
              </p>
            </div>

            {/* Service Item */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 mb-5'>
              {services?.map((item) => (
                <ServiceItem key={item.id} item={item} />
              ))}
              {/* <ServiceItem
                title='Web Development'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
              />
              <ServiceItem
                title='Mobile Development'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
              />
              <ServiceItem
                title='UI/UX Design'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
              />
              <ServiceItem
                title='Branding'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
              /> */}
            </div>
          </div>

          {/* Rotated Gradient Background Card */}
          <div className='invisible lg:visible w-full h-full rounded-3xl absolute rotate-2 mt-5 -ml-4 inset-0 gradient'></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
