import { useRouter } from "next/router";
import { FC } from "react"
import { Hero } from "../components/hero";
import { Site } from "../interfaces/siteV1";
import { getChildren0 } from "../utils/functionV3";
import { Blogs } from "./pages/blog";

interface Props {
  sites: Site[]
}

export const Children2:FC<Props>= ({sites}) => {
  const { asPath, query} = useRouter()
  const children0 = getChildren0(sites, query)!
  switch (asPath) {
    case '/dashboard/sites/62ee754c77a9c3d11c1fb641':
      return (
        <h1>{asPath}</h1>
      )
    // case '/services':
    //   return (
    //     <h1>{asPath}</h1>
    //   )
    // case '/blog':
    //   return (
    //     <Blogs children0={children0} />

    //   )
    default:
      return null;
  }
}