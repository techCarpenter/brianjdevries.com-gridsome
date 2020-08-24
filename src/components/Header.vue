<template>
  <header>
    <div class="container">
      <g-link class="logo" to="/">
        <g-image src="../../static/android-chrome-192x192.png" width="40" />
      </g-link>
      <nav>
        <g-link class="nav-link" to="/about">About</g-link>
        <g-link class="nav-link" to="/now">Now</g-link>
        <g-link class="nav-link" to="/blog">Blog</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
header {
  background-color: var(--black-coffee);
  padding: 10px;
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
}
.logo {
  display: flex;
}
.nav-link {
  margin-right: 10px;
  padding: 10px;
  background-color: #eee;
  border-radius: 6px;
}
.nav-link:last-child {
  margin-right: 0;
}
.nav-link:focus,
.nav-link:active,
.nav-link:hover {
  text-decoration: none;
  filter: brightness(0.8);
}
.active and :not(.logo) {
  filter: brightness(0.8);
}
</style>