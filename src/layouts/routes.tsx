import { useRouter } from 'next/router';
import { FC } from "react"
import { Hero } from '../components/hero';
import { Page404 } from '../components/404';
import { Brand } from '../components/brands';
import { getContentPage, getSiteByVne } from '../utils/getSiteByVne';

import useSWR from 'swr';
import { SITES } from '../graphql';
import { getChildrens1, getPathsC0, getPathsC1, getPathsC2, getPathsChildrens1, getPathsChildrens2 } from '../utils/functionV3';
import { Site } from '../interfaces/siteV1';
import { Children0 } from './children0';
import { Children1 } from './children1';
import { Children2 } from './children2';

interface Routes {
  sites: Site[]
}
export const Routes: FC<Routes> = ({ sites }) => {
  const { asPath, query } = useRouter()
  const { data, isValidating, error } = useSWR(SITES)
  // console.log(getPathsChildrens1(sites));
  // console.log(getPathsChildrens2(sites));
  console.log(getChildrens1(sites, query));

  switch (asPath) {
    case getPathsC0(sites, asPath):
      return <Children0 sites={sites}/>
    case getPathsC1(sites, asPath):
      return <Children1 sites={sites}/>
    case getPathsC2(sites, asPath):
      return <Children2 sites={sites}/>


    default:
      return <Page404 />

  }
}