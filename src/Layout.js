import React from 'react';
import { clearToken, getToken } from './auth/utils';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { logout } from './auth/api';

function Layout(props) {
  const { children, history } = props;
  const handleLogout = () => {
    const token = getToken();

    logout(token)
      .then(() => {
        clearToken();
        history.push('/login');
      })
      .catch(error => {
        const message = error.response
          ? error.response.data.message
          : 'Terjadi kesalahan saat logout, silahkan coba lagi';

        window.alert(message);
      });
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col md={3} className="mb-3">
          <ListGroup>
            <ListGroupItem tag={Link} to="/" action>
              Dashboard
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/sales" action>
              Penjualan
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/purchases" action>
              Pembelian
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/products" action>
              Produk
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/categories" action>
              Kategori
            </ListGroupItem>
            <ListGroupItem tag={Link} to="/suppliers" action>
              Suplier
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href="#"
              onClick={handleLogout}
              className="text-danger"
              action
            >
              Logout
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default Layout;
