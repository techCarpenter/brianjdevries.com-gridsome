<template>
  <Layout>
    <h1>The Blog</h1>
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