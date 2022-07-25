import { ChartBarIcon, DesktopComputerIcon, GlobeAltIcon, ShieldCheckIcon, ViewGridIcon, MenuIcon, MenuAlt1Icon, MenuAlt2Icon, MenuAlt3Icon, MenuAlt4Icon, SupportIcon, BookmarkIcon, BookmarkAltIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { FC } from "react"
import { ISite } from '../interfaces/site';
import { Hero } from './hero';
import { Pricing } from './pricing';
import { Page404 } from './404';
import { getDataByPage } from '../utils/getDataByPage';

interface Page {
  site: ISite
}
export const Page: FC<Page> = ({ site }) => {
  const {asPath} = useRouter()
  switch (asPath) {
    case '/':
      return (
        <Hero contain={getDataByPage(site, '/').body} />
      )
    case '/prices':
      return (
        <Pricing />

      )
    default:
      return (
        <Page404 />
      );
  }
}