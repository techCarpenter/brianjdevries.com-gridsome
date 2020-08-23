<template>
  <Layout>
    <postContent :post="$page.blogPost" />
    <!-- <button onclick="https://brianjdevries.substack.com/welcome">Subscribe!</button> -->
  </Layout>
</template>

<page-query>
  query Page ($id: ID!) {
    blogPost(id: $id) {
      title
      content
      date (format: "MMMM DD, YYYY")
    }
  }
</page-query>

<script>
import postContent from "../components/BlogPost";

export default {
  components: {
    postContent,
  },
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
    };
  },
};
</script>

<style scoped>
button {
  width: 100px;
  color: var(--grullo);
  text-align: center;
  background-color: var(--cinnabar);
  padding: 20px;
  font-size: 16px;
}
button:hover,
button:focus,
button:active {
  filter: brightness(1.2);
}
</style>