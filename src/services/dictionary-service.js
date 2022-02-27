export const getMeaning = (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.word}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return { data: data };
    });
};
