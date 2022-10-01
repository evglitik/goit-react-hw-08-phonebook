export const getVisibleContacts = (contacts, statusFilter) => {
  if (!statusFilter) {
    return contacts;
  }
  const normalizateName = statusFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizateName)
  );
};
