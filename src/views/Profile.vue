<template lang="pug">
.profile-page
  .user-info
    .container
      .row
        .col-xs-12.col-md-10.offset-md-1
          img.user-img(src='http://i.imgur.com/Qr71crq.jpg')
          h4 Eric Simons
          p
            | Cofounder @GoThinkster, lived in Aol&apos;s HQ for a few months, kinda looks like Peeta from the Hunger Games
          button.btn.btn-sm.btn-outline-secondary.action-btn
            i.ion-plus-round
            |             Follow Eric Simons
  .container
    .row
      .col-xs-12.col-md-10.offset-md-1
        .articles-toggle
          ul.nav.nav-pills.outline-active
            li.nav-item
              a.nav-link.active(href='') My Articles
            li.nav-item
              a.nav-link(href='') Favorited Articles
        .article-preview
          .article-meta
            a(href='')
              img(src='http://i.imgur.com/Qr71crq.jpg')
            .info
              a.author(href='') Eric Simons
              span.date January 20th
            button.btn.btn-outline-primary.btn-sm.pull-xs-right
              i.ion-heart
              |  29
          a.preview-link(href='')
            h1 How to build webapps that scale
            p This is the description for the post.
            span Read more...
        .article-preview
          .article-meta
            a(href='')
              img(src='http://i.imgur.com/N4VcUeJ.jpg')
            .info
              a.author(href='') Albert Pai
              span.date January 20th
            button.btn.btn-outline-primary.btn-sm.pull-xs-right
              i.ion-heart
              |  32
          a.preview-link(href='')
            h1 The song you won&apos;t ever stop singing. No matter how hard you try.
            p This is the description for the post.
            span Read more...
            ul.tag-list
              li.tag-default.tag-pill.tag-outline Music
              li.tag-default.tag-pill.tag-outline Song

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Profile'
})
</script>

<style>

</style>
