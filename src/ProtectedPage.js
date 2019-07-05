import React, { useEffect } from 'react';
import { getToken } from './utils';
import Layout from './Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import SuppliersPage from './supplier/SuppliersPage';
import SupplierCreatePage from './supplier/SupplierCreatePage';
import SupplierEditPage from './supplier/SupplierEditPage';

import CategoriesPage from './category/CategoriesPage';
import CategoryCreatePage from './category/CategoryCreatePage';
import CategoryEditPage from './category/CategoryEditPage';

import ProductsPage from './product/ProductsPage';
import ProductCreatePage from './product/ProductCreatePage';
import ProductEditPage from './product/ProductEditPage';

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
      <Switch>
        <Route path="/products/create" component={ProductCreatePage} />
        <Route path="/products/:productId" component={ProductEditPage} />
        <Route path="/products" component={ProductsPage} />

        <Route path="/categories/create" component={CategoryCreatePage} />
        <Route path="/categories/:categoryId" component={CategoryEditPage} />
        <Route path="/categories" component={CategoriesPage} />

        <Route path="/suppliers/create" component={SupplierCreatePage} />
        <Route path="/suppliers/:supplierId" component={SupplierEditPage} />
        <Route path="/suppliers" component={SuppliersPage} />
        <Route exact path="/" component={DashboardPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default ProtectedPage;
