<template>
  <Layout>
    <postContent :post="$page.blogPost" />
    <ShareIcons :description="this.$page.blogPost.excerpt" />
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
import ShareIcons from "../components/ShareIcons";

export default {
  components: {
    postContent,
    Subscribe,
    ShareIcons
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
