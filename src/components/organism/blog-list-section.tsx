/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import BlogItem, { BlogItemSkeleton } from '../molecules/blog-item';
import FilterItem from '../molecules/filter-item';
import { Pagination } from '../molecules/pagination';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tagsDataState } from '@/src/recoils/tag-atom';
import { blogListDataState } from '@/src/recoils/blog-list-atom';
import { useQuery } from 'react-query';
import BlogRepository from '@/src/repositories/blog-repository';
import { PaginationModel } from '@/src/models/pagination-model';
import { BlogModel } from '@/src/models/blog-model';
import notFoundAnimation from '@/src/assets/lottie/not-found.json';
import Lottie from 'lottie-react';

const BlogListSection = () => {
  // states
  const tags = useRecoilValue(tagsDataState);
  const [blogs, setBlogs] = useRecoilState(blogListDataState);
  const [activeTag, setActiveTag] = useState<number | string | undefined>('');
  const [search, setSearch] = useState('');
  const [activeUrl, setActiveUrl] = useState<string | null | undefined>();

  // blogs query
  const blogRepository = new BlogRepository();
  const fetchBlogs = async () => {
    const data = await blogRepository.getBlogs({
      tag_id: activeTag,
      search: search,
      active_url: activeUrl
    });
    return data;
  };

  const blogsQuery = useQuery(['blogs', activeTag, activeUrl], () => fetchBlogs(), {
    enabled: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    onSuccess: (data: PaginationModel<BlogModel[]>) => {
      setBlogs(data.data as PaginationModel<BlogModel[]>);
    }
  });

  useEffect(() => {
    setActiveUrl(undefined);
    blogsQuery.refetch();
  }, [activeTag]);

  // search useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveUrl(undefined);
      blogsQuery.refetch();
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <section id='blog-list'>
      {/* Blog Filter Section */}
      <div className='container container-fit -mb-6'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-5'>
            <FilterItem id='' title='All' activeFilter={activeTag} onClick={() => setActiveTag('')} />
            {tags?.map((item) => (
              <FilterItem
                key={item.id}
                id={item.id}
                title={item.name}
                activeFilter={activeTag}
                onClick={() => setActiveTag(item.id)}
              />
            ))}
          </div>

          {/* Search */}
          <div className='relative flex flex-initial w-64 items-center'>
            <input
              className='px-5 py-3 w-full rounded-full'
              placeholder='Search'
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
              {/* Insert your search icon here */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 stroke-current text-gray-500'
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='9' cy='9' r='6' />
                <line x1='19' y1='19' x2='14.5' y2='14.5' />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className='container container-fit p-6'>
        <div className='bg-white p-6 rounded-3xl'>
          {/* Blogs data */}
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 md:p-8 lg:grid-cols-3 lg:p-14'>
            {(blogsQuery.isLoading || blogsQuery.isFetching) &&
              [1, 2, 3, 4, 5, 6].map((item) => <BlogItemSkeleton key={item} />)}

            {!blogsQuery.isLoading &&
              !blogsQuery.isFetching &&
              blogs?.data?.map((blog, index) => <BlogItem key={index} blog={blog} />)}
          </div>

          {/* Not Found */}
          {blogs && blogs.data?.length === 0 && (
            <div className='w-1/3 mx-auto'>
              <Lottie animationData={notFoundAnimation} loop={true} />
              <p className='text-center text-gray-500 font-semibold'>Oops, No blog found</p>
            </div>
          )}
        </div>
      </div>

      {/* Blog Pagination Section */}
      {blogs && blogs.data && blogs.data?.length > 0 && (
        <div className='container container-fit px-6 -mt-6 flex justify-end'>
          <Pagination onChange={(link) => setActiveUrl(link.url)} links={blogs?.links ?? []} />
        </div>
      )}
    </section>
  );
};

export default BlogListSection;
