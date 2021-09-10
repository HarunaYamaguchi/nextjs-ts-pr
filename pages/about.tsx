import React from 'react';
import Layout from '../components/Layout';

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere unde,
        repellendus quod molestias sit consectetur voluptas. Excepturi nobis
        tempora a repudiandae nostrum fugiat perferendis quam dolores. Assumenda
        ipsam dicta maiores!
      </p>
    </Layout>
  );
};

export default about;
