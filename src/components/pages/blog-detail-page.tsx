/* eslint-disable @next/next/no-img-element */
import { BlogModel } from '@/src/models/blog-model';
import { blogDataState } from '@/src/recoils/blog-atom';
import Image, { ImageLoader } from 'next/image';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import App from '@/src/configs/app';

const BlogDetailPage = () => {
  const blog = useRecoilValue<BlogModel>(blogDataState);

  // img loader
  // const myLoader: ImageLoader = () => {
  //   const thumbnail = blog?.thumbnail;
  //   if (thumbnail) {
  //     const { id, file_name } = thumbnail;
  //     return `${App.API_BASE_URL}storage/${id}/${file_name}`;
  //   }
  //   return '';
  // };

  return (
    <div className='container container-fit md:mb-10'>
      <div className='space-y-5 md:space-y-10 px-0 md:px-12 lg:px-24'>
        {/* Blog Title */}
        <h1 className='font-bold text-xl md:text-2xl lg:4xl'>{blog?.title}</h1>

        {/* Blog Author & Date */}
        <div className='flex items-center gap-5'>
          <div className='flex items-center space-x-3'>
            <div className='p-1 bg-[#C5ECFD] rounded-full'>
              <Image src='/assets/images/memoji.png' className='h-9' width={36} height={36} alt='testimony-user' />
            </div>
            <h4 className='font-bold text-dark-blue'>{blog?.author?.name}</h4>
          </div>
          <div className='flex items-center space-x-1'>
            <svg className='h-5 w-5 text-[#828282]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 2V6M8 2V6M3 10h18M3 14h18M3 18h18'
              />
            </svg>
            <p className='align-middle text-[#828282] font-light text-sm md:text-base'>
              {moment(blog.published_at).format('DD MMM YYYY')}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className='flex flex-col gap-5 md:gap-10'>
          {/* Image */}
          <div className='flex justify-center'>
            <img
              src={
                blog?.thumbnail?.file_name
                  ? `${App.API_BASE_URL}storage/${blog?.thumbnail?.id}/${blog?.thumbnail?.file_name}`
                  : '/assets/images/temp/blog2.png'
              }
              width={500}
              height={500}
              className='rounded-xl w-full md:w-2/3'
              alt='blog-image'
            />
          </div>

          {/* Content */}
          <div className='space-y-5'>
            <div className='font-medium text-[#727272]' dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
