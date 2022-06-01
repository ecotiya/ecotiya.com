/** Java指定のパス */
export const ApiRoutesPath = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
};

/** Cookieに保存するキー情報 */
export const CookieKeys = {
  ACCESS_TOKEN: '_access_token',
  CLIENT: '_client',
  UID: '_uid',
};
