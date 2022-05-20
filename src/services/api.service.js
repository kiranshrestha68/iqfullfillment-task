import axios from "axios";

const dashboard = {
  getDashboard: async function () {
    await axios
      .get("https://apitest.iqfulfillment.com/v1/test/dashboard")
      .then((res) => {
       console.log(res, "helo this is res")
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
};

// const dashboard = {
//   getDashboard: async function () {
//     try {
//       const response = await axios.get(
//         "https://apitest.iqfulfillment.com/v1/test/dashboard"
//       );
//       console.log(response, "hello this is response");

//       // return response.data;
//     } catch (error) {
//       return error;
//     }
//   },
// };

export { dashboard };
