import { useRepos } from "../../hooks/useRepos";

interface OwnerInterface {
  avatarUrl: string;
}

interface NodeInstance {
  id: string;
  url: string;
  description: string;
  owner: OwnerInterface;
}

interface Repo {
  node: NodeInstance;
}

const ReposList = () => {
  const { error, loading, data } = useRepos("react");

  console.log({ error, loading, data });

  if (loading) return <div>spinner...</div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div>
      {data.search.edges.map((repo: Repo) => {
        return (
          <div>
            <div>{repo?.node.url}</div>
            <div>{repo?.node.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReposList;
