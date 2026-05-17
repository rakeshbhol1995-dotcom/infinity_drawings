import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://infinitylightdrawings.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/work',
        '/contact',
        '/clients',
        '/collaboration',
        '/compliance',
        '/news',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
