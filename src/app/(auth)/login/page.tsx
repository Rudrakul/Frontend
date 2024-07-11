import { LoginForm } from "@/components/auth/login/LoginForm";

const Login = () => {
  return (
    <div className="p-10 flex justify-center items-center min-h-screen">
      {/* Card */}
      <div className="card-container border-theme-primary-light rounded-sm border-2 w-[50%] h-[45%] p-4">
        <h1 className="text-4xl font-bold">Rudrakul</h1>
        <p className="text-theme-primary-light text-2xl">
          Your journey from you to you!
        </p>
        <div className="login-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
