
<template>
  <div class="bg-leaves">
    <!--Producatori-->
    <section class="container">
      <h2 class="headline">Producători internaționali</h2>
      <ul class="lista">
        <li>
          <div class="prod">
            <img class="image" src="../img/Loredana/USA.png">
            <img class="stars" src="../img/Loredana/Stars.png" alt="5 stars">
            <a href="#">
              <p class="name">J.Paul</p>
              <p class="country">USA</p>
            </a>
          </div>
        </li>
              
        <li>
          <div class="prod">
            <img class="image" src="../img/Loredana/Romania.png">
            <img class="stars" src="../img/Loredana/Stars.png" alt="5 stars">
            <a href="#">
              <p class="name">C. Sergiu</p>
              <p class="country">Romania</p>
            </a>
          </div>
        </li>
        <li>
          <div class="prod">
            <img class="image" src="../img/Loredana/Germany.png">
            <img class="stars" src="../img/Loredana/Stars.png" alt="5 stars">
            <a href="#">
              <p class="name">A. Baggye</p>
              <p class="country">Germany</p>
            </a>
          </div>
        </li>
        <li>
          <div class="prod">
            <img class="image" src="../img/Loredana/Poland.png">
            <img class="stars" src="../img/Loredana/Stars.png" alt="5 stars">
            <a href="#">
              <p class="name">M. Clarice</p>
              <p class="country">Poland</p>
            </a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Producatori',

}

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.bg-leaves {
  background-image: url("../img/Marcela/bg-left.png"), url("../img/Marcela/bg-right.png");
  background-position: bottom left, top right;
  background-repeat: no-repeat;
  background-size: 50%;
  padding: 120px 0;
}


.container {
  width: 1216px;
  margin: 0 auto;
}


.headline {
  color: white;
  font-weight: 400;
  font-style: normal;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 48px;
  font-size: 64px;
  font-family: "Inria Serif";
}

j
.lista {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  list-style: none;
}


.prod {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 444px;
  text-align: center;
}

.prod a {
  text-decoration: none;
}


.prod .image {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
}


.stars {
  width: 182px;
  height: 32px;
  margin: 22px auto;

}
.name {
  color: white;
  margin: 22px 0 0 0;
  font-family: "Inria Serif";
  font-weight: 400;
  font-size: 32px;
}

.country {
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 22px 0;
  font-family: "Inria Serif";
  font-weight: 400;
  font-size: 32px;
}


@media (max-width: 1300px) {
  .container {
    width: 90%;
  }
  
  .lista {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  .headline {
    font-size: 48px;
    margin-top: 100px;
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 36px;
  }
  
  .prod {
    width: 240px;
    height: auto;
  }
  
  .prod .image {
    width: 240px;
    height: 240px;
  }
  
  .name, .country {
    font-size: 24px;
  }
}
</style>