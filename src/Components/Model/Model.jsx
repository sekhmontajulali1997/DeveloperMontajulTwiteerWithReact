
// const Model = ({children, title}) => {
//   return (
//     <>
//       <div className="ModelArea">
//         <div className="ModelContent">
//           <div className="ModelHeader">
//           <div className="ModelCloseButton">
//               <AiOutlineClose />
//               <h2>Step 1 of 5</h2>
//             </div>
//             <div className="HeaderText">
//             <h2>{title}</h2>
            
//             </div>
           
//           </div>dwd
//           <div className="Modelbody">
//             {children}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



//Create your account




//onClick={() => (hide(false))}

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Model.scss";







const Model = ( {hide}) => {
  return (
    <>
    
    <div className="ModalArea">
      <div className="ModalContainer">
        <div className="ModalLeft">
          <div className="ModalClose">
          <AiOutlineClose  onClick={() => (hide(false))}/>
          </div>
        </div>
        <div className="ModalCenter">
          <span>Step 1 of 5</span>
          <h2>Create your account</h2>
          <form action="">

            <div className="InputArea">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Phone" />
            </div>

            <div className="UseEmailSectiov">
              <Link to={'#'}>Use email instead</Link>
            </div>



            <div className="DOBsection">
              <strong>Date of birth</strong>
              <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>


              <div className="SelectBoxSection">

                <select name="" id="">

                  <option value="">Month</option>
                  
                </select>
                <select name="" id="">

                  <option value="">Day</option>
                  
                </select>
                <select name="" id="">

                  <option value="">Year</option>
                  
                </select>



          
              </div>

            </div>
            <div className="subbutton">
              <button>Next</button>
            </div>
          </form>
        </div>
        <div className="ModalRight"></div>
      </div>
    </div>
    
    
    </>
  )
}




export default Model