<template>
    <div>
        <v-container fluid fill-height style="padding-bottom: 0;">
            <v-layout row wrap>
                <v-flex xs6 class="pt-3">
                    <v-btn class="_btn" :dark="selectdata === 1" :color="selectdata === 1 ? 'black': ''" :outline="selectdata !== 1" @click="selectdata = 1">All Artworks</v-btn>
                    <v-btn class="_btn" :dark="selectdata === 2" :color="selectdata === 1 ? 'black': ''" :outline="selectdata !== 2" @click="selectdata = 2">For Sale</v-btn>
                    <v-btn class="_btn" :dark="selectdata === 3" :color="selectdata === 1 ? 'black': ''" :outline="selectdata !== 3" @click="selectdata = 3">Sold</v-btn>
                </v-flex>
                <v-flex offset-xs4 xs2>
                    <v-select label="Sort By" style="height: 50px;border: 1px solid black" append-icon="keyboard_arrow_down" v-model="sortvalue" :items="sortBy" item-text="text" item-value="value" solo flat   clearable></v-select>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: () => ({
        selectdata: 1,
        selectvalue: '',
        sortBy: [
            {
                text: 'Title',
                value: 'title'
            },
            {
                text: 'Price',
                value: 'price'
            },
            {
                text: 'Date Created',
                value: 'dateCreated'
            }
        ],
        sortvalue: ''
    }),
    watch: {
        selectdata: function(val) {
            switch(val) {
                case 1: 
                    this.selectvalue = ''
                    break;
                case 2:
                    this.selectvalue = 'ON-GOING'
                    break;
                case 3: 
                    this.selectvalue = 'SOLD'
                    break;
                default: 
                    this.selectvalue = ''
                    break;
            }
        },
        selectvalue: function (val) {
            this.changevalue()
        },
        sortvalue: function (val) {
            this.changevalue()
        }
    },
    methods: {
        changevalue() {
            this.$emit('selection', {
                filter: this.selectvalue,
                sort: this.sortvalue
            })
        }
    }
}
</script>


<style scoped>
._btn {
  width: 160px;
  height: 35px;
  margin: 0;
}
</style>

