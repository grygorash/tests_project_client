/**
 * Replace {param} to value
 * @param url
 * @param params
 * @param search
 * @returns {*}
 */
export function replaceUrlParams(url, params, search) {
  let replacedUrl = url;

  if (params) {
    Object.keys(params).forEach(function(paramName) {
      const param = params[paramName];

      if (param === null || param === undefined) {
        return;
      }

      replacedUrl = replacedUrl.replace('{'.concat(paramName, '}'), param);
    });
  }

  if (search) {
    const searchParams = new URLSearchParams();

    Object.keys(search).forEach(function(query) {
      const param = search[query];

      if (param === null || param === undefined) {
        return;
      }

      searchParams.append(query, param);
    });

    replacedUrl = `${replacedUrl}?${searchParams.toString()}`;
  }

  if (replacedUrl) {
    replacedUrl = replacedUrl.replace(/{[a-zA-Z]+}/gmi, '');

    while (replacedUrl.match(/(:|^)(\/\/.+?)\/\//)) {
      replacedUrl = replacedUrl.replace(/(:|^)(\/\/.+?)\/\//, '$1$2/');
    }
  }

  return replacedUrl;
}
