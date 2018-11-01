<template>
    <div>
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex xs3 class="pl-3 pt-3">
                    <span style="font-size:24px">{{title}}</span>
                </v-flex>
                <v-flex offset-xs5 xs4>
                    <v-text-field append-icon="search" label="Search"></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

