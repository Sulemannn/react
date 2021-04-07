import React from "react";


class Steps extends React.Component {

    render() {
        return (
          <div className="container-fluid">
            <div className="row">
    
              <p>Heart : {(heartMin)}</p>
              <p>Temperature : {(tempMin)}</p>
              <p>Steps : {(stepsMin)}</p>
    
            </div>
            
          </div>
        );
      }

}

export default Steps;