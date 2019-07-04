import React, { useEffect } from 'react';
import { getToken } from './auth/utils';
import Layout from './Layout';

function ProtectedPage(props) {
  const { history } = props;
  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push('/login');
    }
  });

  return (
    <Layout {...props}>
      <h2>Content</h2>
    </Layout>
  );
}

export default ProtectedPage;
