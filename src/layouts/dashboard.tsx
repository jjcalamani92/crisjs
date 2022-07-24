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
import { Heading, HeadingDashboard, Main } from '../components/component';
import { TreeAnt } from '../components/ant/tree';
import { DataNode } from 'antd/es/tree';
import { GridSite } from '../components/grid/gridSite';
import { Domain } from './domain';

interface Props {
  title: string
  tree: DataNode[]
  sites: ISite[]

}
export const Dashboard: FC<Props> = ({ title, tree, sites }) => {
  const { asPath } = useRouter()
  // console.log(asPath.split('/'));

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderDashboard />
      {
        asPath === '/dashboard/sites'
          ?
          <Domain tree={tree} sites={sites} />
          :
          asPath.split('/').length === 4 && asPath.split('/')[2] === "sites"
            ?
            <Domain tree={tree} sites={sites} />
            :
            <h1>hola</h1>
      }
    </>
  )
}
