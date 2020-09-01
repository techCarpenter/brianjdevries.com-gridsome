<template>
  <div class="social-links">
    <a :href="'mailto:' + $static.json.email">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#eee"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-mail"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </a>
    <a :href="$static.json.twitter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#eee"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-twitter"
      >
        <path
          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        />
      </svg>
    </a>
    <a :href="$static.json.linkedin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#eee"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  </div>
</template>

<static-query>
query {
  json(id: "0") {
    linkedin
    twitter
    email
  }
}
</static-query>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
}
.social-links > a {
  display: flex;
}
a svg:hover,
a svg:focus,
a svg:active {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
.feather-twitter:hover,
.feather-twitter:focus,
.feather-twitter:active {
  stroke: #00aced;
}
.feather-mail:hover,
.feather-mail:focus,
.feather-mail:active {
  stroke: var(--cinnabar);
}
.feather-linkedin:hover,
.feather-linkedin:focus,
.feather-linkedin:active {
  stroke: #2867b2;
}

</style>