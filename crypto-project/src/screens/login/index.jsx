import AuthLayout from "../../components/molecules/AuthLayout";
import { loginData } from "../../data/AuthData";

const Login = () => {
  return (
    <div>
      <AuthLayout
        title="Login to Magot"
        buttonText="Login"
        authdata={loginData}
        login
      />
    </div>
  );
};

export default Login;
