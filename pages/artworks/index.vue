<template>
    <div>
        <v-card>
            <div>
                <search-comp title="Artworks"/>
            </div>
            <v-divider></v-divider>
            <div style="height: 88vh">
                <selection-comp />
                <div class="pa-3">
                    <v-divider></v-divider>
                    <artwork-listing-comp />
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

export default {
  components: {
    "search-comp": SearchComp,
    "selection-comp": SelectionComp,
    "artwork-listing-comp": ArtworkListingComp
  }
};
</script>

