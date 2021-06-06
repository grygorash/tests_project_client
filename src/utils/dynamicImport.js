export const importRetry = (importer, retryCount = 3, retryTimeout = 400) => {
  let counter = 0;
  let timeoutId;

  const execute = (resolve, reject) => importer(retryCount, retryTimeout)
    .then(resolve)
    .catch((err) => {
      if (counter++ < retryCount) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => execute(resolve, reject), retryTimeout);
      } else {
        err.source = 'importRetry';
        reject(err);
      }
    });

  return new Promise(execute);
};
