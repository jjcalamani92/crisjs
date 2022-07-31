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
import { Id } from '../layouts/dashboard/id';
import { Pages } from '../layouts/dashboard/pages';
import { Children0 } from '../layouts/dashboard/children0';
import { getContentPage, getSiteByVne } from '../utils/getSiteByVne';
import { Children1 } from '../layouts/dashboard/children1';
import { Children2 } from '../layouts/dashboard/children2';
import { getSiteDS, getSiteDSP, getSiteDSPC0, getSiteDSPC1, getSiteDSPC2 } from '../utils/functionV2';
import { Sites } from '../layouts/dashboard/sites';

interface Routes {
  sites: ISite[]
}
export const Routes: FC<Routes> = ({ sites }) => {
  const { asPath, query } = useRouter()
  // console.log(getSiteDS(sites, asPath));
  // console.log(getSiteDSPC1(sites, asPath));
  
  
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
      return <Dashboard tree={getDataTree(sites)} > <Sites sites={sites} /> </Dashboard>
    case getSiteDS(sites, asPath):  // dashboard/sites/[id] || dashboard/sites/new
      return <Dashboard tree={getDataTree(sites)} > <Id sites={sites} /> </Dashboard>
    case getSiteDSP(sites, asPath): // dashboard/sites/[id]/pages
      return <Dashboard tree={getDataTree(sites)} > <Pages sites={sites} /> </Dashboard>
    case getSiteDSPC0(sites, asPath): // dashboard/sites/
      return <Dashboard tree={getDataTree(sites)} > <Children0 sites={sites} /> </Dashboard>
    case getSiteDSPC1(sites, asPath): // dashboard/sites/
      return <Dashboard tree={getDataTree(sites)} > <Children1 sites={sites} /> </Dashboard>
    case getSiteDSPC2(sites, asPath): // dashboard/sites/
      return <Dashboard tree={getDataTree(sites)} > <Children2 sites={sites} /> </Dashboard>
    default:
      return <Page404 />

  }
}