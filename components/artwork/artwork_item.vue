<template>
    <div>
        <v-container fluid fill-height grid-list-md>
            <v-layout row wrap>
                <v-flex xs2>
                    <v-card width="95%" height="150px" class="grey lighten-3">
                        <v-container fluid fill-height justify-center style="padding: 0">
                            <img :src="artwork.pictures[0]" alt="">
                        </v-container>  
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <h2>{{artwork.title}}</h2>
                    <h2><amount-comp currency="$" :price="artwork.sellingPrice" /></h2>
                    <span class="subtitle">Created By: </span> <span class="textvalue">{{artwork.artist.fullName}}</span><br>
                    <span class="subtitle">Medium: </span> <span class="textvalue">{{artwork.medium}}</span> <br>
                    <span class="subtitle">{{artwork.pledge}}% to: </span> <span class="textvalue">{{artwork.charity.name}}</span> <br>
                    <span class="subtitle">Created on {{createdDate}}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
/* eslint-disable */
import { SerializeDateTime } from '@/helpers'
import AmountComp from '@/components/reusables/amount'

export default {
    props: {
        artwork: {
            type: Object
        }
    },
    computed: {
        createdDate () {
            return SerializeDateTime(this.artwork.dateCreated)
        }
    },
    components: {
        'amount-comp' : AmountComp
    }
}
</script>


<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.subtitle {
    color: gray
}
.textvalue {
    color: cyan;
}
</style>

