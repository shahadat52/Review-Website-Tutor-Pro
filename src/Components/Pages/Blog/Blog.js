import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="text-center text-gray-700">
      <h1 className="text-5xl font-bold mb-10 pb-10 border-black border-b-2">
        Common Interview Questions
      </h1>
      <div className="q-container text-justify">
        <div className="Q1-container">
          <li className="text-2xl font-bold mb-5">
            Difference between SQL and NoSQL
          </li>
          <p>
            <span className="font-bold text-xl">
              We will use firebase because
            </span>
            Indeed, Firebase is a less technical and time-saving alternative to
            writing full-fledged backend code for dynamic apps. You might also
            want to consider leveraging this tool if you eventually wish to host
            and manage your app in the cloud. Being serverless, Firebase removes
            the need to worry about the technicalities of cloud server
            configuration.As a Google Cloud service, it also gives you access to
            other Google products and features, like Google Drive and Sheets.
            For instance, you can import dummy data from Google Sheets and use
            it temporarily to serve your app.With Firebase, it's pretty simple
            to connect and use built-in third-party authentication providers,
            including Google, Facebook, Twitter, among others. And if you want
            to use a pre-built authentication UI, you have it at your disposal
            as well.All of these can save you a significant amount of
            development cost, as you don't need to pay as high as developing
            from scratch. Firebase pricing is equally flexible. Although there
            are pay-as-you-go services, you can start on a free plan and use
            primary features if your app is still at its prime. Firebase is a
            good choice if you want to deploy a working product on the cloud
            rapidly. Plus, as mentioned, you might want to try it out if you
            need a backend but don't have a backend development background.{" "}
            <br />
            <br />
            <span className="font-bold">Others Options:</span>
            <li>Amazon Cognito</li>
            <li>AWS Amplify</li>
            <li>Auth0</li>
            <li>Heroku</li>
            <li>Okta</li>
            <li>Nhost etc.</li>
          </p>
        </div>
        <div className="Q2-container">
          <li className="text-2xl font-bold mb-5">
            What is JWT, and how does it work?
          </li>

          <p>
            <span className="font-bold text-xl">
              Cross-Origin Resource Sharing
            </span>
            (CORS) is an HTTP-based security mechanism controlled and enforced
            by the client (web browser). It allows a service (API) to indicate
            any origin other than its own from which the client can request
            resources. It has been designed in response to the same-origin
            policy (SOP) that restricts how a website (HTML document or JS
            script) loaded by one origin can interact with a resource from
            another origin. CORS is used to explicitly allow some cross-origin
            requests while rejecting others. CORS is implemented primarily in
            web browsers, but it can also be used in API clients as an option.
            It's present in all popular web browsers like Google Chrome,
            Firefox, Opera, and Safari. The standard has been accepted as a W3C
            Recommendation in January 2014. Based on that, we can assume that it
            is implemented in all currently available and other than listed web
            browsers.
            <br />
            <span className="font-bold">Works:</span> Everything starts on the
            client side, before sending the main request. The client sends a
            CORS preflight request to a service for resources with parameters in
            HTTP headers (CORS headers). The service responses using the same
            headers with different or the same values. The client decides, based
            on a CORS preflight response, if he can or cannot send the main
            request to the service. The web browser (client) will throw an error
            if the response does not meet the requirements of CORS preflight.
            CORS preflight requests are sent regardless of the used libraries or
            frameworks to send requests from web browser. That's why you won't
            need to conform CORS requirements when working with API from your
            backend application
          </p>
        </div>

        <div className="Q3-container">
          <li className="text-2xl font-bold mb-5">
            What is the difference between javascript and NodeJS?
          </li>
          <p>
            <span className="font-bold text-xl">Node.js</span> is an
            open-source, cross-platform JavaScript runtime environment and
            library for running web applications outside the client's browser.
            Ryan Dahl developed it in 2009, and its latest iteration, version
            15.14, was released in April 2021. Developers use Node.js to create
            server-side web applications, and it is perfect for data-intensive
            applications since it uses an asynchronous, event-driven model.{" "}
            <br /> <br />
            <span className="font-bold text-xl">Work</span> Node js is a used as
            backend service where javascript works on the server-side of the
            application. This way javascript is used on both frontend and
            backend. Node.js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive. <br /> <br />
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept
            <li>Asynchronous</li>
            <li>Non-blocking I/O</li>
            Non-blocking i/o means working with multiple requests without
            blocking the thread for a single request. I/O basically interacts
            with external systems such as files, databases. Node.js is not used
            for CPU-intensive work means for calculations, video processing
            because a single thread cannot handle the CPU works. <br /> <br />
            Asynchronous: Asynchronous is executing a callback function. The
            moment we get the response from the other server or database it will
            execute a callback function. Callback functions are called as soon
            as some work is finished and this is because the node.js uses an
            event-driven architecture. The single thread doesn’t work with the
            request instead it sends the request to another system which
            resolves the request and it is accessible for another request.
          </p>
        </div>
        <div className="Q3-container">
          <li className="text-2xl font-bold mb-5">
            How does NodeJS handle multiple requests at the same time?
          </li>
          <p>
            <span className="font-bold text-xl">The private route</span> is the
            component is similar to the public route, the only change is that
            redirect URL and authenticate condition. If the user is not
            authenticated he will be redirected to the login page and the user
            can only access the authenticated routes If he is authenticated
            (Logged in). <br /> <br />
            <span className="font-bold text-xl">Work</span> The react private
            route component renders child components (children) if the user is
            logged in. If not logged in the user is redirected to the /login
            page with the return url passed in the location state property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
