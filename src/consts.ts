import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'ampere_exe',
  description:
    'This is a blog page where I share my thoughts and you can learn about anything computers and strength training.',
  href: 'https://ampereexe.vercel.app/',
  author: 'ampere',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ampere-exe',
    label: 'GitHub',
  },
  {
    href: 'mailto:zuhair.emaz@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
