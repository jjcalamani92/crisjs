import { DataNode } from "antd/lib/tree"
import { Children, ISite } from "../interfaces/site"

export const getDataTree = (sitesAll:ISite[]):DataNode[] => {
  let sites = sitesAll.map((data: ISite) => (
    {
      title: data.data.title,
      key: `/dashboard/sites/${data._id}`,
      children:
        data.route
        &&
        data.route.map((data0: Children) => (
          {
            title: data0.name,
            key: `/dashboard/sites/${data._id}/pages/${data0.href}`,
            children:
              data0.children
              &&
              data0.children.map((data1: Children) => (
                {
                  title: data1.name,
                  key: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}`,
                  children:
                    data1.children
                    &&
                    data1.children.map((data2: Children) => (
                      {
                        title: data2.name,
                        key: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}`,
                        children:
                          data2.children
                          &&
                          data2.children.map((data3: Children) => (
                            {
                              title: data3.name,
                              key: `/dashboard/sites/${data._id}/pages/${data0.href}/${data1.href}/${data2.href}/${data3.href}`,

                            }))


                      }
                    ))

                }
              ))

          }
        ))

    }
  ))
  return sites
}