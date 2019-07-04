import React from 'react';
import { clearToken } from './auth/utils';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Layout(props) {
  const { children } = props;
  const logout = () => {
    clearToken();
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
              onClick={logout}
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
