import { PrismicState } from '../types/PrismicState'
import { ActionTree } from 'vuex'
import * as types from './mutation-types'
import config from 'config'
import { processURLAddress } from '@vue-storefront/core/helpers'
import { Logger } from '@vue-storefront/core/lib/logger'
import SearchQuery from '@vue-storefront/core/lib/search/searchQuery'
import { quickSearchByQuery } from '@vue-storefront/core/lib/search'

export const actions: ActionTree<PrismicState, any> = {
  async fetchPrismicCmsBlocks ({ commit, state }, { query }) {
    try {
      let prismicCmsBlocksQuery = new SearchQuery()

      if (query.length) {
        query.forEach(function (queryItem) {
          prismicCmsBlocksQuery.applyFilter(queryItem)
        })
      }

      const response = await quickSearchByQuery({
        query: prismicCmsBlocksQuery,
        entityType: 'prismic'
      })

      if (response.items.length) {
        response.items.forEach(function (prismicCmsBlock) {
          if (prismicCmsBlock.prismic_uid) {
            commit(types.SET_PRISMIC_CMS_BLOCK, {
              prismicUid: prismicCmsBlock.prismic_uid,
              data: prismicCmsBlock
            })
          }
        })
      }
    } catch (err) {
      Logger.error(err, 'prismic')()
      return false
    }
  }
}
