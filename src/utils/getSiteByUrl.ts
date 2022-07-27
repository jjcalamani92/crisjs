import { Children, ISite, SiteForm } from "../interfaces/site";
import { ParsedUrlQuery } from 'querystring';

export const getSite = (sitesAll: ISite[], { slug }: ParsedUrlQuery| any): ISite => {
  const site = sitesAll.filter(
    (data: { _id: string }) => data._id === slug[2])[0];
    return site
}

export const getSiteDataForm = (
  sitesAll: ISite[],
  { slug }: ParsedUrlQuery | any
): SiteForm => {

  let data: SiteForm;
  if (slug[slug.length - 1] === "new") {
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
    const site = getSite(sitesAll, {slug})
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


export const getSiteChildren = (sitesAll: ISite[], { slug }: ParsedUrlQuery| any):Children[] => {
  return getSite(sitesAll, {slug}).route
}

export const getSiteChildren1 = (sitesAll: ISite[], asPath: string):Children[] => {
  return getSiteChildren(sitesAll, asPath)
}

export const getPathBySite = (site: ISite) => {
  let path = site.route.map((data0: Children) => [
    {
      asPath: data0.href === "home" ? '/' : `${data0.href}`,
    },
    data0.children &&
      data0.children.map((data1: Children) => [
        {
          asPath: `${data0.href}/${data1.href}`,
        },
        data1.children &&
          data1.children.map((data2: Children) => [
            {
              asPath: `${data0.href}/${data1.href}/${data2.href}`,
          },
          data2.children &&
          data2.children.map((data3: Children) => (
            {
              asPath: `${data0.href}/${data1.href}/${data2.href}//${data3.href}`,
          }),
          
        ),
        ]),
      ]),
  ]);
  return path.flat(10).filter((data: any) => data !== null).filter((data:any) => !Array.isArray(data))
};
export const getPathBySites = (sitesAll: ISite[]) => {
  let pathsAll = sitesAll.map((data: ISite) => (
    [
      {
        asPath: `/dashboard/sites/new`
      },
      {
        asPath: `/dashboard/sites/${data._id}`
      },
      data.route
        &&
        data.route.map((data0: Children) => (
          [
            {
              asPath: `/dashboard/sites/${data._id}/pages/new`
            },
            {
              asPath: `/dashboard/sites/${data._id}/pages/${data0.href}`
            },
            data0.children
              &&
              data0.children.map((data1: Children) => (
                [
                  {
                    asPath: `/dashboard/sites/${data._id}/pages/${data0.href}/new`
                  },
                  {
                    asPath: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`
                  },
                  data1.children
                    &&
                    data1.children.map((data2: Children) => (
                      [{
                        asPath: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`
                      },
                      {
                        asPath: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`
                      }]
                    ))
                    
                ]
              ))
             
          ]
        ))
    ]
  ))
  const data = pathsAll.flat(10).map((data: { asPath: string }) => data).filter((data: { asPath: string }) => data !== null)

    return [... new Set(data.map((data: { asPath: string }) => data.asPath))].map((data: string) => ({asPath: data}))
};


