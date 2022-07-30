import { Children, ChildrenForm, ISite, SiteForm } from "../interfaces/site";
import { getQuery } from "./function";

export const getSite = (sitesAll: ISite[], asPath: string): ISite => {
  const slug = getQuery(asPath)
  const site = sitesAll.filter(
    (data: { _id: string }) => data._id === slug[2])[0];
    return site
}

export const getSiteDataForm = (
  sitesAll: ISite[],
  asPath: string
): SiteForm => {
  const slug = getQuery(asPath)

  let data: SiteForm;
  if (slug[3] === "new") {
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
    const site = getSite(sitesAll, asPath)
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

export const getChildren0DataForm = (
  sitesAll: ISite[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath)

  let data: ChildrenForm;
  if (slug[4] === "new") {
    data = {
      name: "dominio",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "nan",
      description: "description",

    };
  } else {
    const site = getSiteChildren0(sitesAll, asPath).filter((data:Children) => data.href === slug[4])[0]
    data = {
      uid: site.uid,
      name: site.name,
      imageSrc: site.imageSrc,
      imageAlt: site.imageAlt,
      description: site.description,
    };
  }
  return data;
};
export const getChildren1DataForm = (
  sitesAll: ISite[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath)

  let data: ChildrenForm;
  if (slug[5] === "new") {
    data = {
      name: "dominio",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "nan",
      description: "description",

    };
  } else {
    const site = getSiteChildren1(sitesAll, asPath).filter((data:Children) => data.href === slug[5])[0]
    data = {
      uid: site.uid,
      name: site.name,
      imageSrc: site.imageSrc,
      imageAlt: site.imageAlt,
      description: site.description,
    };
  }
  return data;
};
export const getChildren2DataForm = (
  sitesAll: ISite[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath)

  let data: ChildrenForm;
  if (slug[6] === "new") {
    data = {
      name: "dominio",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "nan",
      description: "description",

    };
  } else {
    const site = getSiteChildren2(sitesAll, asPath).filter((data:Children) => data.href === slug[6])[0]
    data = {
      uid: site.uid,
      name: site.name,
      imageSrc: site.imageSrc,
      imageAlt: site.imageAlt,
      description: site.description,
    };
  }
  return data;
};


export const getSiteChildren0 = (sitesAll: ISite[], asPath: string):Children[] => {
  return getSite(sitesAll, asPath).route
}
export const getSiteChildren1 = (sitesAll: ISite[], asPath: string):Children[] => {
  const slug = getQuery(asPath)
  return getSiteChildren0(sitesAll, asPath).filter((data:Children) => data.href === slug[4])[0].children
}
export const getSiteChildren2 = (sitesAll: ISite[], asPath: string):Children[] => {
  const slug = getQuery(asPath)
  return getSiteChildren1(sitesAll, asPath).filter((data:Children) => data.href === slug[5])[0].children
}
export const getSiteChildren3 = (sitesAll: ISite[], asPath: string):Children[] => {
  const slug = getQuery(asPath)
  return getSiteChildren2(sitesAll, asPath).filter((data:Children) => data.href === slug[6])[0].children
}


export const getSiteDS = (sitesAll: ISite[]):string[] => {
  return [...sitesAll.map((data:ISite) => `/dashboard/sites/${data._id}`), '/dashboard/sites/new']
}
export const getSiteDSP = (sitesAll: ISite[]):string[] => {
  return sitesAll.map((data:ISite) => `/dashboard/sites/${data._id}/pages`)
}

export const getSiteDSPC0 = (sitesAll: ISite[]) => {
  const data = sitesAll.map((data:ISite) => data.route.map((data0:Children) => [`/dashboard/sites/${data._id}/pages/${data0.href}`, `/dashboard/sites/${data._id}/pages/new`]) ).flat(2)
  return [... new Set(data.map((data: string) => data))].map((data: string) => (data))
}

export const getSiteDSPC1 = (sitesAll: ISite[]) => {
  let data = sitesAll.map((data:ISite) => data.route.map((data0:Children) => data0.children && data0.children.map((data1:Children) => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/new`]))).flat(3).filter((data: any) => data !== null)
  return [... new Set(data.map((data: string) => data))].map((data: string) => (data))
}
export const getSiteDSPC2 = (sitesAll: ISite[]) => {
  let data = sitesAll.map((data:ISite) => data.route.map((data0:Children) => data0.children && data0.children.map((data1:Children) => data1.children && data1.children.map((data2:Children) => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`])))).flat(4).filter((data: any) => data !== null)
  return [... new Set(data.map((data: string) => data))].map((data: string) => (data))
}

// export const getSiteDS1 = (sitesAll: ISite[], { slug }: ParsedUrlQuery| any):string[] => {
//   return [...sitesAll.map((data:ISite) => `/dashboard/sites/${data._id}`), '/dashboard/sites/new']
// }



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


