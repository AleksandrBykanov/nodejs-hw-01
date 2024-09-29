import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    const count = allContacts.length;
    return count;
  }
  catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
