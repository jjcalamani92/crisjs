import { ChartBarIcon, DesktopComputerIcon, GlobeAltIcon, ShieldCheckIcon, ViewGridIcon, MenuIcon, MenuAlt1Icon, MenuAlt2Icon, MenuAlt3Icon, MenuAlt4Icon, SupportIcon, BookmarkIcon, BookmarkAltIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { FC } from "react"
import { ISite } from '../interfaces/site';
import { Hero } from './hero';
import { Pricing } from './pricing';
import { Page404 } from './404';
import { getDataByPage } from '../utils/getDataByPage';
import { Domain } from '../layouts/domain';
import { getDataTree } from '../utils/getDataTree';
import { getDataSite } from '../utils/getDataSite';
import { FAQComponent } from './faqs';
import { Brand } from './brands';
import { Blogs } from './blogs';

interface Page {
  sites: ISite[]
}
export const Page: FC<Page> = ({ sites }) => {
  const {asPath} = useRouter()
  const site = getDataSite(sites)
  switch (asPath) {
    case '/':
      return (
      <>
        <Hero contain={getDataByPage(site, '/').body} />
        <Brand />
      </>
      )
    case '/prices':
      return <Pricing />
    case '/faqs':
      return <FAQComponent />
    case '/blogs':
      return <Blogs />
    case '/dashboard/sites':
      return <Domain sites={sites} tree={getDataTree(sites)} />
    default:
      return <Page404 />
      
  }
}