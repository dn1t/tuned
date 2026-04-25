// @refresh reload
import { join } from "node:path";
import { createHandler, StartServer } from "@solidjs/start/server";
import { config } from "dotenv";

if (!process.env.GENIUS_ACCESS_TOKEN) {
  config({ path: join(import.meta.dirname, "../../../.env"), quiet: true });
}

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="ko">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preload" href="/fonts.css" as="style" />
          <link rel="stylesheet" href="/fonts.css" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
