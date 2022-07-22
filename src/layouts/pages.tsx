import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Banner } from "../components/banner";
import Header from "../components/headerPages";
import { Hero } from "../components/hero";

interface Props {
	title: string;
	pageDescription?: string;
	imageFullUrl?: string;
	children?: React.ReactNode;
}

export const Pages: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	const router = useRouter()
  const { pathname, asPath } = router
	console.log(asPath);
	
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
      <Header />
      <Banner />
			
			<main>
				{
					asPath === '/'
					?
					<Hero />
					:
					null
				}
			</main>
			
			</>
	);
};
