/* eslint-disable object-curly-newline */
export default ({ body, roomid, userid }) => (
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Whiteboard Time Machine</title>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
      <script>
        window.wtm = ${JSON.stringify({ roomid, userid })};
      </script>
      <script src="/socket.io/socket.io.js"></script>
      <script src="bundle.js"></script>
    </html>
  `
);
