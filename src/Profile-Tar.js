import {Link} from "react-router-dom";
import "./Profile-Tar.css";


function Profiletar({childre}) {
    return(
    // <div className="App col-12">
     <div>  
     <Link to="/App">
     <button>
     Back to chat
     </button>
     </Link>
     <div className="textpro">Profile</div>
      <div className="bgpro">
      <div className="Propic"></div>
      <div className="textname">Ratpakorn Suntornsarathul
     </div>
     {childre}
      </div>
     </div>
     
    );
};
    export default Profiletar;