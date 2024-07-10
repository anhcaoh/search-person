import { IPerson } from "../hooks/usePerson";

export const suffixes = ["jr.", "sr.", "ii", "iii", "iv", "v"];
export const titles = ["mr.", "mrs.", "ms.", "sir.", "dr."];
export const hasNameSuffixTitle = (name: string) => {
  let names = name?.split(" ");
  // suffix
  let hasSuffix = false;
  let suffix = "";
  let suffixIndex = -1;
  suffixes?.forEach((_suffix) => {
    const index = name.toLowerCase().split(" ").indexOf(_suffix);
    if (index > -1) {
      hasSuffix = true;
      suffix = name.split(" ")[index];
      suffixIndex = index;
      names.splice(index, 1);
    }
  });
  // title
  let hasTitle = false;
  let title = "";
  let titleIndex = -1;
  titles?.forEach((_title) => {
    const index = name.toLowerCase().split(" ").indexOf(_title);
    if (index > -1) {
      hasTitle = true;
      title = name.split(" ")[index];
      titleIndex = index;
      names.splice(index, 1);
    }
  });
  return { hasSuffix, suffix, hasTitle, title, names };
};
const toSortedName = (list: IPerson[]) => {
  return list.toSorted((a, b) => {
    const { names: aNames } = hasNameSuffixTitle(a.name);
    const { names: bNames } = hasNameSuffixTitle(b.name);
    const lastNameItem = aNames[1].toLowerCase();
    const lastNamePrev = bNames[1].toLowerCase();
    if (lastNameItem < lastNamePrev) return -1;
    if (lastNameItem > lastNamePrev) return 1;
    return 0;
  });
};
export const toFullname = (name: string) => {
  // {Last Name} {Suffix}, {First Name} (Title).
  let fullname = "";
  const { hasSuffix, suffix, hasTitle, title, names } =
    hasNameSuffixTitle(name);
  const firstName = names[0];
  const lastName = names[1];
  // handle name maybe with suffix
  if (hasSuffix) {
    // e.g. ["Nicholas","Runolfsdottir","V"]
    const maybeTitle = hasTitle ? `(${title})` : "";
    fullname = `${lastName ?? ""} ${suffix}, ${firstName ?? ""} ${maybeTitle}`;
  }
  // handle name maybe with title
  if (hasTitle) {
    // e.g ["Mrs.", "Dennis", "Schulist"]
    fullname = `${lastName ?? ""}, ${firstName ?? ""} (${title})`;
  }
  // handle name without suffix nor title
  return fullname ? fullname : `${names[1] ?? ""}, ${names[0] ?? ""}`; // e.g : ["Clementine", "Bauch"]
};
export default toSortedName;
