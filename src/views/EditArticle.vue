<template lang='pug'>
.editor-page
  .container.page
    .row
      .col-md-10.offset-md-1.col-xs-12
        form
          fieldset
            fieldset.form-group
              input.form-control.form-control-lg(type='text' placeholder='Article Title')
            fieldset.form-group
              input.form-control(type='text' placeholder="What's this article about?")
            fieldset.form-group
              textarea.form-control(rows='8' placeholder='Write your article (in markdown)')
            fieldset.form-group
              input.form-control(type='text' placeholder='Enter tags')
              .tag-list
            button.btn.btn-lg.pull-xs-right.btn-primary(type='button')
              | Publish Article
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EditArticle'
})
</script>

<style lang='scss'>

</style>
