import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Página no encontrada</h1>
        <p>Encontraste una página que no existe, ¿cómo?</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
