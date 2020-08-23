<template>
  <Layout>
    <h1>Doh!...</h1>
    <p>That page doesn't exist! Try one of these instead:</p>
    <ul>
      <li v-for="post in $page.allBlogPost.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{post.node.title}}</g-link>
      </li>
    </ul>
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
      }
    }
  }
}
</page-query>