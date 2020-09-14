<template>
  <Layout>
    <postContent :post="$page.blogPost" />
    <!-- <BlogShareIcons :postURL="$page.metadata.siteUrl + $page.blogPost.path" /> -->
    <Subscribe />
  </Layout>
</template>

<page-query>
  query Page ($id: ID!) {
    metadata {
      siteUrl
    }
    blogPost(id: $id) {
      path
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
import BlogShareIcons from "../components/BlogShareIcons";

export default {
  components: {
    postContent,
    Subscribe,
    BlogShareIcons
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
