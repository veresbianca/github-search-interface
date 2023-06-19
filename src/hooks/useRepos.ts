import { useQuery, gql } from "@apollo/client";

const GET_REPOS = gql`
  query SearchRepositories($userQuery: String!) {
    search(query: $userQuery, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            url
            description
            stargazerCount
            nameWithOwner
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export const useRepos = (userQuery: string) => {
  const { error, data, loading } = useQuery(GET_REPOS, {
    variables: {
      userQuery,
    },
  });

  return { error, data, loading };
};
