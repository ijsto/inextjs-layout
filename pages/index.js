export default () => (
  <>
    <div>
      <h1>Next.js starter app with a dynamic layout</h1>
      <div>Have fun and build stuff!</div>

      <a
        href="https://ijs.to/courses/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>Learn code on iJS.to</h2>
      </a>
      <ul>
        <li>
          <a
            href="https://ijs.to/courses/nextjs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/react"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/graphql"
            rel="noopener noreferrer"
            target="_blank"
          >
            GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            and other courses
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      h1 {
        margin: 1em auto 0.25em;
      }
      h2 {
        margin: 0 auto 0.75em auto;
        font-size: 2.5em;
      }
      h3 {
        margin: 1em auto 0;
      }

      a {
        margin: 1em auto;
      }

      div {
        text-align: center;
      }
      ul {
        margin: 2em;
      }
      li {
        display: inline;
        padding: 1em;
        margin-left: 2em;
      }
    `}</style>
  </>
);
