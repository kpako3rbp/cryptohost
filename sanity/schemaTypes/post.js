import {transliterate} from 'transliteration'

const textEditorStyles = [
  {title: 'Обычный текст', value: 'p'},
  {title: 'Заголовок большой', value: 'h2'},
  {title: 'Заголовок маленький', value: 'h3'},
  {title: 'Цитата', value: 'blockquote'},
]

export default {
  name: 'post',
  type: 'document',
  title: '📰 Новость',
  groups: [
    {
      name: 'content',
      title: 'Контент',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: '🌐 Мета-заголовок',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      title: '🗞 Заголовок',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'category',
      title: '📋 Категория',
      type: 'reference',
      to: [{type: 'category'}], // Ссылка на схему категорий
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'datetime',
      title: '🗓 Дата и время публикации',
      validation: (Rule) => Rule.required(),
      group: 'content',
      options: {
        dateFormat: 'DD MMM,',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    /*    {
      name: 'image',
      type: 'image',
      title: '🖼 Обложка новости',
      validation: (Rule) => Rule.required(),
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Название (например, banner)',
        },
      ],
    },*/

    {
      name: 'image',
      type: 'image',
      title: '🖼 Обложка',
      validation: (Rule) => Rule.required(),
      group: 'content',
      options: {
        metadata: ['location', 'palette'],
        storeOriginalFilename: false,
        maxWidth: 500, // Устанавливаем максимальную ширину в 1920 пикселей
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Название (например, banner)',
        },
      ],
    },

    {
      name: 'slug',
      type: 'slug',
      title: '🔗 Slug',
      description:
        'Slug - это короткое текстовое представление заголовка или имени, которое будет использоваться в URL новости. Сгенерируйте его.',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          transliterate(input.replace(/[^a-zA-Zа-яА-Я\s]/g, ''))
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      name: 'body',
      title: '📃 Текст поста',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: textEditorStyles,
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
