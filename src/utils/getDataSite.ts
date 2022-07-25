import { DataNode } from "antd/lib/tree"
import { Children, ISite } from "../interfaces/site"

export const getDataSite = (sitesAll:ISite[]):ISite => {
  let site = sitesAll.filter((data: {_id: string}) => data._id === process.env.API_SITE)
  return site[0]
}