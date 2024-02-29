export const encodeJSON = (jsonObject: Object): string => {
  return encodeURIComponent(JSON.stringify(jsonObject));
};
