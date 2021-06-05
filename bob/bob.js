const isEmpty = message => message === '';
const isQuestion = message => message.endsWith('?');
const hasLetters = message => /[a-zA-Z]/.test(message);
const isYell = message => message === message.toUpperCase() && hasLetters(message);

export const hey = (message) => {
  message = message.trim();
  switch (true) {
    case isYell(message) && isQuestion(message):
      return 'Calm down, I know what I\'m doing!';
    case isYell(message):
      return 'Whoa, chill out!';
    case isQuestion(message):
      return 'Sure.'
    case isEmpty(message):
      return 'Fine. Be that way!';
    default:
      return 'Whatever.';
  }
};
