import React from 'react'

function SignUp() {
  return (
    <div>
         <form class="container">
      <div class="image"  style={{
            backgroundImage:
              `url("https://img.freepik.com/free-vector/two-men-shake-hands-with-each-other-isolated-white-background-meeting-greeting-friends-businessmen-deal-agreement-illustration-partnership-cooperation-communication_575670-2344.jpg?w=996&t=st=1700126584~exp=1700127184~hmac=df2026553cfad25437a96b362bb39df01e86f2c66d0f667d7e5b3c6c24fa0008")`,
          }}></div>
      <div class="extra">
        <div class="login">
          <div class="myLogin">
            <div class="welcome">Become a Member</div>
            <div class="photo">
              <input
                type="text"
                class="editPhoto"
                placeholder="Enter your Photo in URL(optionnal)"

              />
            </div>
            <div class="name">
              <input
                type="name"
                class="editName"
                placeholder="Enter your Name"
              />
            </div>
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
                id=""
                class="editPassword"
                placeholder="Enter your Password"
              />
            </div>
            <div class="changePassword">
              <input
                type="password"
                class="editPasswordConfirm"
                name=""
                id=""
                placeholder="Enter your Password"
              />
            </div>
            <div class="signin">SIGN IN</div>
            <div class="signup">
              <div class="">Have an Account</div>
              <div class="shift">Sign in</div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}

export default SignUp