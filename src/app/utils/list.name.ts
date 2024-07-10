import { IListOption } from "./list.options";

export const suffixes = ["jr.", "sr.", "ii", "iii", "iv", "v"];
export const titles = ["mr.", "mrs.", "ms.", "sir.", "dr."];
export const hasNameSuffixTitle = (name: string, list: string[]) => {
  let hasSuffix = false;
  let nameSuffix = "";
  let suffixIndex = -1;
  list?.forEach((suffix) => {
    const index = name.toLowerCase().split(" ").indexOf(suffix);
    if (index > -1) {
      hasSuffix = true;
      nameSuffix = name.split(" ")[index];
      suffixIndex = index;
    }
  });
  return [hasSuffix, nameSuffix, suffixIndex];
};
const toSortedName = (list: IListOption[]) => {
  return list.toSorted((a, b) => {
    // const maybeNameSuffix = hasNameSuffixTitle(a.name, suffixes);
    // const maybeNameTitle = hasNameSuffixTitle(a.name, titles);
    const lastNameItem = a.name?.split(" ")[1].toLowerCase();
    const lastNamePrev = b.name?.split(" ")[1].toLowerCase();
    if (lastNameItem < lastNamePrev) return -1;
    if (lastNameItem > lastNamePrev) return 1;
    return 0;
  });
};
export const toFullname = (name: string) => {
  // {Last Name} {Suffix}, {First Name} (Title).
  let fullname = "";
  const maybeNameSuffix = hasNameSuffixTitle(name, suffixes);
  const maybeNameTitle = hasNameSuffixTitle(name, titles);
  const names = name.split(" ");

  // handle name maybe with suffix
  if (maybeNameSuffix[0]) {
    // e.g. ["Nicholas","Runolfsdottir","V"]
    const firstName = names[0];
    const lastName = names[1];
    const suffixIndex = maybeNameSuffix[2] as number;
    const maybeTitle = maybeNameTitle[0]
      ? `(${names[maybeNameTitle[2] as number]})`
      : "";
    fullname = `${lastName ?? ""} ${names[suffixIndex]}, ${
      firstName ?? ""
    } ${maybeTitle}`;
  }

  // handle name maybe with title
  if (maybeNameTitle[0]) {
    // e.g ["Mrs.", "Dennis", "Schulist"]
    const firstName = names[1];
    const lastName = names[2];
    const titleIndex = maybeNameTitle[2] as number;
    fullname = `${lastName ?? ""}, ${firstName ?? ""} (${names[titleIndex]})`;
  }
  // handle name without suffix nor title
  return fullname ? fullname : `${names[1] ?? ""}, ${names[0] ?? ""}`; // e.g : ["Clementine", "Bauch"]
};
export default toSortedName;
