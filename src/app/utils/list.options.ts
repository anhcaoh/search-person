import { IPerson } from "../hooks/usePerson";
import toSortedName, { toFullname } from "./list.name";

export interface IListOption extends IPerson {
  label: string;
}
const toListOptions = (list: IPerson[]): IListOption[] => {
  if (!list) return list;
  return toSortedName(list)?.map((item) => ({
    ...item,
    label: toFullname(item.name),
    value: item.username,
  }));
};
export default toListOptions;
