import { login } from "../../calls";

export default (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.send({
      success: false,
      message: "Error: no code",
    });
  }

  login({ code }).then((data) => {
    res.redirect(`/home?accessToken=${data.access_token}`);
  }).catch((err) => {
    throw err;
  });
};
