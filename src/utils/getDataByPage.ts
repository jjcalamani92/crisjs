import { Children, ISite } from "../interfaces/site";
import { useRouter } from 'next/router';
export const getDataByPage = (site: ISite, asPath: string) => {
  return site.route.filter((data:Children) => data.href === asPath)[0].content
}