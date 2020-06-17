const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === "/") {
            app.render(req, res, "/index", query);
        } else if (pathname === "/search") {
            app.render(req, res, "/search", query);
            n;
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log("> singz72's blog ready on http://localhost:3000");
    });
});