import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState();
  useEffect(() => {
    
    const data = localStorage.getItem("show-welcome");
    setShowWelcome(JSON.parse(data) ?? true); // retrieve the state from local storage
  }, []);

  const HideShowWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show-welcome", false); // save the state in local storage
  
  };
  return (
    <React.Fragment>
      {showWelcome && (
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={HideShowWelcome}
            />
            <div className="p-4">Welcome</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Welcome;
