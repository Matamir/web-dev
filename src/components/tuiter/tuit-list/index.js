import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import { createTuit, deleteTuit, updateTuit, findAllTuits}
  from "../actions/tuits-actions";
import TuitListItem
  from "./tuit-list-item";
// import {useSelector} from "react-redux";
import './tuits.css';

const TuitList = () => {
  const tuits = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});
  useEffect(() =>
          findAllTuits(dispatch),
      []);

  return (<>

        <button onClick={() =>
            createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">
          Tuit
        </button>
        <textarea className="form-control w-75"
                  onChange={(e) =>
                      setNewTuit({...newTuit,
                        tuit: e.target.value})}/>
  <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit =>
              <>
                <i className="fas fa-remove float-end"
                 onClick={() => deleteTuit(
                     dispatch, tuit)}/>
              <TuitListItem key={tuit._id}
                            tuit={tuit}/>

                <div>
                  Likes: {tuit.likes}
                  <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + 1
                  })} className="far fa-thumbs-up ms-2"/>
                </div>
              </>)
        }
      </ul></>
  );
}

export default TuitList;

