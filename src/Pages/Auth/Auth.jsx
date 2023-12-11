import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import "./Auth.scss";
import Model from "../../Components/Model/Model";
import MetaTag from "../../MetaTag/MetaTag";



const Auth = () => {
  const [model, setModel] = useState(false)
  return (
    <>
   {model && (<Model hide={setModel}  title="Create your account"> <p style={{color: 'white'}}>
  
    loejfiefigrhfhhrhrhrhrhrhrhfvrtvrtrgtrgetrgfege</p> </Model>)}
    
    <MetaTag title={" X. It's What's happening / X"}/>
    
      <div className="PrentDiv">
        <div className="contentArea">

{/*LeftContent Area  */}

          <div className="LeftContent">
            <div className="logoSection">
              <img src="Screenshot_1.png" alt="twitter-logo" />
            </div>
          </div>


 {/*RightContent Area  */}

          <div className="RightContent">
            <div className="headingTop">
              <h1>Happening now</h1>
            </div>
            <div className="headingTwo">
              <h2>Join today.</h2>
            </div>

            <div className="buttonSection">
              <div className="buttonOne">
              <Link to={"#"}> <FcGoogle/> Sign up with Google</Link>
              </div>
              <div className="buttonTwo">
              <Link to={"#"}> <FaApple/> Sign up with Apple</Link>
              </div>
            </div>

            <div className="orSection">
              <hr />
              <span>or</span>
              <hr />
            </div>

            <div className="createAccountButton">
            <Link to={"#"} onClick={() => (setModel(true))}>Create account</Link>
 
            </div>
            
            <div className="termsSection">
              <p>
                By signing up, you agree to the <Link to={"#"}>Terms of Service</Link> and  <Link to={"#"}> Privacy Policy</Link> 
               , including  <Link to={"#"}>  Cookie Use.</Link> 
              </p>
            </div>

            <div className="SignInSection">
              <h1>Already have an account?</h1>

              <Link to={"#"}>Sign in</Link>
            </div>
          </div>
        </div>


        <div className="FooterArea">
          <ul>
            <li><Link to={"#"}>About</Link></li>
            <li><Link to={"#"}>Download the X app</Link></li>
            <li><Link to={"#"}>Help Center</Link></li>
            <li><Link to={"#"}>Terms of Service</Link></li>
            <li><Link to={"#"}>Privacy Policy</Link></li>
            <li><Link to={"#"}>Cookie Policy</Link></li>
            <li><Link to={"#"}>Accessibility</Link></li>
            <li><Link to={"#"}>Ads info</Link></li>
            <li><Link to={"#"}>Blog</Link></li>
            <li><Link to={"#"}>Status</Link></li>
            <li><Link to={"#"}>Careers</Link></li>
            <li><Link to={"#"}>Brand Resources</Link></li>
            <li><Link to={"#"}>Advertising</Link></li>
            <li><Link to={"#"}>Marketing</Link></li>
            <li><Link to={"#"}>X for Business</Link></li> 
            <li><Link to={"#"}>Developers</Link></li> 
          </ul>
          <p> <Link to={"#"}>Directory</Link> <Link to={"#"}>Settings</Link>  © 2023 X Corp. </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
