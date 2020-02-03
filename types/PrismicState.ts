/* Prismic CMS blocks are stored by the prismic_uid field */
interface PrismicCmsBlock {
  [key: string]: any[]
}

/* Prismic CMS pages are stored by the prismic_uid field */
interface PrismicCmsPage {
  [key: string]: any[]
}

export interface PrismicState {
  prismicCmsBlocks: PrismicCmsBlock,
  prismicCmsPages: PrismicCmsPage
}
