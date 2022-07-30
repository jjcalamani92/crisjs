import { ISite, SiteForm } from "../interfaces/site";
import { getQuery } from "./function";

export const getSite = (sitesAll: ISite[], asPath: string) => {
  const slug = getQuery(asPath)
    return sitesAll.find(data => data._id === slug[2])
}

export const getSiteChildren0 = (sitesAll: ISite[], asPath: string) => {
  return getSite(sitesAll, asPath)!.route
}
export const getSiteChildren1 = (sitesAll: ISite[], asPath: string) => {
  const slug = getQuery(asPath)
  return getSiteChildren0(sitesAll, asPath).find(data => data.href === slug[4])!.children
}
export const getSiteChildren2 = (sitesAll: ISite[], asPath: string) => {
  const slug = getQuery(asPath)
  return getSiteChildren1(sitesAll, asPath).find(data => data.href === slug[5])!.children
}
export const getSiteChildren3 = (sitesAll: ISite[], asPath: string) => {
  const slug = getQuery(asPath)
  return getSiteChildren2(sitesAll, asPath).find(data => data.href === slug[6])!.children
}




//TODO: paths
export const getSiteDS = (sitesAll: ISite[], asPath:string) => {
  return [...sitesAll.map(data => `/dashboard/sites/${data._id}`), '/dashboard/sites/new'].find(data => data === asPath)!
}

export const getSiteDSP = (sitesAll: ISite[], asPath:string) => {
  return sitesAll.map(data => `/dashboard/sites/${data._id}/pages`).find(data => data === asPath)
}

export const getSiteDSPC0 = (sitesAll: ISite[], asPath:string) => {
  const data = sitesAll.map(data => data.route.map(data0 => [`/dashboard/sites/${data._id}/pages/${data0.href}`, `/dashboard/sites/${data._id}/pages/new`]) ).flat(2)
  return [... new Set(data.map(data => data))].map(data => data).find(data => data === asPath)
}

export const getSiteDSPC1 = (sitesAll: ISite[], asPath:string) => {
  let data = sitesAll.map(data => data.route.map(data0 => data0.children && data0.children.map(data1 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/new`]))).flat(3).filter(data => data !== null)
  return [... new Set(data.map(data => data))].map(data => (data)).find(data => data === asPath)
}

export const getSiteDSPC2 = (sitesAll: ISite[], asPath:string) => {
  let data = sitesAll.map(data => data.route.map(data0 => data0.children && data0.children.map(data1 => data1.children && data1.children.map(data2 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`])))).flat(4).filter(data => data !== null)
  return [... new Set(data.map(data => data))].map(data => data).find(data => data === asPath)
}
//TODO: data forms

export const getSiteDataForm = (
  sitesAll: ISite[],
  asPath: string
)=> {
  const slug = getQuery(asPath)

  let data: SiteForm;
  if (slug[2] === "new") {
    data = {
      title: "academia eureka",
      domain: "academiaeureka.com",
      logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      icon: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "nan",
      numberPhone: 123456,
      address: "address",
      location: "location",
      description: "description",
      type: "",
      client: "",
    };
  } else {
    const site = getSite(sitesAll, asPath)
    data = {
      title: site!.data.title,
      domain: site!.domain,
      logo: site!.data.logo,
      icon: site!.data.icon,
      imageSrc: site!.data.imageSrc,
      imageAlt: site!.data.imageAlt,
      numberPhone: site!.data.numberPhone,
      address: site!.data.address,
      location: site!.data.location,
      description: site!.data.description,
      type: site!.type,
      client: site!.client,
    };
  }
  return data;
};