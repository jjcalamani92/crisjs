import { ParsedUrlQuery } from "querystring";
import { ChildrenForm, Data, Site, SiteForm } from "../interfaces/site";
import { getQuery, slug } from './function';

export const site = (sitesAll: Site[]) => {
  return sitesAll.find((data) => data._id === process.env.API_SITE);
};
export const seo = (sitesAll: Site[], query: ParsedUrlQuery) => {
  let data = getChildren00(sitesAll, query)
  // if (query.slug) {
  //   return 'hola'
  // } else {
  //   data = getChildren00(sitesAll, query)
  // } 
  return data
};
export const getPathsChildren0 = (sitesAll: Site[], asPath: string) => {
  
  return getChildrens00(sitesAll).map(data => data.href ==='home' ? '/' : `/${data.href}`).find(data => data === asPath)
}
export const getPathsChildren1 = (sitesAll: Site[], asPath: string) => {
  
  return getChildrens00(sitesAll).map(data => data.children.map(data1 =>  data.href ==='home' ? '/' : `/${data.href}/${data1.href}`)).flat(1).find(data => data === asPath)

}
export const getChildrens00 = (sitesAll: Site[]) => {
  return site(sitesAll)!.route;
};
export const getChildren00 = (sitesAll: Site[], query: ParsedUrlQuery) => {
  return getChildrens00(sitesAll)!.find((data) =>
  query.slug ? data.href === query.slug[0] : data.href === "home"
  );
};
export const getChildrens11 = (sitesAll: Site[], query: ParsedUrlQuery) => {
  return getChildren00(sitesAll, query)!.children;
};
export const getChildren11 = (sitesAll: Site[], query: ParsedUrlQuery) => {
  return getChildrens11(sitesAll, query)!.find((data) => data.href === query.slug![1]);
};

export const header = (sitesAll: Site[]) => {
  const { location, ...datas } = site(sitesAll)!.data;
  return datas;
};

export const getSite = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);
  return sitesAll.find((data) => data._id === slug[2]);
};
export const getSites = (sitesAll: Site[]) => {
  return sitesAll;
};

export const getPathSites = (sitesAll: Site[]) => {
  return getSites(sitesAll).map((data) => `/dashboard/sites/${data._id}`);
};

export const getPathsSites = (sitesAll: Site[], asPath: string) => {
  return [
    ...getSites(sitesAll).map((data) => `/dashboard/sites/${data._id}`),
    `/dashboard/sites/new`,
  ].find((data) => data === asPath);
};

export const getPathChildrens0 = (sitesAll: Site[]) => {
  return getSites(sitesAll)
    .map((data) =>
      data.route.map(
        (data0) => `/dashboard/sites/${data._id}/pages/${data0.href}`
      )
    )
    .flat(1);
};

export const getPathsChildrens0 = (sitesAll: Site[], asPath: string) => {
  return getSites(sitesAll)
    .map((data) => [
      ...data.route.map(
        (data0) => `/dashboard/sites/${data._id}/pages/${data0.href}`
      ),
      `/dashboard/sites/${data._id}/pages/new`,
    ])
    .flat(1)
    .find((data) => data === asPath);
};

export const getPathsChildrens1 = (sitesAll: Site[], asPath: string) => {
  return getSites(sitesAll)
    .map((data) =>
      data.route.map((data0) => [
        ...data0.children.map(
          (data1) =>
            `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`
        ),
        `/dashboard/sites/${data._id}/pages/${data0.href}/new`,
      ])
    )
    .flat(2)
    .find((data) => data === asPath);
};
export const getPathsChildrens2 = (sitesAll: Site[], asPath: string) => {
  return getSites(sitesAll)
    .map((data) =>
      data.route.map((data0) =>
        data0.children.map((data1) => [
          ...data1.children.map(
            (data2) =>
              `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`
          ),
          `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`,
        ])
      )
    )
    .flat(3)
    .find((data) => data === asPath);
};

export const getChildrens0 = (sitesAll: Site[]) => {
  return getSites(sitesAll)
    .map((data) => data.route)
    .flat(1);
};
export const getChildrens1 = (sitesAll: Site[]) => {
  return getChildrens0(sitesAll)
    .map((data) => data.children)
    .flat(1);
};
export const getChildrens2 = (sitesAll: Site[]) => {
  return getChildrens1(sitesAll)
    .map((data) => data.children)
    .flat(1);
};

export const getSiteChildrens0 = (sitesAll: Site[], asPath: string) => {
  return getSite(sitesAll, asPath)!.route;
};
export const getSiteChildren0 = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);
  return getSiteChildrens0(sitesAll, asPath).find(
    (data) => data.href === slug[4]
  );
};

export const getSiteChildrens1 = (sitesAll: Site[], asPath: string) => {
  return getSiteChildren0(sitesAll, asPath)!.children;
};
export const getSiteChildren1 = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);
  return getSiteChildrens1(sitesAll, asPath).find(
    (data) => data.href === slug[5]
  );
};

export const getSiteChildrens2 = (sitesAll: Site[], asPath: string) => {
  return getSiteChildren1(sitesAll, asPath)!.children;
};
export const getSiteChildren2 = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);
  return getSiteChildrens2(sitesAll, asPath).find(
    (data) => data.href === slug[6]
  );
};

export const getSiteChildrens3 = (sitesAll: Site[], asPath: string) => {
  return getSiteChildren2(sitesAll, asPath)!.children;
};
export const getSiteChildren3 = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);
  return getSiteChildrens3(sitesAll, asPath).find(
    (data) => data.href === slug[7]
  );
};

//TODO: paths
export const getSiteDS = (sitesAll: Site[], asPath: string) => {
  return [
    ...sitesAll.map((data) => `/dashboard/sites/${data._id}`),
    "/dashboard/sites/new",
  ].find((data) => data === asPath)!;
};

export const getSiteDSP = (sitesAll: Site[], asPath: string) => {
  return sitesAll
    .map((data) => `/dashboard/sites/${data._id}/pages`)
    .find((data) => data === asPath);
};

// export const getSiteDSPC0 = (sitesAll: Site[], asPath:string) => {
//   const data = sitesAll.map(data => data.route.map(data0 => [`/dashboard/sites/${data._id}/pages/${data0.href}`, `/dashboard/sites/${data._id}/pages/new`]) ).flat(2)
//   return [... new Set(data.map(data => data))].map(data => data).find(data => data === asPath)
// }
// export const getSiteDSPC00 = (sitesAll: Site[], asPath:string) => {
//   const data = sitesAll.map(data => data.route.map(data0 => [`/dashboard/sites/${data._id}/pages/${data0.href}`, `/dashboard/sites/${data._id}/pages/new`]) ).flat(2)
//   return [... new Set(data.map(data => data))]
// }

// export const getSiteDSPC1 = (sitesAll: Site[], asPath:string) => {
//   let data = sitesAll.map(data => data.route.map(data0 => data0.children && data0.children.map(data1 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/new`]))).flat(3).filter(data => data !== null)
//   return [... new Set(data.map(data => data))].map(data => (data)).find(data => data === asPath)
// }
// export const getSiteDSPC11 = (sitesAll: Site[], asPath:string) => {
//   let data = sitesAll.map(data => data.route.map( data0 => data0.children.map(data1 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/new`]))).flat(3)
//   return [... new Set(data.map(data => data))]
// }

// export const getSiteDSPC2 = (sitesAll: Site[], asPath:string) => {
//   let data = sitesAll.map(data => data.route.map(data0 => data0.children && data0.children.map(data1 => data1.children && data1.children.map(data2 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`])))).flat(4).filter(data => data !== null)
//   return [... new Set(data.map(data => data))].map(data => data).find(data => data === asPath)
// }
// export const getSiteDSPC22 = (sitesAll: Site[], asPath:string) => {
//   let data = sitesAll.map(data => data.route.map(data0 => data0.children && data0.children.map(data1 => data1.children && data1.children.map(data2 => [`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`,`/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/new`])))).flat(4).filter(data => data !== null)
//   return [... new Set(data.map(data => data))]
// }

//TODO: data forms

export const getSiteDataForm = (sitesAll: Site[], asPath: string) => {
  const slug = getQuery(asPath);

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
    const site = getSite(sitesAll, asPath);
    data = {
      title: site!.data.title,
      domain: site!.domain,
      logo: site!.data.logo,
      icon: site!.data.icon,
      imageSrc: site!.data.imageSrc,
      imageAlt: site!.data.imageAlt,
      numberPhone: site!.data.numberPhone,
      address: site!.data.address,
      location: site!.data.location!,
      description: site!.data.description,
      type: site!.type,
      client: site!.client,
    };
  }
  return data;
};
export const getChildren0DataForm = (
  sitesAll: Site[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath);

  let data: ChildrenForm;
  if (slug[4] === "new") {
    data = {
      name: "",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "image description",
      description: "description",
    };
  } else {
    const site = getSiteChildren0(sitesAll, asPath);
    data = {
      uid: site!.uid,
      name: site!.name,
      imageSrc: site!.imageSrc,
      imageAlt: site!.imageAlt,
      description: site!.description,
    };
  }
  return data;
};
export const getChildren1DataForm = (
  sitesAll: Site[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath);

  let data: ChildrenForm;
  if (slug[5] === "new") {
    data = {
      name: "",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "image description",
      description: "description",
    };
  } else {
    const site = getSiteChildren1(sitesAll, asPath);
    data = {
      uid: site!.uid,
      name: site!.name,
      imageSrc: site!.imageSrc,
      imageAlt: site!.imageAlt,
      description: site!.description,
    };
  }
  return data;
};
export const getChildren2DataForm = (
  sitesAll: Site[],
  asPath: string
): ChildrenForm => {
  const slug = getQuery(asPath);

  let data: ChildrenForm;
  if (slug[6] === "new") {
    data = {
      name: "",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "image description",
      description: "description",
    };
  } else {
    const site = getSiteChildren2(sitesAll, asPath);
    data = {
      uid: site!.uid,
      name: site!.name,
      imageSrc: site!.imageSrc,
      imageAlt: site!.imageAlt,
      description: site!.description,
    };
  }
  return data;
};
export const getPathsByChildren0 = (sites: Site[]) => {
  return sites
    .map((data) =>
      data.route.map((data0) => ({ id: data._id, children0: data0.href }))
    )
    .flat(1)
    .map((data) => ({ params: data }));
};
export const getPathsByChildren1 = (sites: Site[]) => {
  return sites
    .map((data) =>
      data.route.map((data0) =>
        data0.children.map((data1) => ({
          id: data._id,
          children0: data0.href,
          children1: data1.href,
        }))
      )
    )
    .flat(2)
    .map((data) => ({ params: data }));
};
export const getPathsByChildren2 = (sites: Site[]) => {
  return sites
    .map((data) =>
      data.route.map((data0) =>
        data0.children.map((data1) =>
          data1.children.map((data2) => ({
            id: data._id,
            children0: data0.href,
            children1: data1.href,
            children2: data2.href,
          }))
        )
      )
    )
    .flat(3)
    .map((data) => ({ params: data }));
};
