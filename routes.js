const apiPath = '/';

export default {
  newsPath: () => [apiPath, 'news'].join('/'),
  activitiesPath: () => [apiPath, 'activities'].join('/'),
};
