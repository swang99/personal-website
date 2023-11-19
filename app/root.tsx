// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => {
	return [
	  { rel: "stylesheet", href: "styles/main.css" },
	  { rel: "stylesheet", href: "styles/queries.css" },
	  { rel: "stylesheet", href: "styles/resources/animate.css" },
	  {
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Lato:100,300,400,300italic",
	  },
	  {
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Raleway:300&display=swap",
	  },
	];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
		<Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
			<script src="https://cdn.jsdelivr.net/npm/respond.min.js@1.4.2/respond.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/selectivizr@1.0.3/selectivizr.min.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
			<script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
			<script src="js/jquery.waypoints.min.js"></script>
			<script src="js/script.js"></script>
			<script src="https://kit.fontawesome.com/04a5854578.js" crossOrigin="anonymous"></script>
        <LiveReload />
      </body>
    </html>
  );
}
