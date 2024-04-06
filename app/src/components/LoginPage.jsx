import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      {/* Include a form here for future use */}
      <button onClick={() => navigate("/messages")}>Login</button>
    </div>
  );
};

export default LoginPage;
