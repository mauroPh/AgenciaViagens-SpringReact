import DestinoCard1 from "components/DestinoCard/destino1";
import DestinoCard2 from "components/DestinoCard/destino2";
import DestinoCard3 from "components/DestinoCard/destino3";
import DestinoCard4 from "components/DestinoCard/destino4";
import DestinoCard5 from "components/DestinoCard/destino5";
import DestinoCard6 from "components/DestinoCard/destino6";
import DestinoCard7 from "components/DestinoCard/destino7";
import DestinoCard8 from "components/DestinoCard/destino8";
import Pagination from "components/Pagination";

function Listing(){


    return(
<>
            <Pagination/>

            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard1/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard2/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard3/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard4/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard5/>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard6/>
                </div>   
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard7/>
                </div>  
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <DestinoCard8/>
                </div>                 
            </div>
            </div>
</> 
    );
}

export default Listing;