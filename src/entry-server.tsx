// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='ko'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          {assets}
        </head>
        <body>
          <script innerHTML="(()=>{const t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.body.classList.add(t);else document.body.classList.add(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')})()" />
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
