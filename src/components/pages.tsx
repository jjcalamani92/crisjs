import { useRouter } from 'next/router';
import { FC } from "react"
import { ISite } from '../interfaces/site';
import { Hero } from './hero';
import { Pricing } from './pricing';
import { Page404 } from './404';
import { Dashboard } from '../layouts/dashboard';
import { getDataTree } from '../utils/getDataTree';
import { FAQComponent } from './faqs';
import { Brand } from './brands';
import { Blogs } from './blogs';
import { Site } from '../layouts/dashboard/sites';
import { Route } from '../layouts/dashboard/route';
import { Pages } from '../layouts/dashboard/page';
import { getContentPage, getSiteByVne } from '../utils/getSiteByVne';

interface Page {
  sites: ISite[]
}
export const Page: FC<Page> = ({ sites }) => {
  const { asPath, query } = useRouter()

  switch (asPath) {
    case '/':
      return (
        <>
          <Hero contain={getContentPage(sites, 'home').body} />
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
    case ['/dashboard/sites/62db50d161af9e4b89ba443e', "/dashboard/sites/62deb476f1afee95082d97c4", "/dashboard/sites/new", "/dashboard/sites/62dbf1074609d5227df4baef", "/dashboard/sites/62deb368604756cacb9d826d", "/dashboard/sites/62deb476f1afee95082d97c4"].find(url => url === asPath):
      return <Site sites={sites} tree={getDataTree(sites)} />
    case ['/dashboard/sites/62db50d161af9e4b89ba443e/pages', "/dashboard/sites/62deb476f1afee95082d97c4", "/dashboard/sites/new", "/dashboard/sites/62dbf1074609d5227df4baef/pages", "/dashboard/sites/62deb368604756cacb9d826d", "/dashboard/sites/62deb476f1afee95082d97c4"].find(url => url === asPath):
      return <Route sites={sites} tree={getDataTree(sites)} />
    case ['/dashboard/sites/62db50d161af9e4b89ba443e/pages/home', '/dashboard/sites/62db50d161af9e4b89ba443e/pages/services', "/dashboard/sites/62deb476f1afee95082d97c4", "/dashboard/sites/new", "/dashboard/sites/62dbf1074609d5227df4baef/pages/ropa", "/dashboard/sites/62deb368604756cacb9d826d", "/dashboard/sites/62deb476f1afee95082d97c4"].find(url => url === asPath):
      return <Pages sites={sites} tree={getDataTree(sites)} />
    default:
      return <Page404 />

  }
}