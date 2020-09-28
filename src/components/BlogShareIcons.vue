<template>
  <div class="share-post-buttons">
    <p>Share this article:</p>
    <div class="share-icons">
      <a :href="postURL">
        <Icon name="facebook" height="30" width="30" />
      </a>
      <a :href="postURL">
        <Icon name="twitter" height="30" width="30" />
      </a>
      <a :href="postURL">
        <Icon name="linkedin" height="30" width="30" />
      </a>
      <a :href="postURL">
        <Icon name="pinterest" height="30" width="30" />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  components: {
    Icon,
  },
  props: {
    postURL: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
.share-post-buttons {
  background-color: var(--background-color);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--text-color);
  box-shadow: 0 -6px 6px 4px rgba(0, 0, 0, 0.4);
}
.share-post-buttons p {
  text-align: center;
  margin: 0.65rem auto 0;
}
.share-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.65rem;
}
.share-icons a {
  margin: 0 1rem;
}
</style>