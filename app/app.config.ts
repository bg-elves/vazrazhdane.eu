export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/hugorcd/15min',
    available: true,
  },
  profile: {
    name: 'Костя Копейкин',
    job: 'Frontend Architect and Designer',
    email: 'contact@hrcd.fr',
    phone: '(+33) 6 21 56 22 18',
    picture: '/kostya.jpg',
  },
  socials: {
    github: 'https://github.com/HugoRCD',
    twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/hugo-richard-0801',
    instagram: 'https://www.instagram.com/hugo.rcd_',
    spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  seo: {
    title: 'Възраждане - Европа',
    description: 'Битката за Европа е последната битка за България!',
    url: 'https://vazrazhdane.eu',
    image: '/og.jpg',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
