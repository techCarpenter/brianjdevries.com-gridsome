// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "brianjdevries.com",
  siteDescription: "Hi, I'm Brian DeVries. Welcome to my online home.",
  siteUrl: "https://brianjdevries.com",
  titleTemplate: "%s",
  templates: {
    PageMarkdown: [
      {
        path: (node) => {
          return `/${node.fileInfo.name}`;
        },
      },
    ],
    BlogPost: [
      {
        path: (node) => {
          return `/blog/${node.fileInfo.name}`;
        },
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PageMarkdown",
        baseDir: "./content/markdownPages",
        path: "*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        baseDir: "./content/blog",
        path: "*/*.md",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
