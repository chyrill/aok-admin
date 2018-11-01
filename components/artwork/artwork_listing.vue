<template>
    <div class="listing">
      <artwork-item />        
    </div>
</template>


<script>
/* eslint-disable */
import ArtworkItemComp from "@/components/artwork/artwork_item";

export default {
  components: {
    "artwork-item": ArtworkItemComp
  }
};
</script>


<style scoped>
.listing {
  height: 100%;
  overflow-y: auto;
}
</style>

