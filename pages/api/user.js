const { default: axios } = require("axios");

export default (req, res) => {
  const accessToken = req.query.accessToken;
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
};
