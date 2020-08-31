<template>
  <Layout>
    <main class="page" v-html="$page.page.content"></main>
    <Subscribe />
  </Layout>
</template>

<page-query>
  query Page ($id: ID!) {
    page: pageMarkdown(id: $id) {
      title
      content
    }
  }
</page-query>

<script>
import Subscribe from "../components/Subscribe";

export default {
  components: {
    Subscribe,
  },
  metaInfo() {
    return {
      title: this.$page.page.title,
    };
  },
};
</script>