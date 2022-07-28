import request, { RequestDocument } from "graphql-request";
import useSWR, { SWRConfiguration } from "swr";

export const useSite= (gql:string, config: SWRConfiguration = {}) => {
  const { isValidating, error, data } = useSWR(gql, config);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
};

const fetcher = (query: RequestDocument) => request(`${process.env.APIS_URL}/graphql`, query)
export const useSit = (gql: any) => {
  return useSWR(gql, fetcher);
}