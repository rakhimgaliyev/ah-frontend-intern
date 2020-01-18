class profilesSortStorage {
  constructor() {
    if (profilesSortStorage.instance) {
      return profilesSortStorage.instance;
    }

    profilesSortStorage.instance = this;
  }

  isProfilesSortKeyEquals(key) {
    return localStorage.getItem("key") === key;
  }

  setProfilesSortKey(key) {
    localStorage.setItem("key", key);
  }

  discardProfilesOrderStatus() {
    localStorage.setItem("reversed", "0");
  }

  isProfilesOrderReversed() {
    if (localStorage.getItem("reversed") === "1") {
      return true;
    }
    return false;
  }

  changeProfilesOrderStatus() {
    if (localStorage.getItem("reversed") === "0") {
      localStorage.setItem("reversed", "1");
    } else {
      localStorage.setItem("reversed", "0");
    }
  }
}

export let ProfilesSortStorage = new profilesSortStorage();
