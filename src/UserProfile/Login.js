import React from "react";

function Login() {
  return (
    <div>
      <form class="container">
        <div
          class="image"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/call-center-concept-illustration_114360-2045.jpg?t=st=1700110761~exp=1700111361~hmac=07837cc1d480d29ab391815afd4eddec60fc72fd6055fbdc92442324aa36759e");
`,
          }}
        ></div>
        <div class="extra">
          <div class="login">
            <div class="myLogin">
              <div class="welcome">Already a Memeber</div>
              <div class="email">
                <input
                  type="email"
                  class="editEmail"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="password">
                <input
                  type="password"
                  name=""
                  class="editPassword"
                  id=""
                  placeholder="Enter your Password"
                />
              </div>
              <div class="signin">SIGN IN</div>
              <div class="signup">
                <div class="">Don't have an Account</div>
                <div class="shift">Create One</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
