import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { SITES, SITE_PATHS } from '../graphql/query/site.query'
import { ISite } from '../interfaces/site'
import { graphQLClientS } from '../swr/graphQLClient'
import { getPathsBySite } from '../utils/getSiteByVne'
import { Layout } from '../layouts/layout';
import { Page } from '../components/pages'
import { getSiteByVne } from '../utils/getSiteByVne'

interface Props {
  sitesAll: ISite[]
}

const Home: FC<Props> = ({ sitesAll }) => {
  return (
      <Layout
        title='crisjs'
        site={getSiteByVne(sitesAll)}
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
    revalidate: 1,
  }
}
export default Home
