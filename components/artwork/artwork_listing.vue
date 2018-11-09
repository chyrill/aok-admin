<template>
    <div class="listing">
      <div v-for="(item, index) in artworks" :key="index">
        <artwork-item :artwork="item"/> 
        <v-divider></v-divider>
      </div>
    </div>
</template>


<script>
/* eslint-disable */
import ArtworkItemComp from "@/components/artwork/artwork_item";

export default {
  props: ['artworks'],
  components: {
    "artwork-item": ArtworkItemComp
  },
  mounted() {
    console.log(this.artworks)
  }
};
</script>


<style scoped>
.listing {
  height: 100%;
  overflow-y: auto;
}
</style>

