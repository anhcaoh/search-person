const toListOptions = (list: object[]) => {
  if (!list) return list;
  return list?.map((item) => ({ ...item, label: (item as any).name }));
};
export default toListOptions;
