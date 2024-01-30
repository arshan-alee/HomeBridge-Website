const environment = "dev";
// const environment = "production";

let baseUrl;
if (environment === "production") {
  baseUrl = "https://calm-gray-haddock-sock.cyclic.app";
} else {
  baseUrl = "http://localhost:5000";
}

export default baseUrl;
