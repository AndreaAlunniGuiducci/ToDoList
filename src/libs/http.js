const BASE_URL = "https://edgemony-backend.herokuapp.com";

const http = (resource) =>
  fetch(BASE_URL + resource).then((response) => response.json());

const httpPOST = (resource, data) =>
  fetch(BASE_URL + resource, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

const httpDELETE = (resource) =>
  fetch(BASE_URL + resource, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());

// Popola la lista degli amici, in base alla lista friendsNames
const fillFriendsList = (friendsNames) => {
  let value = 0;
  for (value in [...Array(friendsNames.length).keys()]) {
    httpPOST("/friends", {
      name: friendsNames[value],
      photo: `https://randomuser.me/api/portraits/men/${value}.jpg`,
    });

    setTimeout(() => {}, 100);
  }
};

export { http, httpPOST, httpDELETE, fillFriendsList };
