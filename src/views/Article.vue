<template lang='pug'>
.article-page
  .banner
    .container
      h1 How to build webapps that scale
      .article-meta
        a(href='')
          img(src='http://i.imgur.com/Qr71crq.jpg')
        .info
          a.author(href='') Eric Simons
          span.date January 20th
        button.btn.btn-sm.btn-outline-secondary
          i.ion-plus-round
          |           Follow Eric Simons
          span.counter (10)
        button.btn.btn-sm.btn-outline-primary
          i.ion-heart
          |           Favorite Post
          span.counter (29)
  .container.page
    .row.article-content
      .col-md-12
        p
          | Web development technologies have evolved at an incredible clip over the past few years.
        h2#introducing-ionic Introducing RealWorld.
        p It&apos;s a great solution for learning how other frameworks work.
    hr
    .article-actions
      .article-meta
        a(href='profile.html')
          img(src='http://i.imgur.com/Qr71crq.jpg')
        .info
          a.author(href='') Eric Simons
          span.date January 20th
        button.btn.btn-sm.btn-outline-secondary
          i.ion-plus-round
          |           Follow Eric Simons
          span.counter (10)
        button.btn.btn-sm.btn-outline-primary
          i.ion-heart
          |           Favorite Post
          span.counter (29)
    .row
      .col-xs-12.col-md-8.offset-md-2
        form.card.comment-form
          .card-block
            textarea.form-control(placeholder='Write a comment...' rows='3')
          .card-footer
            img.comment-author-img(src='http://i.imgur.com/Qr71crq.jpg')
            button.btn.btn-sm.btn-primary
              | Post Comment
        .card
          .card-block
            p.card-text With supporting text below as a natural lead-in to additional content.
          .card-footer
            a.comment-author(href='')
              img.comment-author-img(src='http://i.imgur.com/Qr71crq.jpg')
            a.comment-author(href='') Jacob Schmidt
            span.date-posted Dec 29th
        .card
          .card-block
            p.card-text With supporting text below as a natural lead-in to additional content.
          .card-footer
            a.comment-author(href='')
              img.comment-author-img(src='http://i.imgur.com/Qr71crq.jpg')
            a.comment-author(href='') Jacob Schmidt
            span.date-posted Dec 29th
            span.mod-options
              i.ion-edit
              i.ion-trash-a
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Article'
})
</script>

<style lang='scss'>

</style>
