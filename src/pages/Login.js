// import React, { useState } from 'react';
// import { FaEnvelope, FaLock } from 'react-icons/fa';

// const Login = () => {
//   const [info, setInfo] = useState({ emailId: '', password: '' });
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [loginError, setLoginError] = useState('');

//   const handleInputChange = (event, fieldname) => {
//     setInfo((prevstate) => ({ ...prevstate, [fieldname]: event.target.value }));
//   };

//   const submitHandle = (event) => {
//     event.preventDefault();

//     const { emailId, password } = info;

//     // Reset previous errors
//     setEmailError(false);
//     setPasswordError(false);
//     setLoginError('');

//     if (emailId === "") {
//       setEmailError(true);
//     }

//     if (password === "") {
//       setPasswordError(true);
//     }

//     // if (emailId !== "" && password !== "") {

//       if (emailId === 'admin@gmail.com' && password === '1234') {
//         alert('Login Successful');

//         const userInfo = {
//           emailId: 'admin@gmail.com',
//           password: '1234',
//       };   
//       localStorage.setItem('userinfo', JSON.stringify(userInfo));

//         window.location.href = '/Home';
//       } else {
//         setLoginError('Invalid email or password. Please try again.');
//       }
//     // }
//   };

//   return (
//     <div className='container-fluid' style={{ minHeight: '100vh', backgroundImage: `url('your-background-image-url')`, backgroundSize: 'cover' }}>
//       <div className='container d-flex align-items-center justify-content-center' style={{ minHeight: '80vh' }}>
//         <div className='row col-md-5 border p-4' style={{ backgroundColor: 'lightgray' }}>
//           <form className='mt-3' onSubmit={(e) => submitHandle(e)}>
//             {/* Input for email */}
//             <div className="form-group">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">
//                   <FaEnvelope />
//                 </span>
//                 <input
//                   type="text"
//                   value={info.emailId}
//                   onChange={(e) => handleInputChange(e, 'emailId')}
//                   className={emailError ? "form-control is-invalid mt-2" : "form-control"}
//                   placeholder="e.g., user@example.com"
//                   autoComplete="emailId"
//                 />
//               </div>
//               {emailError && <div className='invalid-feedback'>Please enter an email address.</div>}
//             </div>

//             {/* Input for password */}
//             <div className="form-group">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">
//                   <FaLock />
//                 </span>
//                 <input
//                   type="password"
//                   value={info.password}
//                   onChange={(e) => handleInputChange(e, 'password')}
//                   className={passwordError ? "form-control is-invalid mt-2" : "form-control"}
//                   placeholder="Enter your password"
//                   autoComplete="password"
//                 />
//               </div>
//               {passwordError && <div className='invalid-feedback'>Please enter a password.</div>}
//             </div>

//             {/* Login button */}
//             <button type="submit" className="btn btn-success mt-3 custom-button">
//               Login
//             </button>

//             {/* Display login error, if any */}
//             {loginError && <div className='alert alert-danger mt-3'>{loginError}</div>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [info, setInfo] = useState({ emailId: '', password: '' });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const handleInputChange = (event, fieldname) => {
    setInfo((prevstate) => ({ ...prevstate, [fieldname]: event.target.value }));
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const { emailId, password } = info;

    // Reset previous errors
    setEmailError(false);
    setPasswordError(false);
    setLoginError('');

    if (emailId === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPasswordError(true);
    }

    if (emailId === 'admin@gmail.com' && password === '1234') {
      alert('Login Successful');

      const userInfo = {
        emailId: 'admin@gmail.com',
        password: '1234',
      };
      localStorage.setItem('userinfo', JSON.stringify(userInfo));

      setIsLoggedIn(true); // Set login status to true
      window.location.href = '/Project';
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('userinfo');
    setIsLoggedIn(false); // Set login status to false
  };

  return (
    <div className='container-fluid' style={{ minHeight: '100vh', backgroundImage: `url('your-background-image-url')`, backgroundSize: 'cover' }}>
      <div className='container d-flex align-items-center justify-content-center' style={{ minHeight: '80vh' }}>
        <div className='row col-md-5 border p-4' style={{ backgroundColor: 'lightgray' }}>
          <form className='mt-3' onSubmit={(e) => submitHandle(e)}>
          <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  value={info.emailId}
                  onChange={(e) => handleInputChange(e, 'emailId')}
                  className={emailError ? "form-control is-invalid mt-2" : "form-control"}
                  placeholder="e.g., user@example.com"
                  autoComplete="emailId"
                />
              </div>
              {emailError && <div className='invalid-feedback'>Please enter an email address.</div>}
            </div>

            {/* Input for password */}
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  value={info.password}
                  onChange={(e) => handleInputChange(e, 'password')}
                  className={passwordError ? "form-control is-invalid mt-2" : "form-control"}
                  placeholder="Enter your password"
                  autoComplete="password"
                />
              </div>
              {passwordError && <div className='invalid-feedback'>Please enter a password.</div>}
            </div>

            {/* Login button */}
            <button type="submit" className="btn btn-success mt-3 custom-button">
              Login
            </button>

            {/* Display login error, if any */}
            {loginError && <div className='alert alert-danger mt-3'>{loginError}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
