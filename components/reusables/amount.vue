<template>
    <span>
        {{currency}} {{amount}}
    </span>
</template>


<script>
/* eslint-disable */
import { ConvertNumberToString } from "@/helpers";
export default {
  props: {
    currency: {
      type: String
    },
    price: {
      type: Number
    }
  },
  computed: {
    amount() {
      return ConvertNumberToString(this.price);
    }
  }
};
</script>
