// const environment = "dev";
const environment = "production";

let baseUrl;
if (environment === "production") {
  // baseUrl = "https://black-panda-slip.cyclic.app";
  baseUrl = "https://homebridge-backend-c67d8f57f4c3.herokuapp.com";
} else {
  baseUrl = "http://localhost:5000";
  // baseUrl = "http://192.168.1.108:5000";
}

export default baseUrl;
