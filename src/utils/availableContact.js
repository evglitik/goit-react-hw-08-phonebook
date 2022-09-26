export const availableContact = (contacts, contact) => {
  const nameNormalize = contact.toLowerCase();
  const findName = contacts.filter(
    el => nameNormalize === el.name.toLowerCase()
  );

  return findName.length === 0 ? null : contact;
};
