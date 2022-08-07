import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Main } from "../components/component";
import { Footer } from "../components/footer";
import { Header } from "../components/headerPages";
import { Site } from "../interfaces/site";
import { Data } from "../interfaces/siteV1";

interface Layout {
	title: string;
	pageDescription?: string;
	imageFullUrl?: string;
	children?: React.ReactNode;
	data: Data
}

export const Layout: FC<Layout> = ({
	title,
	children,
	pageDescription,
	imageFullUrl,
	data
}) => {
	const router = useRouter()
  const { pathname, asPath } = router
	// console.log(sites);
	// const site = sites.find((site: { _id: string; }) => site._id === process.env.API_SITE)
	// const hero = site?.route[0].content.body
	// const header = site?.route .filter((data: { href: string}) => data.href !== 'home')
	
	
	
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
				<link rel="icon" href={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644875469/React-jj/lvsgwhadou1vkgmoscqu.png"} />
				<meta property="product:price:currency" content="USD" />
				<meta property="product:price:amount" content="25" />
			</Head>
      <Header data={data}  />
			<Main>
				{children}
			</Main>
			<Footer />
			</>
	);
};
