import axios from 'axios';

let token;
if (typeof window !== "undefined") {
  token = window.localStorage.getItem("accessToken");
  // token = 'hello'
}

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  if (err.response.status === 401) {
    window.localStorage.removeItem("accessToken");
    window.open('/')
  }
  return Promise.reject(err)
})



export async function login({ code }) {
  let response = await axios.post(
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
  return response.data
}

export async function fetchRepos({ page }) {
  let response = await axios.get(
    `https://api.github.com/user/repos?sort=updated&page=${page}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
  return response.data
}

export async function getRepo({ login, id }) {
  let response = await axios
    .get(`https://api.github.com/repos/${login}/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
  return response.data
}

export async function deleteRepo({ full_name }) {
  let response = await axios.delete(`https://api.github.com/repos/${full_name}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  return response.data
}

export async function updateRepo({ login, id, name, description, homepage }) {
  let response = await axios.patch(
    `https://api.github.com/repos/${login}/${id}`,
    {
      name,
      description,
      homepage,
    },
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
  return response.data
}

export async function installations() {
  let response = await axios.get("https://api.github.com/user/installations", {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  })
  return response.data
}

export async function user() {
  let response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  })
  return response.data
}