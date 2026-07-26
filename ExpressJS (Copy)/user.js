const fs = require("fs");

const userRequestHandler = (req, res) => {

    console.log(req.url, req.method);

    // Home Page
    if (req.url === "/") {

        res.setHeader("Content-Type", "text/html");

        res.write(`
            <html>
            <head>
                <title>Complete Coding</title>
            </head>
            <body>
                <h1>Enter Your Details:</h1>

                <form action="/submit-details" method="POST">

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                    >
                    <br><br>

                    <label for="male">Male</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                    >

                    <label for="female">Female</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                    >

                    <br><br>

                    <button type="submit">Submit</button>

                </form>

            </body>
            </html>
        `);

        return res.end();
    }

    // Handle Form Submission
    else if (req.url === "/submit-details" && req.method === "POST") {

        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {

            const parsedBody = Buffer.concat(body).toString();

            console.log(parsedBody);
            // username=Om&gender=male

            const params = new URLSearchParams(parsedBody);

            const bodyObject = {};

            for (const [key, value] of params.entries()) {
                bodyObject[key] = value;
            }

            console.log(bodyObject);

            fs.writeFileSync(
                "user.txt",
                `Name : ${bodyObject.username}\nGender : ${bodyObject.gender}`
            );

            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });

        return;
    }

    // 404 Page
    res.setHeader("Content-Type", "text/html");

    res.write(`
        <html>
        <head>
            <title>404</title>
        </head>
        <body>
            <h1>Page Not Found</h1>
        </body>
        </html>
    `);

    res.end();
};

module.exports = userRequestHandler;