import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../../data/users";
import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-page">
      <div className="login-container">
        <h3 className="mb-3" style={{ textAlign: 'center' }}>Login</h3>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="user"
          ref={userRef}
        />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="pass"
          ref={passRef}
        />

        <button
          className="btn-login"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            userRef.current.value = "";
            passRef.current.value = "";
            const userInfo = verifyUser(user, pass);
            if (userInfo === null) {
              alert("Wrong username or password!");
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
              setRole(userInfo.role);
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
