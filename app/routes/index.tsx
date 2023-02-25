import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <main id="content">
      <h1>A better way of laughing</h1>
      <p>Try our early beta and never laughing again!</p>
      <p id="cta">
        <Link to="/jokes">Try Now!</Link>
      </p>
    </main>
  );
}
