import { DefaultFilter } from '@/app/(components)/filters/types'

export interface ItemLookupFilters {
  categories: string[] | [DefaultFilter]
  collections: string[] | [DefaultFilter]
  releases: string[] | [DefaultFilter]
  searchText: string
}

/** The keys used in the URL for the filters */
export const ITEM_FILTER_KEYS = {
  CATEGORIES: 'categories',
  COLLECTIONS: 'collections',
  RELEASES: 'releases',
  SEARCHTEXT: 'searchText',
} as const satisfies Record<string, keyof ItemLookupFilters>
