<template lang='pug'>
.home-page
  .banner
    .container
      h1.logo-font conduit
      p A place to share your knowledge.
  .container.page
    .row
      .col-md-9
        .feed-toggle
          ul.nav.nav-pills.outline-active
            li.nav-item
              a.nav-link.disabled(href='') Your Feed
            li.nav-item
              a.nav-link.active(href='') Global Feed
        .article-preview
          .article-meta
            a(href='profile.html')
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
            a(href='profile.html')
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
      .col-md-3
        .sidebar
          p Popular Tags
          .tag-list
            a.tag-pill.tag-default(href='') programming
            a.tag-pill.tag-default(href='') javascript
            a.tag-pill.tag-default(href='') emberjs
            a.tag-pill.tag-default(href='') angularjs
            a.tag-pill.tag-default(href='') react
            a.tag-pill.tag-default(href='') mean
            a.tag-pill.tag-default(href='') node
            a.tag-pill.tag-default(href='') rails

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">

</style>
