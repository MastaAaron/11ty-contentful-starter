export const data = {
  permalink: "test-jsx/",
  layout: "layout.11ty.js",
  title: "Test JSX Page",
};

export default function render({ children, title }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>

      <article>{children}</article>
    </>
  );
}
