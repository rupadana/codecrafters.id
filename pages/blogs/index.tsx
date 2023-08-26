/* eslint-disable react-hooks/exhaustive-deps */
import BlogPage from '@/src/components/pages/blog-page';
import MainTemplate from '@/src/components/templates/main-template';
import { BlogModel } from '@/src/models/blog-model';
import { PaginationModel } from '@/src/models/pagination-model';
import TagModel from '@/src/models/tag-model';
import { blogListDataState } from '@/src/recoils/blog-list-atom';
import { lastestBlogDataState } from '@/src/recoils/lastest-blog-atom';
import { tagsDataState } from '@/src/recoils/tag-atom';
import BlogRepository from '@/src/repositories/blog-repository';
import TagRepository from '@/src/repositories/tag-repository';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface BlogProps {
  lastestBlog: BlogModel;
  tags: TagModel[];
  blogs: PaginationModel<BlogModel[]>;
}

export default function Blog(props: BlogProps) {
  const setLastestBlog = useSetRecoilState<BlogModel>(lastestBlogDataState);
  const setTags = useSetRecoilState<TagModel[]>(tagsDataState);
  const setBlogs = useSetRecoilState<PaginationModel<BlogModel[]>>(blogListDataState);

  useEffect(() => {
    // set lastest blog data to state
    if (props.lastestBlog) {
      setLastestBlog(props.lastestBlog);
    }

    // set tags data to state
    if (props.tags?.length > 0) {
      setTags(props.tags);
    }

    // set blogs data to state
    if (props.blogs) {
      setBlogs(props.blogs);
    }
  }, [props.lastestBlog]);

  return (
    <MainTemplate>
      <BlogPage />
    </MainTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // get lastest blog
  const blogRepository = new BlogRepository();
  const lastestBlogData = await blogRepository.getLastestBlog();

  // get tags
  const tagRepository = new TagRepository();
  const tagsData = await tagRepository.getTags();

  // get blogs
  const blogsData = await blogRepository.getBlogs({});

  return {
    props: {
      lastestBlog: lastestBlogData.data,
      tags: tagsData.data,
      blogs: blogsData.data
    }
  };
};
