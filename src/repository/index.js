export default async function fetchProfiles() {
  return fetch(
    "https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json"
  )
    .then(response => response.json())
    .catch(e => {
      console.log(e);
    });
}
