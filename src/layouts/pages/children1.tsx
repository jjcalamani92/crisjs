import { useRouter } from "next/router";
import { FC } from "react"
import { Article } from "../../components/article";
import { Site } from "../../interfaces/site";
import { getChildren00, getChildren11, getPathsChildren1 } from "../../utils/functionV2";
import { Blogs } from "./blog";
import { Home } from "./home";

interface Props {
  sites: Site[]
}

export const Children1:FC<Props>= ({sites}) => {
  const { asPath, query} = useRouter()
  const children1 = getChildren11(sites, query)!
  switch (asPath) {
    case getPathsChildren1(sites, asPath):
      return (
        <Article article={children1}/>
      )
    default:
      return null;
  }
}