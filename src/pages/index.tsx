import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import Testimonials from '../components/home/Testimonials';
import Projects from '../components/home/Projects';
import Blog from '../components/home/Blog';
import Contact from '../components/Contact';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
