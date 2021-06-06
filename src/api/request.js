import { replaceUrlParams } from 'utils/replaceUrlParams';
import { engineAPI } from 'api/axiosClient';


const catchError = (error) => {
  let errorMessage;

  if (error.response && error.response.data) {
    errorMessage = error.response.data;
  } else {
    errorMessage = error.message;
  }

  return { success: false, error: errorMessage };
};

export const request = ({
  url,
  method = 'get',
  data,
  params,
  search,
  // config = {}
}) => {
  const requestUri = replaceUrlParams(url, params, search);

  return engineAPI[method](requestUri, data)
    .then((response) => response.response
      ? response.response?.data || response
      : response?.data || response)
    .catch(catchError);
};
