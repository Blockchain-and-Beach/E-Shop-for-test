<template>
  <button
    :class="`product-button btn btn-block ${classesString}`"
    @click="$emit('button-click')"
  >
    {{caption}}
  </button>
</template>

<script>
export default {
    name: 'ProductButton',
    computed: {
        classesString: function () {
            if (Array.isArray(this.classes) && this.classes.length > 0) {
                return this.classes.join(' ')
            } else {
                return ''
            }
        }
    },
    props: {
        caption: {
            type: String,
            default: 'Button'
        },
        classes: {
            type: Array,
            default: null
        }
    }
}
</script>
