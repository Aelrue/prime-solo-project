import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Don't have an account yet? Please click here to register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
