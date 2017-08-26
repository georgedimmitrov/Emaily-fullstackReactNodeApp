// eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    // filter for emails that fail the email regex because ReactForm wants the invalid fields
    .filter(email => emailRegex.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }

  return;
};
