import { DataNode } from 'antd/es/tree'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE, SITES, SITE_CONTENT, SITE_PATHS, SITE_PATHS_TREE } from '../graphql/query/site.query'
import { Children, ISite } from '../interfaces/site'
import { Dashboard } from '../layouts/dashboard'
import { Loading } from '../layouts/loading'
import { Pages } from '../layouts/pages'
import { graphQLClientS } from '../swr/graphQLClient'
import { getDataTree } from '../utils/getDataTree'
import { pathsGSP } from '../utils/getStaticPaths'
import { paths, pathsAlls, tree } from '../utils/getStaticProps'
import { getDataPaths } from '../utils/getDataPath';
import { getDataSite } from '../utils/getDataSite'
import { getPathsBySite } from '../utils/getPathsBySite'

interface Props {
  sitesAll: ISite[]
}

const Home: FC<Props> = ({ sitesAll}) => {
  const { asPath } = useRouter()
  const url = asPath.split('/')

  return (
    <>
      {
        url.includes('dashboard')
          ?
          <Dashboard
            title='crisjs'
            tree={tree(sitesAll)}
            sites={sitesAll}
          />
          :
          <Pages
            title='crisjs'
            sites={sitesAll}
            site ={getDataSite(sitesAll, 'cris')}
          />
        // asPath === '/dashboard'
        //   ?
        //   :
        //   <Loading />
      }

    </>

  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { site } = await graphQLClientS.request(SITE_PATHS, { _id: process.env.API_SITE })
  
  const paths = pathsGSP(site)

  return {
    paths,
    fallback: 'blocking'
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { sitesAll } = await graphQLClientS.request(SITES)

  return {
    props: { sitesAll }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Home
