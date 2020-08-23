<template>
  <div class="social-links">
    <a :href="$static.json.twitter">
      <g-image class="icon" src="../assets/images/twitter.svg" height="30" width="30" />
    </a>
    <a :href="'mailto:' + $static.json.email">
      <g-image class="icon" src="../assets/images/email.svg" height="30" width="30" />
    </a>
    <a :href="$static.json.linkedin">
      <g-image class="icon" src="../assets/images/linkedin.svg" height="30" width="30" />
    </a>
  </div>
</template>

<static-query>
query {
  json(id: "0") {
    linkedin
    twitter
    email
  }
}
</static-query>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
}
.social-links > a {
  display: flex;
}
a:hover,
a:focus,
a:active {
  filter: grayscale(1);
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>