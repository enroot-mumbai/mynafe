import { ParsedUrlQuery } from 'querystring';

const utmDataKeys = [
  'utm_source',
  'utm_campaign',
  'utm_medium',
  'utm_content',
  'utm_adset',
];

// converts passed object into query param string form and returns the same
// ignores value which contain [undefined], [null] or empty string ['']
export const convertObjectToQueryString = (obj: object): string => {
  const str = [];
  for (const p in obj)
    if (
      Object.prototype.hasOwnProperty.call(obj, p) &&
      obj[p] !== undefined &&
      obj[p] !== null &&
      obj[p] !== ''
    ) {
      if (p === 'filters') {
        obj[p].forEach((filter) => {
          if (filter.value) {
            str.push(`filters[${filter.key}]=${filter.value}`);
          }
        });
      } else str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }

  return str.join('&');
};

export const checkIfUTMDataExist = (query): boolean => {
  const isUtmDataPresent =
    query &&
    Boolean(
      utmDataKeys.filter((utmKey) => Object.keys(query).includes(utmKey)).length
    );

  return isUtmDataPresent;
};

export const getSerializeQueryIfUTMDataExist = (
  query: ParsedUrlQuery
): string => {
  if (checkIfUTMDataExist(query)) {
    return convertObjectToQueryString(query);
  }
  return '';
};

export const getUTMDataFromQuery = (query: ParsedUrlQuery): object => {
  const utmData = {};
  if (query) {
    for (const utmKey of utmDataKeys) {
      if (query.hasOwnProperty(utmKey)) {
        utmData[`${utmKey}`] = query[`${utmKey}`];
      }
    }
  }
  return utmData;
};
