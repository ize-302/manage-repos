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
      res.status(200).send(response.data);
    })
    .catch((err) => {
      return err;
    });
};
