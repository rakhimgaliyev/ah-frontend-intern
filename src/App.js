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
        if (first[key] > second[key]) {
          return 1;
        }
        return -1;
      });
    }
    return data.concat().sort((first, second) => {
      if (first[key] < second[key]) {
        return 1;
      }
      return -1;
    });
  }

  function sortByEvent(event) {
    event.preventDefault();
    switch (event.target.className) {
      case "profile__name":
        setProfiles(getSortedProfiles(profiles, "Name"));
        break;
      case "profile__email":
        setProfiles(getSortedProfiles(profiles, "Email"));
        break;
      case "profile__phone":
        setProfiles(getSortedProfiles(profiles, "Phone"));
        break;
      case "profile__company":
        setProfiles(getSortedProfiles(profiles, "Company"));
        break;
      default:
        break;
    }
  }

  return (
    <div className="wrapper">
      <div className="profile__title">
        <button className="profile__name" onClick={event => sortByEvent(event)}>
          Name
        </button>
        <button
          className="profile__email"
          onClick={event => sortByEvent(event)}
        >
          Email
        </button>
        <button
          className="profile__phone"
          onClick={event => sortByEvent(event)}
        >
          Phone
        </button>
        <button
          className="profile__company"
          onClick={event => sortByEvent(event)}
        >
          Company
        </button>
      </div>
      <hr />
      {profiles && <ProfilesList profiles={profiles} />}
    </div>
  );
}

export default App;
