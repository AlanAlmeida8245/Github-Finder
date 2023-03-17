import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Repos from "../components/Repos";
import Classes from "../components/Repos.module.css"

interface Repository {
  name: string;
  html_url: string;
  full_name: string;
  created_at: string;
  description: string;
  watchers: number;
  forks: number;
}

export const Repositories = () => {
  const { id } = useParams();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepositories() {
      const res = await fetch(`https://api.github.com/users/${id}/repos`);
      const data = await res.json();
      setRepositories(data);
      setLoading(false);
      console.log(data);
    }

    fetchRepositories();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
        <h1>Repositorios de {id}</h1>
        <div className={Classes.btn_voltar}>
          <Link to={`/`}>Voltar</Link>
        </div>
          {repositories.map((repo) => (
            
            <Repos
              name={repo.name}
              html_url={repo.html_url}
              full_name={repo.full_name}
              created_at ={repo.created_at}
              description = {repo.description}
              watchers = {repo.watchers}
              forks={repo.forks}
            />
          ))}
        </>
      )}
    </div>
  );
};
