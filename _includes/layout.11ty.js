module.exports = function (data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>

      <!-- Basic Page Needs
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <meta charset="utf-8">
      <title>${data.title}</title>
      <meta name="description" content="11ty Contentful Starter utilizing the HTML5UP Solid State Theme">
      <meta name="author" content="Contentful">

      <!-- Mobile Specific Metas
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

      <!-- FONT
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>

      <!-- CSS
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <link rel="stylesheet" href="${this.url("/assets/css/tailwind.css")}">
      <link rel="stylesheet" href="${this.url("/assets/css/main.css")}">
      <noscript><link rel="stylesheet" href="${this.url(
        "/assets/css/noscript.css"
      )}" /></noscript>

      <!-- GTag
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      ${
        !data["google-id"]
          ? ""
          : `
        <script async src="https://www.googletagmanager.com/gtag/js?id=${data["google-id"]}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${data["google-id"]});
        </script>
      `
      }
      <!-- Favicon
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <link rel="icon" type="image/png" href="${this.url(
        "/images/favicon.png"
      )}" >

    </head>
    <body class="is-preload">
      <div id="page-wrapper">
        <header id="header">
            <h1><a href="${this.url("/")}">11ty Contentful Starter</a></h1>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>
          <!-- Menu -->
          <nav id="menu">
            <div class="inner">
              <h2>Menu</h2>
              <ul class="links">
                ${data["contentful-page"]
                  .map(
                    (page) => `
                  <li><a href="${this.url(page.slug)}">${page.title}</a></li>
                `
                  )
                  .join("")}
              </ul>
              <a href="#" class="close">Close</a>
            </div>
          </nav>
          ${data.content}
        </div>

      <!-- Scripts -->
        <script src=${this.url("/assets/js/jquery.min.js")}></script>
        <script src=${this.url("/assets/js/jquery.scrollex.min.js")}></script>
        <script src=${this.url("/assets/js/browser.min.js")}></script>
        <script src=${this.url("/assets/js/breakpoints.min.js")}></script>
        <script src=${this.url("/assets/js/util.js")}></script>
        <script src=${this.url("/assets/js/main.js")}></script>
      </body>
    </html>
  `;
};
