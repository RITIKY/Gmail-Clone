import React from "react";
import { signInWithPopup } from "firebase/auth";
import "./login.css";
import { useDispatch } from "react-redux";
import { database, getServerTimestamp, auth, provider } from "../../firebase";
import { SIGN_IN } from "../../Store/Constants";
function Login() {
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("User logged in with Google:", userCredential.user);
      console.log(userCredential.user);
      dispatch({
        type:'SIGN_IN',
        payload:({
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
          email: userCredential.user.email,
          star: "false"
        })
    });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="login">
        <img src="https://tse4.mm.bing.net/th?id=OIP.cCgiTfRDgSYZFubFQR4SSQHaEK&pid=Api&P=0&h=180" />
        <button className="gmail_login" onClick={handleGoogleSignIn}>
          Login With Gmail
        </button>
      </div>
    </div>
  );
}

export default Login;
