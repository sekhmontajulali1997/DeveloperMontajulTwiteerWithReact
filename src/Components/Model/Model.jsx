
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
//import { Link } from "react-router-dom";
import "./Model.scss";








const Model = ( {children, hide}) => {
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
         {children}
        </div>
        <div className="ModalRight"></div>
      </div>
    </div>
    
    
    </>
  )
}




export default Model