class Pages {
  data() {
    return {
      pagination: {
        data: "contentful-page",
        size: 1,
        alias: "page",
        addAllPagesToCollections: true,
      },
      permalink: function (data) {
        return `${this.slug(data.page.slug)}/`;
      },
      tags: "page",
      layout: "layout.11ty.js",
      eleventyComputed: {
        title: function (data) {
          return data.page.title;
        },
      },
    };
  }

  async render(data) {
    const renderedShortcodes = await Promise.all(
      data.page.components.map((component) => {
        if (component.sys.contentType.sys.id == "contentBlock") {
          return this.contentBlock(component);
        } else if (component.sys.contentType.sys.id == "featuretteBlock") {
          return this.featuretteBlock(component);
        } else if (component.sys.contentType.sys.id == "cardBlock") {
          return this.cardBlock(component);
        } else if (component.sys.contentType.sys.id == "bannerBlock") {
          return this.bannerBlock(component);
        } else if (component.sys.contentType.sys.id == "footerBlock") {
          return this.footerBlock(component);
        }
      })
    );

    return renderedShortcodes.join("");
  }
}

module.exports = Pages;
