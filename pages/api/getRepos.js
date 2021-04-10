const { default: axios } = require("axios");

export default (req, res) => {
  const { accessToken, page } = req.query;
  axios
    .get(
      `https://api.github.com/user/repos?sort=pushed&per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      return err;
    });
};
