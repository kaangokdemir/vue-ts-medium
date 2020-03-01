<template lang='pug'>
  #navbar
    nav.navbar.navbar-light
      .container
        a.navbar-brand(href='index.html') conduit
        ul.nav.navbar-nav.pull-xs-right
          li.nav-item
            a.nav-link.active(href='') Home
          li.nav-item
            a.nav-link(href='')
              i.ion-compose
              | &nbsp;New Post
          li.nav-item
            a.nav-link(href='')
              i.ion-gear-a
              | &nbsp;Settings
          li.nav-item
            a.nav-link(href='') Sign up
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
</style>
