<template>
  <main>
    <header>
      
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/contact">Contact</Link> | 
      <!-- <Link href="/projects">Proyectos</Link> |  -->
      <Link href="/projects">Projects</Link> 

    </header>
    <article>
            
      <!-- <div v-if="$page.props.flash.success" class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          {{ $page.props.flash.success }}
        </div>
        
      </div>

      <div v-if="$page.props.flash.danger" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          $page.props.flash.danger
        </div>
      </div> -->

      <hr>
      por acá
      <hr>
        <a class="nav-link" :href="route('home')">Home</a>

      {{ $page }}

      <slot />
    </article>
  </main>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'



export default {
  components: {
    Link,
  }
}
</script>