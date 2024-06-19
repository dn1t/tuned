// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='ko'>
        <head>
          <script innerHTML="(()=>{const t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;else document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'})()" />
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
