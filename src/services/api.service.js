import axios from "axios";

const dashboard = {
  getDashboard: async function () {
    await axios
      .get("https://apitest.iqfulfillment.com/v1/test/dashboard")
      .then((res) => {
        console.log(res, "helo this is res");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
};

export { dashboard };
