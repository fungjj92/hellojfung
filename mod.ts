import plugins, { Options } from "./plugins.ts";

import type { Site } from "lume/core.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_includes/css/*",
      "_includes/layouts/archive_result.njk",
      "_includes/layouts/archive.njk",
      "_includes/layouts/base.njk",
      "_includes/layouts/home.njk",
      "_includes/layouts/page.njk",
      "_includes/layouts/post.njk",
      "_includes/templates/post-details.njk",
      "_includes/templates/post-list.njk",
      "media/*",
      "types/*",
      "fonts/inter.woff2",
      "fonts/inter-italic.woff2",
      "fonts/dmsans.woff2",
      "posts/_data.yml",
      "_data.yml",
      "404.md",
      "archive_result.tmpl.js",
      "archive.tmpl.js",
      "index.njk",
      "styles.css",
      "favicon.png",
      "CNAME"
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
