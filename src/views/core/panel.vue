<template>
    <section :class='[panel,customize]'>
        <h4>-{{ title }}-</h4>
        <slot/>
    </section>
</template>

<script>
export default {
  props: {
    customize: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultPanel: panel
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/mixin.scss';
.panel {
  @include panel;
}
</style>