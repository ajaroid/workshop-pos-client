import React, { useEffect } from 'react';
import { getToken } from './auth/utils';

function ProtectedPage(props) {
  const { history } = props;
  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push('/login');
    }
  });

  return <div>Protected</div>;
}

export default ProtectedPage;
