const { default: axios } = require("axios");
const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

const apis = require("./routes/apis");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use("/apis", apis);

    // sample
    server.get("/api/route", (req, res) => {
      return res.send("hello");
    });

    // sign in user
    server.get("/user/signin/callback", (req, res, next) => {
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
    });

    // get authenticated user
    server.get("/user", (req, res) => {
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
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`server started at port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
