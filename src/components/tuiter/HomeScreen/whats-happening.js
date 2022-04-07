import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');

  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    console.log(whatsHappening);
    dispatch({type: 'create-tuit', tuit: whatsHappening});
  }

  return (
      <>
        <textarea className={"wd-whats-happening-textbox text-white"} placeholder={"What's Happening"} value={whatsHappening}
                  onChange={(event) =>
                      setWhatsHappening(event.target.value)}>

        </textarea>
        <div className={"row"}>
          <div className={"col-3 wd-new-tuit-icons"}>
            <div className={"fas fa-image wd-new-tuit-icons"}></div>
            <div className={"fas fa-smile wd-new-tuit-icons"}></div>
            <div className={"fas fa-image wd-new-tuit-icons"}></div>
            <div className={"fas fa-calendar wd-new-tuit-icons"}></div>
          </div>
          <button className={"col-7 btn btn-primary"} onClick={tuitClickHandler}>
            Tuit
          </button>
        </div>
      </>
  )
};
export default WhatsHappening;

