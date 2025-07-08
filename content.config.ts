import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
})

const commonProjectSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  release: z.string().nonempty(),
  date: z.string().nonempty(),
  featured: z.boolean().optional(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      title: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

export const collections = {
  content_bg: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'bg/**/*.md',
        exclude: ['bg/articles/*.md'],
        prefix: '/bg',
      },
      schema: commonContentSchema,
    }),
  ),
  // content_fr: defineCollection(
  //   asSeoCollection({
  //     type: 'page',
  //     source: {
  //       include: 'fr/**/*.md',
  //       exclude: ['fr/articles/*.md'],
  //       prefix: '/fr',
  //     },
  //     schema: commonContentSchema,
  //   }),
  // ),
  articles_bg: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'bg/articles/*.md',
        prefix: '/bg/articles',
      },
      schema: commonArticleSchema,
    }),
  ),
  // articles_fr: defineCollection(
  //   asSeoCollection({
  //     type: 'page',
  //     source: {
  //       include: 'fr/articles/*.md',
  //       prefix: '/fr/articles',
  //     },
  //     schema: commonArticleSchema,
  //   }),
  // ),
  projects_bg: defineCollection(
    asSeoCollection({
      type: 'data',
      source: 'bg/projects/*.json',
      schema: commonProjectSchema,
    }),
  ),
  // projects_fr: defineCollection(
  //   asSeoCollection({
  //     type: 'data',
  //     source: 'fr/projects/*.json',
  //     schema: commonProjectSchema,
  //   }),
  // ),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_bg: defineCollection({
    type: 'data',
    source: 'bg/faq.json',
    schema: commonFaqSchema,
  }),
  // faq_fr: defineCollection({
  //   type: 'data',
  //   source: 'fr/faq.json',
  //   schema: commonFaqSchema,
  // }),
}
