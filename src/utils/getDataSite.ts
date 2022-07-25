import { DataNode } from "antd/lib/tree";
import { Children, ISite, SiteForm } from "../interfaces/site";

export const getDataSite = (sitesAll: ISite[]): ISite => {
  let site = sitesAll.filter(
    (data: { _id: string }) => data._id === process.env.API_SITE
  );
  return site[0];
};
export const getDataSiteForm = (
  sitesAll: ISite[],
  asPath: string
): SiteForm => {
  let siteData = sitesAll.filter(
    (data: { _id: string }) => data._id === "62deb476f1afee95082d97c4")[0];
  console.log(siteData);
  
  const url = asPath.split("/");
  // let site = getDataSite(sitesAll);
  // console.log(url[url.length - 1]);
  let data: SiteForm;
  if (url[url.length - 1] === "new") {
    data = {
      title: "dominio",
      domain: "dominio.com",
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
    const site = sitesAll.filter(
      (data: { _id: string }) => data._id === url[url.length - 1])[0];
    data = {
      title: site.data.title,
      domain: site.domain,
      logo: site.data.logo,
      icon: site.data.icon,
      imageSrc: site.data.imageSrc,
      imageAlt: site.data.imageAlt,
      numberPhone: site.data.numberPhone,
      address: site.data.address,
      location: site.data.location,
      description: site.data.description,
      type: site.type,
      client: site.client,
    };
  }
  return data;
};
