<template>
   <div>
       <v-card>
           <div>
               <search-comp title="Sales"/>
           </div>
           <v-divider></v-divider>
            <div class="pa-4" style="height:88vh;">
                <v-card>
                    <data-comp />
                </v-card>
            </div>
       </v-card>
   </div>
</template>

<script>
/* eslint-disable */
import SearchComp from "@/components/reusables/search";
import DataTableComp from "@/components/sales/data_table";

export default {
  components: {
    "search-comp": SearchComp,
    "data-comp": DataTableComp
  }
};
</script>

