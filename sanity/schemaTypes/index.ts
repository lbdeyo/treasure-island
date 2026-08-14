import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { pageContentType } from './pageContentType'
import { pageTextType } from './pageTextType'
import { tourDateType } from './tourDateType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, pageContentType, pageTextType, tourDateType],
}
