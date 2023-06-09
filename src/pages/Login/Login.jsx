import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
    
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)

            
            console.log(user.email)
            

            navigate(from, { replace: true });
            
          })
          .catch(error => console.log(error))

    }

  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-semibold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white"
                  type="submit"
                  value="Login"
                />
              </div>

              <p className="my-4 text-center">New to car doctor <Link className="text-red-400 font-bold" to='/signup'> Sign Up</Link></p>
            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
