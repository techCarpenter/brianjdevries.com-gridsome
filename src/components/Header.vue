<template>
  <header>
    <div class="header-container">
      <g-link class="logo" to="/">
        <g-image src="../../static/android-chrome-192x192.png" width="40" />
      </g-link>
      <div class="menu-toggle">
        <input
          id="menu-checkbox"
          type="checkbox"
          name="menu-checkbox"
          v-model="menuVisible"
        />
        <label for="menu-checkbox">Menu</label>
      </div>
    </div>
    <nav :class="{ openMenu: menuVisible }">
      <ul>
        <li>
          <g-link class="nav-link" to="/">
            <strong>Start Here</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/about/">
            <strong>My Story</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/now/">
            <strong>Now</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/blog/">
            <strong>Blog</strong>
          </g-link>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SocialLinks from "./SocialLinks";

export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  components: {
    SocialLinks,
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    closeMenu() {
      this.menuVisible = false;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--black-coffee); /* Don't change with theme */
  padding: 0.65rem;
}
.header-container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: var(--article-width);
}
.logo {
  display: flex;
}
.openMenu {
  max-height: 18rem;
  margin: 0 0 0.65rem;
}
nav {
  padding: 0;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
}
ul {
  width: 100%;
  padding: 0;
}
nav li {
  width: 100%;
}
.nav-link {
  color: var(--mercury); /* Don't change with theme */
  font-size: 1.4rem;
  text-align: center;
  display: inline-block;
  width: 100%;
  padding: 0.33rem;
}
.nav-link:focus,
.nav-link:active,
.nav-link:hover {
  text-decoration: none;
  color: #aaa;
  transition: all 0.3s ease;
}
.active--exact:not(.logo) {
  color: var(--cinnabar);
}
.menu-toggle {
  position: relative;
}
/* Hide checkbox under label for menu */
.menu-toggle input {
  position: relative;
  left: 2rem;
  opacity: 0;
  z-index: -1;
}
.menu-toggle label {
  display: inline-block;
  border-radius: 0.4rem;
  background-color: var(--cinnabar);
  color: var(--mercury); /* Don't change with theme */
  padding: 0.4rem 0.65rem;
  z-index: 1;
}
.menu-toggle label::before {
  content: "☰ ";
  color: var(--mercury); /* Don't change with theme */
}
.menu-toggle input:checked + label::before {
  content: "✖ ";
  color: var(--mercury); /* Don't change with theme */
}
.menu-toggle label:hover {
  cursor: pointer;
}
</style>