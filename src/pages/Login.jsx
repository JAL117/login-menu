import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([username, password].includes('')) {
      Swal.fire({
        icon: 'error',
        title: 'Faltan campos por llenar',
      });

      return;
    }

    if (username === 'user@gmail.com' && password === 'contra123') {
      console.log('redireccionando');
      window.location.href = '/inicio';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
      });
    }
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button className="login-submit" type="submit">
          Iniciar sesión
        </button>
      </Form>
    </div>
  );
}

export default Login;
