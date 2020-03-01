<template lang='pug'>
.auth-page
  .container.page
    .row
      .col-md-6.offset-md-3.col-xs-12
        h1.text-xs-center Sign In
        p.text-xs-center
          a(href='') Need an account?
        ul.error-messages
          li That email is already taken
        form
          fieldset.form-group
            input.form-control.form-control-lg(type='text' placeholder='Email')
          fieldset.form-group
            input.form-control.form-control-lg(type='password' placeholder='Password')
          button.btn.btn-lg.btn-primary.pull-xs-right
            | Sign up
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
</style>
