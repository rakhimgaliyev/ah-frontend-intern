import React from "react";
import "./App.css";

import ProfilesList from "./components/profiles/ProfilesList";

import "./components/profiles/ProfilesList";
import { useSelector, useDispatch } from "react-redux";

import { sortStraightByKey } from "./actions";

function App() {
  const sorter = useSelector(state => state.sorter);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      {sorter.length > 0 && (
        <div>
          {Object.keys(sorter[0]).map(key => {
            return (
              <button
                key={"profiles__title-bar__element__" + key}
                className="profiles__title-element"
                style={{ width: 100 / Object.keys(sorter[0]).length + "%" }}
                onClick={event =>
                  dispatch(sortStraightByKey(event.target.textContent))
                }
              >
                {key}
              </button>
            );
          })}
          <hr />
          {<ProfilesList profiles={sorter} />}
        </div>
      )}
    </div>
  );
}

export default App;
