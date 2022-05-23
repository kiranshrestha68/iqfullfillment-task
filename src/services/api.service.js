import axios from "axios";

const dashboard = {
  getDashboard: async function () {
    try {
      const res = await axios.get(
        "https://apitest.iqfulfillment.com/v1/test/dashboard"
      );
      // console.log(res);
      return res;
    } catch (err) {
      // console.log(err);
      return err;
    }
  },
};

const search = {
  getsearchItem: async function (data) {
    try {
      const res = await axios.post(
        "https://apitest.iqfulfillment.com/v1/test/search",
        data
      );
      // console.log(res);
      return res;
    } catch (err) {
      // console.log(err);
      return err;
    }
  },
};

export { dashboard, search };
