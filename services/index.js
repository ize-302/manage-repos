import axios from "axios";

export const fetchReposService = async (page) => {
  const token = window.localStorage.getItem("accessToken");
  let response = await axios.get(
    `https://api.github.com/user/repos?sort=pushed&per_page=100&page=${page}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response;
};

export const DeleteRepoService = async (name) => {
  const token = window.localStorage.getItem("accessToken");
  let response = await axios.delete(`https://api.github.com/repos/${name}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response;
};

// fetch repo detail
export const fetchRepoService = async (login, repo) => {
  const token = window.localStorage.getItem("accessToken");
  let response = await axios.get(
    `https://api.github.com/repos/${login}/${repo}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response;
};

// update a repo
export const updateRepoService = async (
  login,
  repo,
  updatedName,
  updatedDescription,
  updatedHomepage
) => {
  const token = window.localStorage.getItem("accessToken");
  let response = await axios.patch(
    `https://api.github.com/repos/${login}/${repo}`,
    {
      name: updatedName,
      description: updatedDescription,
      homepage: updatedHomepage,
    },
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response;
};
