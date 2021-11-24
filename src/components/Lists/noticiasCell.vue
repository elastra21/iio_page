<template>
  <div class="post-module mx-auto">
    <!-- Thumbnail-->
    <div class="thumbnail">
      <div class="date">
        <div class="day">27</div>
        <div class="month">Mar</div>
      </div>
      <img
        class="shit"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
      />
    </div>
    <!-- Post Content-->
    <div class="post-content">
      <div class="category">Photos</div>
      <h1 class="title">City Lights in New York</h1>
      <h2 class="sub_title">The city that never sleeps.</h2>
      <p class="description">
        New York, the largest city in the U.S., is an architectural marvel with plenty of historic
        monuments, magnificent buildings and countless dazzling skyscrapers.
      </p>
      <div class="post-meta">
        <span class="timestamp"><i class="fa fa-clock-">o</i> 6 mins ago</span
        ><span class="comments"><i class="fa fa-comments"></i><a href="#"> 39 comments</a></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NoticiasCell",
  props: {
    worker: Object
  },
  data() {
    return {
      msg: "Atom_Vue"
    };
  },
  methods: {
    countUp: function() {}
  }
};
</script>
<style lang="scss" scoped>
body {
  // background: darken(@white, 5%);
  font-family: "proxima-nova-soft", sans-serif;
  font-size: 14px;
}

.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #ffffff;
  min-width: 270px;
  width: 300px;
  height: 470px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;

  &:hover {
    -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    .thumbnail {
      img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 0.6;
      }
    }
    .description {
      height: 125px !important;
      opacity: 0.8 !important;
    }
  }

  .thumbnail {
    background: black;
    height: 400px;
    overflow: hidden;
    .date {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
      background-color: green;
      width: 55px;
      height: 55px;
      padding: 5px 0;
      border-radius: 27px;
      color: white;
      font-weight: 700;
      text-align: center;
      // .box-size;
      .day {
        font-size: 18px;
      }
      .month {
        font-size: 12px;
        text-transform: uppercase;
      }
    }
    img {
      width: 120%;
      -webkit-transition: all 0.3s !important;
      -moz-transition: all 0.3s !important;
      -ms-transition: all 0.3s !important;
      -o-transition: all 0.3s !important;
      transition: all 0.3s !important;
    }
  }
  .post-content {
    position: absolute;
    bottom: 0;
    background: rgb(245, 245, 245);
    width: 100%;
    padding: 30px;
    // .box-size;
    //transition-timing-function: cubic-bezier(0.37, 0.75, 0.61, 1.05);

    .category {
      position: absolute;
      top: -34px;
      left: 0;
      background: green;
      padding: 10px 15px;
      color: white;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .title {
      margin: 0;
      padding: 0 0 10px;
      color: darkgray;
      font-size: 26px;
      font-weight: 700;
    }
    .sub_title {
      margin: 0;
      padding: 0 0 20px;
      color: green;
      font-size: 20px;
      font-weight: 400;
    }
    .description {
      overflow: hidden;
      -webkit-transition: height 0.4s;
      -moz-transition: height 0.4s;
      transition: height 0.4s;
      color: gray;
      font-size: 14px;
      line-height: 1.8em;
      opacity: 0;
      height: 0px;
    }
    .post-meta {
      margin: 30px 0 0;
      color: lightgray;
      .timestamp {
        margin: 0 16px 0 0;
      }
      a {
        color: lightgray;
        text-decoration: none;
      }
    }
  }
}

.container {
  max-width: 800px;
  min-width: 640px;
  margin: 0 auto;
  &:before,
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .column {
    width: 50%;
    padding: 0 25px;
    // .box-size;
    float: left;
    .demo-title {
      margin: 0 0 15px;
      color: gray;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .info {
    width: 300px;
    margin: 50px auto;
    text-align: center;
    h1 {
      margin: 0 0 15px;
      padding: 0;
      font-size: 24px;
      font-weight: bold;
      color: darkgray;
    }
    span {
      color: gray;
      font-size: 12px;
      a {
        color: black;
        text-decoration: none;
      }
      .fa {
        color: red;
      }
    }
  }
}
</style>
