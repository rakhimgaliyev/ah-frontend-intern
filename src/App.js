import React from "react";
import "./App.css";
import "./profiles/ProfilesList";
import ProfilesList from "./profiles/ProfilesList";

function App() {
  const [profiles, setProfiles] = React.useState(fetchData);

  function fetchData() {
    fetch(
      "https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json"
    )
      .then(response => response.json())
      .then(data => {
        if (localStorage.getItem("key") !== null) {
          data = getSortedProfiles(data, localStorage.getItem("key"), true);
        }
        setProfiles(data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function getSortedProfiles(data, key, isInit) {
    if (localStorage.getItem("key") !== key) {
      localStorage.setItem("reversed", "0");
      localStorage.setItem("key", key);
    }
    if (isInit !== true) {
      if (localStorage.getItem("reversed") === "1") {
        localStorage.setItem("reversed", "0");
      } else {
        localStorage.setItem("reversed", "1");
      }
    }
    let reversed = localStorage.getItem("reversed");

    if (reversed === "0") {
      return data.concat().sort((first, second) => {
        if (first[key].toUpperCase() > second[key].toUpperCase()) {
          return 1;
        }
        return -1;
      });
    }
    return data.concat().sort((first, second) => {
      if (first[key].toUpperCase() < second[key].toUpperCase()) {
        return 1;
      }
      return -1;
    });
  }

  function sortByEvent(event) {
    event.preventDefault();
    setProfiles(getSortedProfiles(profiles, event.target.textContent));
  }

  return (
    <div className="wrapper">
      {profiles && (
        <div>
          {Object.keys(profiles[0]).map(key => {
            return (
              <button
                key={"profiles__title-bar__element__" + key}
                className="profiles__title-element"
                style={{ width: 100 / Object.keys(profiles[0]).length + "%" }}
                onClick={event => sortByEvent(event)}
              >
                {key}
              </button>
            );
          })}
        </div>
      )}
      <hr />
      {profiles && <ProfilesList profiles={profiles} />}
    </div>
  );
}

export default App;
