<template>
    <div>
        <v-container fluid fill-height>
            <v-layout row wrap>
                <v-flex xs6 class="pt-3">
                    <v-btn class="_btn" flat>All Artworks</v-btn>
                    <v-btn class="_btn" flat>For Sale</v-btn>
                    <v-btn class="_btn" flat>Sold</v-btn>
                </v-flex>
                <v-flex offset-xs4 xs2>
                    <v-select label="Sort By" append-icon="keyboard_arrow_down" box outline></v-select>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<style scoped>
._btn {
  border: 1.5px solid black;
  width: 160px;
  height: 35px;
  margin: 0;
}
</style>

