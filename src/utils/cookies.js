export const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
};

export const removeCookie = (name, domain) => {
  if (getCookie(name)) {
    document.cookie = `${name}=; ${domain ? `domain=${domain};` : ''} path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
};

export const setCookie = (name, value, path, hours, domain) => {
  removeCookie(name);
  let expires = '';

  if (hours) {
    const date = new Date();

    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = date.toUTCString();
  }

  document.cookie = `${name}=${(value || '')}; expires=${expires}; ${domain ? `;domain=${domain}` : ''} ;path=${path}`;
};
