<template>
  <div class="subscribe">
    <p><strong>Want to stay up-to-date?</strong></p>
    <a class="button" :href="$static.json.newsletter">Join Email List</a>
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
.subscribe p {
    text-align: center;
}
.button {
  padding: 10px 20px;
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