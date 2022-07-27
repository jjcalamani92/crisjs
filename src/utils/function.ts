export function capitalizar(str:string) {
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function slug(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\u002F]/g, '')
    .replace(/-/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/-/g, '')
    .replace(/\s+/g, ' ')
    .replace(/ /g, '-');
}

export const getURL = (pathname: string) => {
	let url = pathname.split('/')
	url.length = url.length - 1
	return url.join('/')
}

export const getQuery = (asPath: string) => {
	return asPath.slice(1).split('/')
}