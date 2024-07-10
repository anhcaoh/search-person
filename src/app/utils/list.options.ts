import toSortedName, { toFullname } from "./list.name";

export interface IListOption {
  id: number;
  name: string;
  label: string;
}
const toListOptions = (list: IListOption[]) => {
  if (!list) return list;
  return toSortedName(list)?.map((item) => ({
    ...item,
    label: toFullname(item.name),
  }));
};
export default toListOptions;
