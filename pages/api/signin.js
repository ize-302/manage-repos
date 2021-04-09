const { default: axios } = require("axios");

export default (req, res) => {
  const { query } = req;
  const { code } = query;
  if (!code) {
    return res.send({
      success: false,
      message: "Error: no code",
    });
  }

  axios
    .post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      res.redirect(`/repos?accessToken=${response.data.access_token}`);
    })
    .catch((err) => {
      throw err;
    });
};
