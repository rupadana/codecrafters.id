import { useState } from 'react';
import BlogListSection from '../organism/blog-list-section';
import BlogMainSection from '../organism/blog-main-section';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  return (
    <>
      {/* Main Blog Section */}
      <BlogMainSection />

      {/* Blog List Section */}
      <BlogListSection />
    </>
  );
};

export default BlogPage;
