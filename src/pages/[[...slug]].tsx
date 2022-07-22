import { DataNode } from 'antd/es/tree'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE, SITES, SITE_CONTENT, SITE_PATHS, SITE_PATHS_TREE } from '../graphql/site.query'
import { Children, ISite, Section0, Section1 } from '../interfaces/site'
import { Dashboard } from '../layouts/dashboard'
import { Loading } from '../layouts/loading'
import { Pages } from '../layouts/pages'
import { graphQLClientS } from '../swr/graphQLClient'

interface Props {
  sitesAll: ISite[]
  sites: DataNode[]
}

const Home: FC<Props> = ({ sites, sitesAll }) => {
  const { asPath } = useRouter()
  // console.log(sites);
  
  return (
    <>
      {
        asPath === '/'
          ?
          <Pages
            title='crisjs'
            sites={sitesAll}
          />
          :
          <Loading />
          // <Dashboard
          //   title='crisjs'
          //   tree={sites}
          // />
      }

    </>

  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { site } = await graphQLClientS.request(SITE_PATHS, { _id: process.env.API_SITE })
  let path = site.route.map((data0: Children) => (
    [
      {
        slug: data0.href === 'home' ? [] : [data0.href]
      },
      data0.children
        ?
        data0.children.map((data1: Children) => (
          [{
            slug: [data0.href, data1.href]
          },
          data1.children.map((data2: Children) => (
            [{
              slug: [data0.href, data1.href, data2.href]
            },
            data2.children.map((data3: Children) => ({
              slug: [data0.href, data1.href, data2.href, data3.href]
            }))
            ]
          )),
          ]
        ))
        :
        {
          slug: []
        }
    ]
  ))
  const paths = path.flat(10).map((data: { slug: string[] }) => (
    {
      params: data
    }
  ))
  // console.log(paths);

  return {
    paths,
    fallback: 'blocking'
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = [] } = params as { slug: string[] }
  // console.log('slug', slug);
  // const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })

  // const data = await graphQLClientS.request(SITE_PATHS_TREE, { _id: process.env.API_SITE })
  // // console.log(data);
  // let tree = data.site.route.map((data0: Children, i: number) => (
  //   {
  //     title: data0.name,
  //     key: `0-${i}`,
  //     children:
  //       data0.children
  //         ?
  //         data0.children.map((data1: Children, j: number) => (
  //           {
  //             title: data1.name,
  //             key: `0-${i}-${j}`,
  //             children:
  //               data1.children
  //                 ?
  //                 data1.children.map((data2: Children, k: number) => (
  //                   {
  //                     title: data2.name,
  //                     key: `0-${i}-${j}-${k}`,
  //                     children:
  //                       data2.children
  //                         ?
  //                         data2.children.map((data3: Children, l: number) => (
  //                           {
  //                             title: data3.name,
  //                             key: `0-${i}-${j}-${k}-${l}`,
  //                           }))
  //                         :
  //                         []

  //                   }
  //                 ))
  //                 :
  //                 []

  //           }
  //         ))
  //         :
  //         []
  //   }
  //   // data0.children 
  //   //   ?
  //   //   data0.children.map((data1: Children, j:number) => (
  //   //   [
  //   //     {
  //   //       title: data1.name,
  //   //       key: `0-${i}-${j}`
  //   //     },
  //   //     data1.children
  //   //     ?
  //   //     data1.children.map((data2: Children, k:number) => (
  //   //       {
  //   //         title: data2.name,
  //   //         key: `0-${i}-${j}-${k}`
  //   //       }
  //   //     ))
  //   //     : 
  //   //     {
  //   //       title: data0.name,
  //   //     },
  //   //   ]
  //   //   ))
  //   //   :
  //   //   {
  //   //     title: data0.name,
  //   //   },
  // ))

  const { sitesAll } = await graphQLClientS.request(SITES)
  let sites = sitesAll.map((data: ISite, i: number) => (
    {
      title: data.data.domain,
      key: `/dashboard/sites/${data.data.domain}`,
      children:
        data.route
          ?
          data.route.map((data0: Children, j: number) => (
            {
              title: data0.name,
              key: `/dashboard/sites/${data.data.domain}/${data0.href}`,
              children:
                data0.children
                  ?
                  data0.children.map((data1: Children, k: number) => (
                    {
                      title: data1.name,
                      key: `/dashboard/sites/${data.data.domain}/${data0.href}/${data1.href}`,
                      children:
                        data1.children
                          ?
                          data1.children.map((data2: Children, l: number) => (
                            {
                              title: data2.name,
                              key: `/dashboard/sites/${data.data.domain}/${data0.href}/${data1.href}/${data2.href}`,
                              children:
                                data2.children
                                  ?
                                  data2.children.map((data3: Children, m: number) => (
                                    {
                                      title: data3.name,
                                      key: `/dashboard/sites/${data.data.domain}/${data0.href}/${data1.href}/${data2.href}/${data3.href}`,

                                    }))
                                  :
                                  []

                            }
                          ))
                          :
                          []
                    }
                  ))
                  :
                  []
            }
          ))
          :
          []
    }
  ))

  return {
    props: { sitesAll, sites }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Home
