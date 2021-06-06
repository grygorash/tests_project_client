import { mapKeys, mapValues, isPlainObject, camelCase, snakeCase, isArray } from 'lodash';


export default function deepMap(map) {
  const deeplyArray = function(obj, fn) {
    return obj.map(function(x) {
      return isPlainObject(x) ? deepMap(map)(x, fn) : x;
    });
  };

  return function(obj, fn) {
    if (isArray(obj)) {
      return deeplyArray(obj, fn);
    }

    return map(mapValues(obj, function(v) {
      // eslint-disable-next-line no-nested-ternary
      return isPlainObject(v) ? deepMap(map)(v, fn) : isArray(v) ? deeplyArray(v, fn) : v;
    }), fn);
  };
};

export const convertKeysToCamelCaseDeeply = (obj) => deepMap(mapKeys)(obj, (val, key) => camelCase(key));

export const convertKeysToSnakeCaseDeeply = (obj) => deepMap(mapKeys)(obj, (val, key) => snakeCase(key));
