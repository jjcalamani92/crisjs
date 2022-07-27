import { Children, Content, ISite } from "../interfaces/site";

export const getSiteByVne = (sitesAll: ISite[]): ISite => {
  let site = sitesAll.filter(
    (data: { _id: string }) => data._id === process.env.API_SITE
  );
  return site[0];
};
export const getContentPage = (sitesAll: ISite[], asPath: string):Content => {
  return getSiteByVne(sitesAll).route.filter((data:Children) => data.href === asPath)[0].content

}

export const getPathsBySite = (site: ISite) => {
  let path = site.route.map((data0: Children) => [
    {
      slug: data0.href === "home" ? [] : [data0.href],
    },
    data0.children &&
      data0.children.map((data1: Children) => [
        {
          slug: [data0.href, data1.href],
        },
        data1.children &&
          data1.children.map((data2: Children) => [
            {
            slug: [data0.href, data1.href, data2.href],
          },
          data2.children &&
          data2.children.map((data3: Children) => (
            {
            slug: [data0.href, data1.href, data2.href, data3.href],
          }),
          
        ),
        ]),
      ]),
  ]);
  return path.flat(10).filter((data: any) => data !== null).filter((data:any) => !Array.isArray(data)).map((data: any) => ({params: data}));
};

// export const getPathsBySite = (sitesAll: ISite[]) => {
//   let path =  getSiteByVne(sitesAll).route.map((data0: Children) => [
//     {
//       slug: data0.href === "home" ? [] : [data0.href],
//     },
//     data0.children &&
//       data0.children.map((data1: Children) => [
//         {
//           slug: [data0.href, data1.href],
//         },
//         data1.children &&
//           data1.children.map((data2: Children) => [
//             {
//             slug: [data0.href, data1.href, data2.href],
//           },
//           data2.children &&
//           data2.children.map((data3: Children) => (
//             {
//             slug: [data0.href, data1.href, data2.href, data3.href],
//           }),
          
//         ),
//         ]),
//       ]),
//   ]);
//   return path.flat(10).filter((data: any) => data !== null).filter((data:any) => !Array.isArray(data)).map((data: any) => ({params: data}));
// };

// export const getDataPaths = (sitesAll:ISite[]) => {
//   let pathsAll = sitesAll.map((data: ISite) => (
//     [
//       {
//         asPath: `/dashboard/sites/${data.domain}`
//       },
//       data.route
//         &&
//         data.route.map((data0: Children) => (
//           [
//             {
//               asPath: `/dashboard/sites/${data.domain}/${data0.href}`
//             },
//             data0.children
//               &&
//               data0.children.map((data1: Children) => (
//                 [
//                   {
//                     asPath: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}`
//                   },
//                   data1.children
//                     &&
//                     data1.children.map((data2: Children) => (
//                       {
//                         asPath: `/dashboard/sites/${data.domain}/${data0.href}/${data1.href}/${data2.href}`
//                       }
//                     ))
                    
//                 ]
//               ))
             
//           ]
//         ))
        
//     ]
//   ))
//   return pathsAll.flat(10).map((data: { asPath: string }) => data).filter((data: { asPath: string }) => data !== null)
// }