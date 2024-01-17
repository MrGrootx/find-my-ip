const api = "https://api.ipify.org?format=json";

fetch(api)
  .then((data) => data.json())
  .then((data) => {
    const footertxt = document.querySelector("#footertxt");
    console.log(data.ip);
    footertxt.textContent = data.ip;
  })
  .catch((err) => {
    console.log(err);
    footertxt.textContent = "there is some errors while fetching datas";
  });
