import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import HatunLogo from '../assets/HatunLogo.svg';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate()
  // Estados para almacenar los valores de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el clic en el botón de ingresar
  const handleLogin = () => {
    setTimeout(() => {
      const userNameDefault = "emprendedor";
      const passwordDefault = "1234";

      // Elimina los espacios en blanco al inicio y al final de username y password
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();

      if (userNameDefault === trimmedUsername && passwordDefault === trimmedPassword) {
        navigate("/home");
      }
    }, 500);
  };

  return (
    <div className='p-7 flex h-[100vh] flex-col justify-center gap-32 items-center'>
      <div className='w-2/3 flex flex-col gap-7'>
        <img src={HatunLogo} alt="Logo Hatun" />
        <span className='font-bold text-primary-900 text-center text-lg'>
          Descubre los mejores lugares gratis!
        </span>
      </div>
      <div className='w-full px-12 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-gray-800 font-bold' htmlFor="username">Nombre de Usuario</label>
          <Input
            placeholder='Jose1234'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-gray-800 font-bold' htmlFor="password">Contraseña</label>
          <Input
            placeholder='********'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button color='primary' className='mt-7' onPress={handleLogin}>
          Ingresar
        </Button>
      </div>
    </div>
  );
};
