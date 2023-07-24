import axios from "axios";
import Papa from "papaparse";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRFcEsEoXVHsIUakGoDoyz1n11gTREJD-5hZzKBQzjRNHnvql7vpMAOxElozL_wV6GmlS1WP62aBOje/pub?output=csv",
        {
          responseType: "blob",
        }
      )
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => resolve(results.data),
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
