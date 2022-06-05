import React from "react";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import Card from './Card'
import DeleteRepos from "./DeleteRepos";
import Pagination from "./Pagination";
import { fetchRepos } from '../pages/calls'

const Repos = () => {
  const [repos, setrepos] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  let [page, setpage] = React.useState(1);

  const getRepos = () => {
    fetchRepos({ page: page }).then((data) => {
      setloading(false);
      let updatedRepos = [...repos]
      updatedRepos.push(...data)
      setrepos(updatedRepos);
    }).catch((err) => {
      setloading(false);
      throw err;
    });
  }

  const handlePagination = () => {
    setpage(page + 1)
  }

  const handleToggleCheck = (repoSelected) => {
    const repoIndex = repos.findIndex(
      (repo) => repo.name === repoSelected.name
    );
    let reposCopy = [...repos];
    reposCopy[repoIndex] = {
      ...reposCopy[repoIndex],
      checked: !reposCopy[repoIndex].checked,
    };
    setrepos(reposCopy);
  };

  React.useEffect(() => {
    getRepos();
  }, [page]);

  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
        {!loading &&
          repos.map((repo) => (
            <Card
              repo={repo}
              key={repo.id}
              onClick={() => handleToggleCheck(repo)}
            />
          ))
        }
      </SimpleGrid>
      {/* pagination */}
      {!loading && repos.length > 0 && <Pagination handlePagination={() => handlePagination()} />}
      <DeleteRepos repos={repos} fetchRepos={() => getRepos()} />
    </>
  );
};

export default Repos;
