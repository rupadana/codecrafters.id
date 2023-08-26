import ServiceModel from '@/src/models/service-model';
import Image from 'next/image';

interface ServiceItemProps {
  item: ServiceModel;
}

const ServiceItem = (props: ServiceItemProps) => {
  const { item } = props;

  return (
    <div className='flex items-start gap-4'>
      <Image src='/assets/images/service-icon.svg' width={50} height={50} alt='service-icon' />
      <div className='flex flex-col'>
        <h2 className='font-semibold text-white text-sm md:text-base'>{item.name}</h2>
        <p className='font-light text-[#887DAB] text-sm md:text-base'>{item.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
