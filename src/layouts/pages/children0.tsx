import { useRouter } from "next/router";
import { FC } from "react"
import { Site } from "../../interfaces/site";
import { getChildren00 } from "../../utils/functionV2";
import { Blogs } from "./blog";
import { Home } from "./home";

interface Props {
  sites: Site[]
}

export const Children0:FC<Props>= ({sites}) => {
  const { asPath, query} = useRouter()
  const children0 = getChildren00(sites, query)!
  switch (asPath) {
    case '/':
      return (
        <Home children0={children0}/>
      )
    case '/blog':
      return (
        <Blogs children0={children0} />
        
      )
    default:
      return null;
  }
}