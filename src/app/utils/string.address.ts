import { IPerson } from "../hooks/usePerson";

const toAddressString = (address: IPerson["address"]): string => {
  const { street, suite, city, zipcode } = address;
  return `
    ${street}
    ${suite}
    ${city}
    ${zipcode}
    `;
};
export default toAddressString;
