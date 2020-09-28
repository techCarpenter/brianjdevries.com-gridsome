<template>
  <div class="post-item">
    <h3>
      <g-link :to="post.node.path">{{post.node.title}}</g-link>
    </h3>
    <!-- <Tags :tags="post.node.tags" /> -->
    <p>{{post.node.date}}</p>
  </div>
</template>

<script>
// import Tags from "./Tags";

export default {
  components: {
    // Tags,
  },
  props: {
    post: Object,
  },
};
</script>

<style scoped>
h3, p {
    margin: 0;
}
p {
    padding-left: 1rem;
}
.post-item {
    padding: 0.65rem 0;
    border-radius: 0.65rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>