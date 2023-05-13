import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
      googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => console.log(error))
    }

  return (
    <div>
      <div className="divider">OR</div>

      <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
        <h1 className="text-xl font-bold">G</h1>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;
