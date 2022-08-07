import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { SITE_PATHS } from '../graphql/query/site.query'
// import { Site } from '../interfaces/site'
import { graphQLClientS } from '../swr/graphQLClient'
import { getPathsBySite } from '../utils/getSiteByVne'
import { Layout } from '../layouts/layout';
import { Routes } from '../layouts/routes'
import { getSiteByVne } from '../utils/getSiteByVne'
import request, { RequestDocument } from 'graphql-request'
import { SITES } from '../graphql/query/siteV1.query'
import { useRouter } from 'next/router'
import { getChildren0, getChildrens0, getChildrens1, getPathsChildren1, getPathsChildrens0, getPathsChildrens1, header, seo, site } from '../utils/functionV3'
import { Site } from '../interfaces/siteV1'

interface Props {
  sites: Site[]
}


const Home: FC<Props> = ({ sites }) => {
  const { query } = useRouter()
  
  return (
    <Layout title={seo(sites, query)?.head.name!} data={header(sites)}>
      <Routes sites={sites} />
    </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  

  return {
    paths: [{params : {slug: []}}, {params : {slug: ['aboutme']}}],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { sites } = await graphQLClientS.request(SITES)
  return {
    props: { sites },
    revalidate: 10,
  }
}
export default Home
