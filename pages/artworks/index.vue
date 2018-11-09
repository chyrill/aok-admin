<template>
    <div>
        <v-card>
            <div>
                <search-comp title="Artworks"/>
            </div>
            <v-divider></v-divider>
            <div style="height: 80%">
                <selection-comp @selection="selection"/>
                <div class="pa-3">
                    <v-divider></v-divider>
                    <artwork-listing-comp  v-if="artworks.length > 0" :artworks="artworks"/>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
/* eslint-disable */
import SearchComp from "@/components/reusables/search";
import SelectionComp from "@/components/artwork/selection";
import ArtworkListingComp from "@/components/artwork/artwork_listing";
import GET_ARTWORKS from '@/graphql/artworks/getartworks'

export default {
    data: () => ({
        filter: {},
        artworks: [],
        show: false
    }),  
    components: {
    "search-comp": SearchComp,
    "selection-comp": SelectionComp,
    "artwork-listing-comp": ArtworkListingComp
    },
    methods: {
        selection (value) {
            if(value.filter !== '') {
               this.filter = { status: value.filter }
            } else {
                this.filter = {}
            } 
        }
    },
    apollo: {
        getartworks: {
            query: GET_ARTWORKS,
            variables () {
                return {
                    filter: JSON.stringify(this.filter),
                    sort: JSON.stringify({}),
                    limit: 5,
                    skip: 0
                }
            }
        }
    },
    watch: {
        getartworks: function (val) {
            if(val.Successful) {
                this.artworks = val.SearchItems
                this.show = true
            }
            this.show = false
        }
    }
}
</script>

