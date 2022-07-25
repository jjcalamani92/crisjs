import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { SITES, SITE_PATHS } from '../graphql/query/site.query'
import { ISite } from '../interfaces/site'
import { graphQLClientS } from '../swr/graphQLClient'
import { getDataSite } from '../utils/getDataSite'
import { getPathsBySite } from '../utils/getPathsBySite'
import { Layout } from '../layouts/layout';
import { Page } from '../components/pages'

interface Props {
  sitesAll: ISite[]
}

const Home: FC<Props> = ({ sitesAll }) => {
  const site = getDataSite(sitesAll)
  // console.log(site);
  
  return (
      <Layout
        title='crisjs'
        site={site}
      >
        <Page sites={sitesAll} />
      </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { site } = await graphQLClientS.request(SITE_PATHS, { _id: process.env.API_SITE })
  return {
    paths: getPathsBySite(site),
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
