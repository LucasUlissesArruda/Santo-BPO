import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';

// Site de página única: as âncoras (#secao) não são URLs separadas para buscadores.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
