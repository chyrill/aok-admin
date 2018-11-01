<template>
    <div>
        <v-card>
            <div>
                <search-comp title="Shipment" />
            </div>
            <v-divider></v-divider>
            <div style="height: 88vh;"></div>
        </v-card>
    </div>
</template>

<script>
/* eslint-disable */
import SearchComp from "@/components/reusables/search";
export default {
  components: {
    "search-comp": SearchComp
  }
};
</script>

