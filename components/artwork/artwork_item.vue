<template>
    <div>
        <v-container fluid fill-height grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2>
                    <v-card width="150px" height="150px" class="grey lighten-3">
                        <v-container fluid fill-height justify-center style="padding: 0">
                            <img src="/These-5-Yin-and-Yang-themed-artworks-enabled-me-to-make-a-living-as-an-artist-with-22-5846d9d32ef5d__880.jpg" alt="">
                        </v-container>  
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <h3>{{title}}</h3> <br>
                    <h3>{{price}}</h3>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>

