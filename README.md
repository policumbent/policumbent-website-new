# Policumbent website

Repository for Team Policumbent's website. Built with
[Astro](https://astro.build/).

## Blog guide

To generate blog pages, insert the article in `Markdown` in
`/src/content/blog/` and the relative images in `/public/BlogImages/`. The
header of the file should be of the following format:

```
---
title: "Title"
pubDate: YYYY-MM-DD
description: "Voluptatem perferendis alias aliquid aut voluptatem ab velit excepturi. Distinctio debitis dolores officiis et atque rerum."
author: "Team Policumbent"
locale: "it"
slug: "YYYY-MM-DD_Title"
image: "/BlogImages/YYYY-MM-DD_Title.jpg"
---
```

`image` will be used as the main image for the article, and it must have a
resolution of 1920px x 640px (or greater, but keeping a 3:1 horizontal ratio).

To add a new blog post in both languages
1. Create two files with the same base name but -en.md and -it.md suffixes
2. Add locale: "en" / locale: "it" to each file's frontmatter
3. Both files should have the same pubDate and image so they show consistently
4. Translate the title, description, shortTitle, and body content

## Partners guide

Descriptions: 300 characters for main and premium partners, 150 for the rest.