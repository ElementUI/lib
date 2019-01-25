export default function (ref) {
  return {
    methods: {
      focus: function focus() {
        this.$refs[ref].focus();
      }
    }
  };
};