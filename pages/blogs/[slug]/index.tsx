/* eslint-disable react-hooks/exhaustive-deps */
import BlogDetailPage from '@/src/components/pages/blog-detail-page';
import MainTemplate from '@/src/components/templates/main-template';
import { BlogModel } from '@/src/models/blog-model';
import { blogDataState } from '@/src/recoils/blog-atom';
import BlogRepository from '@/src/repositories/blog-repository';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface BlogDetailProps {
  blog: BlogModel;
}

export default function BlogDetail(props: BlogDetailProps) {
  const setBlog = useSetRecoilState<BlogModel>(blogDataState);

  useEffect(() => {
    // set blog data to state
    if (props.blog) {
      setBlog(props.blog);
    }
  }, [props.blog]);

  return (
    <MainTemplate>
      <BlogDetailPage />
    </MainTemplate>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { slug } = query;

  // get blog
  const blogRepository = new BlogRepository();
  const blogData = await blogRepository.getBlogBySlug(slug as string);

  if (!blogData.data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      blog: blogData.data
    }
  };
};
