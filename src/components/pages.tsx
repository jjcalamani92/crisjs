import { ChartBarIcon, DesktopComputerIcon, GlobeAltIcon, ShieldCheckIcon, ViewGridIcon, MenuIcon, MenuAlt1Icon, MenuAlt2Icon, MenuAlt3Icon, MenuAlt4Icon, SupportIcon, BookmarkIcon, BookmarkAltIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { FC } from "react"
import { ISite } from '../interfaces/site';
import { Hero } from './hero';
import { Pricing } from './pricing';
import { Page404 } from './404';
import { getDataByPage } from '../utils/getDataByPage';
import { Dashboard } from '../layouts/dashboard';
import { getDataTree } from '../utils/getDataTree';
import { getDataSite } from '../utils/getDataSite';
import { FAQComponent } from './faqs';
import { Brand } from './brands';
import { Blogs } from './blogs';
import { Site } from '../layouts/dashboard/sites';

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
    case '/dashboard':
      return <h1>Dashboard</h1>
    case '/dashboard/sites':
      return <Dashboard sites={sites} tree={getDataTree(sites)} />
    case '/dashboard/sites/new':
    case '/dashboard/sites/62db50d161af9e4b89ba443e':
    case '/dashboard/sites/62dbf1074609d5227df4baef':
    case '/dashboard/sites/62deb368604756cacb9d826d':
    case '/dashboard/sites/62deb476f1afee95082d97c4':
      return <Site sites={sites} tree={getDataTree(sites)} />
    default:
      return <Page404 />
      
  }
}