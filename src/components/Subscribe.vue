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
  margin: 0 auto 3rem;
}
.subscribe p {
    text-align: center;
}
.button {
  padding: 0.65rem 1.25rem;
  color: #eee;
  background-color: var(--cinnabar);
  border-radius: 0.4rem;
}
.button:hover,
.button:focus {
  text-decoration: none;
  filter: brightness(1.2);
}
</style>