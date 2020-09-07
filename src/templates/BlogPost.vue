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
      excerpt
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
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.blogPost.excerpt,
        },
      ],
    };
  },
};
</script>
