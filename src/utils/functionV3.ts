import { ParsedUrlQuery } from "querystring";
import { Site } from "../interfaces/siteV1";

export const site = (sites: Site[]) => {
  return sites.find((data) => data._id === process.env.API_SITE);
};

//TODO: Childrens
export const getChildrens0 = (sites: Site[]) => {
  return site(sites)!.children;
};
export const getChildrens1 = (sites: Site[], query: ParsedUrlQuery) => {
  return getChildren0(sites, query)!.children;
};
 
//TODO: Children
export const getChildren0 = (sites: Site[], query: ParsedUrlQuery) => {
  return getChildrens0(sites)!.find((data) =>
  query.slug ? data.head.href === query.slug[0] : data.head.href  === "/"
  );
};


//TODO: Paths Children
export const getPathsChildren1 = (sites: Site[], query: ParsedUrlQuery) => {
  return getChildrens1(sites, query).map(data1 =>`${query.slug![0]}/${data1.slug}`)
}
export const getPathsChildren2 = (sites: Site[], query: ParsedUrlQuery) => {
  return getChildrens1(sites, query).map(data1 =>`${query.slug![0]}/${data1.slug}`)
}

//TODO: Paths Childrens
export const getPathsChildrens0 = (sites: Site[]) => {
  return getChildrens0(sites).map(data0 => data0.slug === 'home' ? '/':  `/${data0.slug}`)
}
export const getPathsC0 = (sites: Site[], asPath: string) => {
  return getPathsChildrens0(sites).find(data => data === asPath)
}


export const getPathsChildrens1 = (sites: Site[]) => {
  return getChildrens0(sites).map(data0 => data0.children.map(data1 => `/${data0.slug}/${data1.slug}`)).flat(1)
}
export const getPathsC1 = (sites: Site[], asPath: string) => {
  return getPathsChildrens1(sites).find(data => data === asPath)
}

export const getPathsChildrens2 = (sites: Site[]) => {
  return [... new Set(sites.map(data => getChildrens0(sites).map(data0 => data0.children.map(data1 => data1.slug === 'sites' &&  `/${data0.slug}/${data1.slug}/${data._id}` ))).flat(2))].filter(data => data !== false)
}

export const getPathsC2 = (sites: Site[], asPath: string) => {
  return getPathsChildrens2(sites).find(data => data === asPath)
}

//TODO: SEO
export const seo = (sitesAll: Site[], query: ParsedUrlQuery) => {
  let data = getChildren0(sitesAll, query)
  return data
};

export const header = (sites: Site[]) => {
  
  return site(sites)!.data;
};