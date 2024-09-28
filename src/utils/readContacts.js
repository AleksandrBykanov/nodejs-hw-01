import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const readContacts = async () => {
  try {
    const read = await fs.readFile(PATH_DB, "utf-8");
    const data = JSON.parse(read);
    return data;
  }
  catch (error) {
    console.log(error);
  }
};


