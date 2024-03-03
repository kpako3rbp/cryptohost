export default {
  name: 'promoBanner',
  type: 'document',
  title: '🖼 Баннер на главной',
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
      title: '🗞 Заголовок баннера',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'description',
      type: 'text',
      title: '📃 Описание (коротко)',
      validation: (Rule) => Rule.required().max(80),
      group: 'content',
    },
    {
      name: 'image',
      type: 'image',
      title: '🖼 Обложка',
      validation: (Rule) => Rule.required(),
      group: 'content',
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
      type: 'string',
      title: '🔗 Slug',
      description:
        'Нужен для формирования ссылки, по которой пользователь перейдет, кликнув на кнопку на баннере. Если на баннере будет ссылка на внешний ресурс, это поле заполнять не нужно: заполните URL',
      group: 'content',
    },
    {
      name: 'url',
      type: 'url',
      title: '🔗 URL cсылка',
      description:
        'Если при клике на кнопку будет переход на сторонний ресурс, укажите тут ссылку',
      group: 'content',
    },
  ],
}
