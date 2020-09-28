<template>
  <div class="blog-post">
    <h1>{{post.title}}</h1>
    <p><strong>{{post.date}}</strong></p>
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