import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { AuthContext } from "../../../../../providers/AuthProvider";
import SocialLogin from './../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
         
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
              <h1 className="text-3xl font-semibold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
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
                
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-error text-white"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
  
                <p className="my-4 text-center">Already have an account <Link className="text-red-400 font-bold" to='/login'> Login</Link></p>
              </form>

              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;