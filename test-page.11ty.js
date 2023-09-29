class TestPage {
  data() {
    return {
      permalink: "test-page/",
      tags: "page",
      layout: "layout.11ty.js",
      title: "Test Page",
    };
  }

  render(data) {
    return this.bannerBlock({
      fields: {
        sectionTitle: "This is a banner block for the second page",
        sectionLink: "this-is-a-banner-block-for-the-second-page",
        content: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "Look at my fun content. ",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
      },
    });
  }
}

module.exports = TestPage;
