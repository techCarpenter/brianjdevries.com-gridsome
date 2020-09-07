<template>
  <Layout>
    <h1>Articles</h1>
    <section>
      <BlogListItem v-for="post in $page.allBlogPost.edges" :key="post.node.id" :post="post" />
    </section>
  </Layout>
</template>

<page-query>
query {
  allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "MM/DD/YYYY")
        fileInfo {
          name
        }
      }
    }
  }
}
</page-query>

<script>
import BlogListItem from "../components/BlogListItem";

export default {
  components: {
    BlogListItem,
  },
  metaInfo: {
    title: "Blog",
  },
};
</script>