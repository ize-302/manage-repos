const { default: axios } = require("axios");

export default (req, res) => {
  const { accessToken, page } = req.query;

  axios
    .get(`https://api.github.com/user/installations`, {
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then((response) => {
      // get manage repo's id
      const repo = response.data.installations.find((installation) => {
        return installation.app_slug === "manage-repos";
      });

      axios
        .get(
          `https://api.github.com/user/installations/${repo.id}/repositories?per_page=24&page=${page}`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        )
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          return err;
        });
    })
    .catch((err) => {
      return err;
    });
};
