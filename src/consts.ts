export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'ampere_exe',
  DESCRIPTION:
    'ampere_exe is a blog where you can discover new things!',
  EMAIL: 'jason@enscribe.dev',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 1,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/projects', label: 'projects' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/jktrn', label: 'GitHub' },
  { href: 'https://twitter.com/enscry', label: 'Twitter' },
  { href: 'jason@enscribe.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
