import React, { useState } from 'react';

const Segundo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar email y contraseña
    if (email === '' || password === '') {
      setError('Todos los campos son obligatorios.');
    } else if (!validateEmail(email)) {
      setError('Por favor, ingresa un email válido.');
    } else if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 8 caracteres alfanuméricos.');
    } else {
      // Aquí puedes realizar la lógica para registrar al usuario en tu sistema
      // ... tu código de registro aquí ...
      // Después de registrar con éxito, puedes redirigir a otra página o realizar alguna acción adicional
      setError('');
      setEmail('');
      setPassword('');
      alert('Registro exitoso!');
    }
  };

  const validateEmail = (email) => {
    // Utiliza una expresión regular para validar el formato de email
    // Aquí se utiliza una expresión regular básica, pero puedes usar una más completa si lo deseas
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Utiliza una expresión regular para validar que la contraseña tenga al menos 8 caracteres alfanuméricos
    // Aquí se utiliza una expresión regular básica, pero puedes usar una más completa si lo deseas
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Segundo
