<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    label: {
      type: String,
    },
    charData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },

  mounted(){
      
  }
};
</script>
