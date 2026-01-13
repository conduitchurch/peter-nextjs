export default function sitemap() {
  return [
    {
      url: 'https://theconduit.church',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://theconduit.church/about',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://theconduit.church/beliefs',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://theconduit.church/events',
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: 'https://theconduit.church/give',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://theconduit.church/next-steps',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://theconduit.church/pray',
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: 'https://theconduit.church/visit',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
  ]
}