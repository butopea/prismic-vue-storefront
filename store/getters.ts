import { PrismicState } from '../types/PrismicState'
import { GetterTree } from 'vuex';

export const getters: GetterTree<PrismicState, any> = {
  getPrismicCmsBlocks: state => state.prismicCmsBlocks,
  getPrismicCmsBlock: state => key => state.prismicCmsBlocks[key],
  getPrismicCmsPage: state => key => state.prismicCmsPages[key]
}
