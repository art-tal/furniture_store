<template>
  <div class="container w-25">
    <h2 class="text-center mx-auto">Feedback form</h2>
    <form action="" method="get" class="m-auto">
      <input id="name_user" name="name_user" type="text" placeholder="Name*">
      <input id="email_user" name="email_user" type="email" placeholder="E-mail*">
      <textarea name="msg" id="msg" cols="30" rows="5">Your message</textarea>
      <button type="submit" id="feedback_submit" class="btn btn-success">Send</button>
    </form>
  </div>

</template>

<script>
export default {
  name: "FeedBackForm"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/index";

.container {
  margin: 2em auto;
  width: 100%;
  border: 1px solid $secondary_color;
  border-radius: 10px;
  padding: 2em;
  background-color: #f8f9fa;
}

h2 {
  margin: 0 0 1em;
}

input, button, textarea {
  display: block;
  width: 100%;
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid $secondary_color;
  border-radius: 5px;
  font-size: 1.6rem;

  &:focus {
    background-color: #cceeff;
    border-color: #cceeff;
}
  &:hover {
    border-color: dodgerblue;
  }
}

</style>