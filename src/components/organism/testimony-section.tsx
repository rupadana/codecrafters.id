import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonyItem from '../molecules/testimony-item';
import { useRecoilValue } from 'recoil';
import TestimonyModel from '@/src/models/testimony-model';
import { testimoniesDataState } from '@/src/recoils/testimony-atom';

const TestimonySection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonies = useRecoilValue<TestimonyModel[]>(testimoniesDataState);

  return (
    <section id='slick-testimony'>
      <div className='container container-fit p-6 mt-20'>
        <div className='bg-[#F1F3FF] p-10'>
          <div className='flex flex-col space-y-16 mb-10'>
            <h1 className='gradient bg-clip-text text-transparent text-3xl font-semibold italic text-center'>
              Testimony
            </h1>

            <Slider {...settings}>
              {testimonies.map((item) => (
                <TestimonyItem key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
