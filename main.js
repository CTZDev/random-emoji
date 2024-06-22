const getRandomEmoji = (emoji, nameEmoji, data) => {
  const $emoji = document.getElementById(emoji);
  const $nameEmoji = document.querySelector(nameEmoji);

  document.addEventListener('click', (e) => {
    if (e.target === $emoji) {
      const sizeData = data.length;
      const randomIndex = Math.floor(Math.random() * sizeData);
      const { character, unicodeName } = data[randomIndex];
      $emoji.textContent = character;
      $nameEmoji.textContent = unicodeName;
    }
  });

  if (data.length > 0) $emoji.style.cursor = 'pointer';
};

const getEmoji = async () => {
  try {
    const key = '5a47066d4183d8ccdb677788d8b19084b5745ae0';
    const URL = `https://emoji-api.com/emojis?access_key=${key}&limit=100`;
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Network response was not OK');
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Error: ', error);
    return [];
  }
};

document.addEventListener('DOMContentLoaded', async (e) => {
  const data = await getEmoji();
  getRandomEmoji('emoji', '.emoji-name', data);
});
