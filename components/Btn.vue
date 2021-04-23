<template>
  <button type="button"
    @click="$emit('test-btn')"
    class="my-1 w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm
    transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
    <slot></slot>
    <span>{{title}}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>