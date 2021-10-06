<template>
  <div class="contacts container py-5">
    <h1 class="text-center mb-4">Contacts</h1>
    <div class="row">
      <div class="col-md-6 col-12">
        <h3 class="mt-0">Phones</h3>
        <div class="managers d-flex">
          <h4>Manager of site:</h4>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block px-3"><img src="../assets/image/icons/icon-viber.png" alt="viber"> (0512) 55-55-55</a>
        </div>
        <div class="managers d-flex">
          <h4>Shop:</h4>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block px-3"><img src="../assets/image/icons/icon-viber.png" alt="viber"> (0512) 55-55-55</a>
        </div>
        <div class="managers d-flex">
          <h4>Designers:</h4>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block px-3"><img src="../assets/image/icons/icon-viber.png" alt="viber"> (0512) 55-55-55</a>
        </div>
        <div class="managers d-flex">
          <h4>Factory:</h4>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block border-right br-secondary px-3">(0512) 55-55-55</a>
          <a href="" class="d-block px-3"><img src="../assets/image/icons/icon-viber.png" alt="viber"> (0512) 55-55-55</a>
        </div>

        <h3>Emails</h3>
        <a href="">rio@gmail.com</a>

        <h3>Our addresses</h3>
        <div class="address d-flex">
          <h4>Shop:</h4>
          <span>Some where</span>
        </div>

        <h3>Timetable</h3>
        <div class="time">
          <p>ПН-СБ: с 9:00 до 18:00</p>
          <p>ВС: с 9:00 до 16:00 (без обеда)</p>
        </div>
      </div>
      <div class="col-md-6 col-12 map">
        <h3 class="mt-0">We are on the map</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6489.335146203816!2d32.01978120306989!3d46.85492287914578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1633520012443!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>

  </div>

  <feed-back-form/>




</template>

<script>
import FeedBackForm from "../components/FeedBackForm";
export default {
  name: "Contacnts",
  components: {
    FeedBackForm
  },
}

</script>

<style scoped lang="scss">
@import "../assets/styles/index";

h3 {
  text-decoration: underline;
  margin: 2em 0 1em;

}

a {
  color: $font_color;
}

img {
  width: 1.5em;
}


</style>