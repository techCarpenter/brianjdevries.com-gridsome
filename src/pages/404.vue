<template>
  <Layout>
    <h1>Doh!...</h1>
    <p>That page doesn't exist! Here are some recent posts instead:</p>
    <section>
      <BlogListItem v-for="post in $page.allBlogPost.edges" :key="post.node.id" :post="post" />
    </section>
  </Layout>
</template>

<page-query>
query {
  allBlogPost (limit: 10) {
    edges {
      node {
        id
        title
        path
        date (format: "MM/DD/YYYY")
      }
    }
  }
}
</page-query>

<script>
import BlogListItem from "../components/BlogListItem";
export default {
  metaInfo: {
    title: "Try Again!",
  },
  components: {
    BlogListItem,
  },
};
</script>