// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/reset.css";
import "~/assets/styles.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "author",
    href: "humans.txt",
  });
  head.link.push({
    rel: "icon",
    href: "favicon.ico",
  });
  head.script.push({
    "data-goatcounter": "https://brianjdevries.goatcounter.com/count",
    src: "//gc.zgo.at/count.js",
    async: true,
    body: true,
  });
}
