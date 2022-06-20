import AuthLayout from "../../components/molecules/AuthLayout";
import { signupData } from "../../data/AuthData";

const Signup = () => {
  return (
    <div>
      <AuthLayout
        title="Create a free account"
        buttonText="Create my account"
        authdata={signupData}
      />
    </div>
  );
};

export default Signup;
