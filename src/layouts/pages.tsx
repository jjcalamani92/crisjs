import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Banner } from "../components/banner";
import { Header } from "../components/headerPages";
import { Hero } from "../components/hero";
import { Pricing } from "../components/pricing";
import { Children, ISite } from "../interfaces/site";

interface Props {
	title: string;
	pageDescription?: string;
	imageFullUrl?: string;
	children?: React.ReactNode;
	sites: ISite[]
}

export const Pages: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl,
	sites
}) => {
	const router = useRouter()
  const { pathname, asPath } = router
	// console.log(sites);
	const site = sites.find((site: { _id: string; }) => site._id === process.env.API_SITE)
	const hero = site?.route[0].content.body
	const header = site?.route .filter((data: { href: string}) => data.href !== 'home')
	
	
	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
				<meta property="product:price:currency" content="USD" />
				<meta property="product:price:amount" content="25" />
			</Head>
      {/* <Banner /> */}
      <Header data={header}  />
			<main>
				{
					asPath === '/'
					?
					<Hero data={hero}/>
					:
					asPath === '/prices'
					?
					<Pricing />
					:
					null
				}
			</main>
			
			</>
	);
};
