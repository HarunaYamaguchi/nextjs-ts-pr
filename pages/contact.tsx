import React from 'react';
import Layout from '../components/Layout';

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, quos.
      </p>
    </Layout>
  );
};

export default contact;
