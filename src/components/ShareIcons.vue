<template>
  <div>
    <TwitterButton :shareDescription="description" btnText />
    <FacebookButton :shareDescription="description" btnText />
    <PinterestButton :shareDescription="description" btnText />
    <EmailButton :shareDescription="description" btnText />
  </div>
</template>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import EmailButton from "vue-share-buttons/src/components/EmailButton";
import PinterestButton from "vue-share-buttons/src/components/PinterestButton";

export default {
  props: ["description"],
  components: {
    TwitterButton,
    FacebookButton,
    EmailButton,
    PinterestButton,
  },
};
</script>