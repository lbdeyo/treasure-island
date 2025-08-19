import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { pageContentType } from './pageContentType'
import { pageTextType } from './pageTextType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, pageContentType, pageTextType],
}
