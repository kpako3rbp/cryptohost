import {transliterate} from 'transliteration';

export default {
  name: 'category',
  title: '📋 Категории постов',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'ID',
      description: 'Обязательно нужно сгенерировать.',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => transliterate(input.replace(/[^a-zA-Zа-яА-Я\s]/g, '')).toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
