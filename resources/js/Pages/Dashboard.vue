<template>
  <div>
    <h1>Dashboard</h1>
    <p>Hello {{ foo }}, welcome to your first Inertia app!</p>
  </div>
</template>

<script>
  import Layout from '../Shared/Layout.vue'

  export default {
    // Using a render function
    layout: (h, page) => h(Layout, () => child),

    // Using the shorthand
    layout: Layout,

    props: ['foo'],
  }
</script>