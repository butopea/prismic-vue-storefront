<template>
    <div>
        This text was written on Prismic: {{ exampleText }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Modify the query and computed property below to your liking.
// The data structure saved in ElasticSearch is exactly the same as the Prismic API response.
// Use the ElasticSearch Head extension for chrome to inspect the prismic endpoint for further information.

export default {
    name: 'ExampleBlockUsage',
    methods: {
        async fetchInfoBlocks () {
            await this.$store
                .dispatch('prismic/fetchPrismicCmsBlocks', {
                    query: [
                        // Tags are great for finding particular documents quickly
                        { key: 'prismic_type', value: {'eq': 'cms-block'} },
                        { key: 'prismic_tags', value: {'eq': 'example-page'} }
                    ]
                })
        }
    },
    async mounted () {
        // Client
        this.fetchInfoBlocks()
    },
    serverPrefetch () {
        // SSR
        return this.fetchInfoBlocks()
    },
    computed: {
        ...mapGetters({
            cmsBlocks: 'prismic/getPrismicCmsBlocks'
        }),
        exampleText() {
            // All of the matched blocks are stored in cmsBlocks
            if (this.cmsBlocks['example-page-1']) return this.cmsBlocks['example-page-1'].prismic_data.title[0].text
        }
    }
}
</script>