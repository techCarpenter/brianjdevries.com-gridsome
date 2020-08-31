<template>
  <Layout>
    <postContent :post="$page.blogPost" />
    <Subscribe />
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
import Subscribe from "../components/Subscribe";

export default {
  components: {
    postContent,
    Subscribe,
  },
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
    };
  },
};
</script>
