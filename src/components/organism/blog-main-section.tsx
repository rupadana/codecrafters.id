/* eslint-disable @next/next/no-img-element */
import App from '@/src/configs/app';
import { lastestBlogDataState } from '@/src/recoils/lastest-blog-atom';
import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const BlogMainSection = () => {
  const lastestBlog = useRecoilValue(lastestBlogDataState);

  // img loader
  const myLoader: ImageLoader = () => {
    const thumbnail = lastestBlog?.thumbnail;
    if (thumbnail) {
      const { id, file_name } = thumbnail;
      return `${App.API_BASE_URL}storage/${id}/${file_name}`;
    }
    return '';
  };

  return (
    <div className='container container-fit p-6'>
      <Link href={`/blogs/${lastestBlog.slug}`}>
        {/* Single Blog */}
        <div className='flex flex-col-reverse md:items-end md:justify-between md:flex-row md:space-x-10 cursor-pointer'>
          {/* Title and Desc */}
          <div className='mt-4 space-y-2 md:mt-0 md:space-y-5 md:mb-4'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl leading-normal'>{lastestBlog?.title}</h1>
            <div
              className='font-medium text-[#727272]'
              dangerouslySetInnerHTML={{ __html: lastestBlog?.content }}
            />
          </div>

          {/* Image */}
          <img
            className='object-cover w-full h-64 md:w-1/2 md:h-auto md:rounded-3xl'
            src={
              lastestBlog?.thumbnail?.file_name
                ? `${App.API_BASE_URL}storage/${lastestBlog?.thumbnail?.id}/${lastestBlog?.thumbnail?.file_name}`
                : '/assets/images/temp/blog2.png'
            }
            alt='blog-thumbnail'
          />
          {/* <Image
            loader={myLoader}
            src={
              lastestBlog?.thumbnail?.file_name
                ? `${App.API_BASE_URL}storage/${lastestBlog?.thumbnail?.id}/${lastestBlog?.thumbnail?.file_name}`
                : '/assets/images/temp/blog2.png'
            }
            width={500}
            height={500}
            style={{
              objectFit: 'cover'
            }}
            sizes='(max-width: 768px) 3000px, 5750px'
            alt='blog-thumbnail'
          /> */}
        </div>
      </Link>
    </div>
  );
};

export default BlogMainSection;
