import { isArray } from "util";
import { Children, ISite } from "../interfaces/site";

export const getPathsBySite = (site: ISite) => {
  let path = site.route.map((data0: Children) => [
    {
      slug: data0.href === "/" ? [] : [data0.href],
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
