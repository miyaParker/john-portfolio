import React from 'react';
import Layout from '../../components/Layout';
import Work from '../../components/home/Projects';

const Projects = () => {
  return (
    <Layout pathName='/projects'>
      <div className='pt-[87px]'></div>
      <Work />
    </Layout>
  );
};
export default Projects;
