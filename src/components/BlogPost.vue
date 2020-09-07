<template>
  <div class="blog-post">
    <h1>{{post.title}}</h1>
    <h5>{{post.date}}</h5>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    required: true,
  },
};
</script>