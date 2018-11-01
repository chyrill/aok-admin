<template>
    <div>
        <v-data-table :headers="headers">

        </v-data-table>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    headers: [
      {
        text: "ID"
      },
      {
        text: "Date"
      },
      {
        text: "Artworks"
      },
      {
        text: "Amount"
      },
      {
        text: "Buyer"
      },
      {
        text: "Type"
      }
    ]
  })
};
</script>

