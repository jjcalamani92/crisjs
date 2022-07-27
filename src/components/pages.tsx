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
import { Children0 } from '../layouts/dashboard/page';
import { getContentPage, getSiteByVne } from '../utils/getSiteByVne';
import { getSiteDS, getSiteDSP, getSiteDSPC0, getSiteDSPC1 } from '../utils/getSiteByUrl';

interface Page {
  sites: ISite[]
}
export const Page: FC<Page> = ({ sites }) => {
  const { asPath, query } = useRouter()
console.log(getSiteDSPC0(sites));


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
    case getSiteDS(sites).find(url => url === asPath):  // dashboard/sites/[id] || dashboard/sites/new
      return <Site sites={sites} tree={getDataTree(sites)} /> 
    case getSiteDSP(sites).find(url => url === asPath): // dashboard/sites/[id]/pages
      return <Route sites={sites} tree={getDataTree(sites)} />
    case getSiteDSPC0(sites).find(url => url === asPath): // dashboard/sites/
      return <Children0 sites={sites} tree={getDataTree(sites)} />
    default:
      return <Page404 />

  }
}