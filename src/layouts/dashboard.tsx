/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
// import { HeadingDashboard, HeadingForm } from '../components/component';
import { HeaderDashboard } from '../components/headerDashboard';
import { ISite } from '../interfaces/site';
import { Heading, Main } from '../components/component';
import { TreeAnt } from '../components/ant/tree';
import { DataNode } from 'antd/es/tree';

interface Props {
  title: string
  tree: DataNode[]
}
export const Dashboard:FC<Props> = ({title, tree}) => {  
  // console.log(tree);
  
  const { query } = useRouter()
  // let url = asPath.substring(1).split('/')
  // console.log(url[url.length-1].length);
  // const site = data.find((data: {_id: string; }) => data._id === url[url.length-1])
  // console.log(site);
  
  return (
    <>
      <Head>
				<title>{title}</title>
				<meta name="keywords" />
			</Head>
        <HeaderDashboard/>
        <Main>
        <div className='grid grid-cols-5 gap-3'>
            <div className='col-span-1'>
              <Heading title='Rutas' />
              <TreeAnt tree={tree} />

            </div>
            <main className='col-span-4'>
              {/* {children} */}
            </main>
          </div>
          {/* {
             (query.slug?.length === 3 && url[url.length-1].length === 24) || url[url.length-1] === 'new'
             ?
             <>
              <HeadingForm title="Sitio"/>
              {/* <FormSite site={site} url={asPath}/> 
             </>
             :
            asPath === '/dashboard/sites'
            ?
            <>
              <HeadingDashboard title='Sitio' url={asPath} />
              {/* <GridSite data={data}/> 
            </>
            :
           
            null
          } */}
        </Main>
    </>
  )
}
