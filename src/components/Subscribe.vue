<template>
  <div class="subscribe">
    <p><strong>Get updates every Monday</strong></p>
    <a class="button" :href="$static.json.newsletter">Subscribe!</a>
  </div>
</template>

<static-query>
query {
  json(id: 0) {
    newsletter
  }
}
</static-query>

<style scoped>
.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 3em;
}
.button {
  padding: 10px;
  color: #eee;
  background-color: var(--cinnabar);
  border-radius: 6px;
}
.button:hover,
.button:focus {
  text-decoration: none;
  filter: brightness(1.2);
}
</style>