export const extractPostDescription = (body, maxLength = 100) => {
  // Извлекаем текст из поля body
  const postText = body
    .map((block) => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child) => child.text).join('');
      } else {
        return ''; // Для изображений или других типов блоков, которые не содержат текста
      }
    })
    .join('');

  // Обрезаем текст до первых 100 символов
  return `${postText.substring(0, maxLength)}...`;
};
