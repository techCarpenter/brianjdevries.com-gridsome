<template>
  <div class="post-item">
    <g-link :to="post.node.path">
      <p>{{post.node.title}}</p>
      <!-- <Tags :tags="post.node.tags" /> -->
    </g-link>
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