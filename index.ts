import { StorefrontModule } from '@vue-storefront/core/lib/modules'
import { module } from './store'

export const PrismicModule: StorefrontModule = function ({app, store}) {
  store.registerModule('prismic', module)
}
