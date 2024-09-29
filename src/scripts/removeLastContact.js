import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    const newContacts = allContacts.slice(0, -1);
    return writeContacts(newContacts);
  }
  catch (error) {
    console.log(error);
  }
};

removeLastContact();
