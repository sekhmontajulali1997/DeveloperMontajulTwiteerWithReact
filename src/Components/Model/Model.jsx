
import { AiOutlineClose } from "react-icons/ai";
import "./Model.scss";



const Model = ({children, hide, title}) => {
  return (
    <>
      <div className="ModelArea">
        <div className="ModelContent">
          <div className="ModelHeader">
          <div className="ModelCloseButton">
              <AiOutlineClose onClick={() => (hide(false))}/>
              <h2>Step 1 of 5</h2>
            </div>
            <div className="HeaderText">
            <h2>{title}</h2>
            
            </div>
           
          </div>
          <div className="Modelbody">
            {children}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
//Create your account