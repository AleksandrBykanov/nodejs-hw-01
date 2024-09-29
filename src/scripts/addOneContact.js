import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const oldContacts = await readContacts();
    const newContacts = [createFakeContact()];
    const updatedContacts = [...oldContacts, ...newContacts];
    await writeContacts(updatedContacts);
  }
  catch (error) {
    console.log(error);
  }
};

addOneContact();
