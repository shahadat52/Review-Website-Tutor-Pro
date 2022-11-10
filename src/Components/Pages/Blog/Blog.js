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
            What is JWT, and how does it work?
          </li>

          <p>
            <span className="font-bold text-xl">JWT:</span>
            JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            <span className="font-bold">Works:</span>JWT differ from other web
            tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted.A JWT is a string made up of three parts,
            separated by dots (.), and serialized using base64. In the most
            common serialization format, compact serialization, the JWT looks
            something like this: xxxxx.yyyyy.zzzzz.Once decoded, you will get
            two JSON strings:
            <li>The header and the payload.</li>
            <li> The signature. </li>
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm.The
            Payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting. There are no mandatory claims for a JWT, but overlaying
            standards may make claims mandatory. For example, when using JWT as
            bearer access token under OAuth2.0, iss, sub, aud, and exp must be
            present. some are more common than others. The signature ensures
            that the token hasn’t been altered. The party that creates the JWT
            signs the header and payload with a secret that is known to both the
            issuer and receiver, or with a private key known only to the sender.
            When the token is used, the receiving party verifies that the header
            and payload match the signature.
          </p>
        </div>

        <div className="Q2-container">
          <li className="text-2xl font-bold mb-5">
            What is the difference between javascript and NodeJS?
          </li>
          <p>
            <span className="font-bold text-xl">JavaScript</span> is a
            programming language, which runs in web browsers. Whereas Node.js is
            an interpreter or running environment for JavaScript, which holds a
            lot of requiring libraries and all. JavaScript is basically one
            standard defining programming language; it can run any browser with
            a default browser running environment. It is a very strong language
            normally used for a web application on any verification or any
            specific business logic. We need to append in the screen without
            page refreshing. JavaScript also helps to use Ajax at any time,
            which helps us call any server-side script for given dynamic data
            based on the requirement. It also helps with generating dynamic HTML
            tables based on business requirement. JQuery is one of the popular
            libraries to make comfortable use of JavaScript by avoiding to write
            a lot of code.
            <br /> <br />
            <span className="font-bold text-xl">Node.js</span> also holds a lot
            of relative libraries, which we normally use in javascript for
            general purpose programming language. It is actually a kind of
            environment or interpreter that can represent JavaScript or run any
            javascript program. It mainly helps us execute some non-blocking
            operation like some operating system special information like
            certificate details or hardware details; we may use node js on the
            same, which help us do it, and JavaScript normal programming will
            not help us on the same. Normally all browsers have a JavaScript
            engine that helps us to run javascript in a web browser. Spider
            monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are
            some popular javascript engine using verities browsers. But node js
            is using the V8 engine directly, with some libraries to do some I/O
            or networking operations. It actually helps us use JavaScript from
            outside of the browser, like creating, writing or executing one
            shell script, some back-end services, or running on hardware. Let us
            understand JavaScript vs Node JS in detail.
          </p>
        </div>
        <div className="Q3-container">
          <li className="text-2xl font-bold mb-5">
            How does NodeJS handle multiple requests at the same time?
          </li>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
        <div className="Q4-container">
          <li className="text-2xl font-bold mb-5">
            Difference between SQL and NoSQL
          </li>
          <p>
            <span className="font-bold text-xl">SQL: </span>
            SQL database are primarily called RDBMS or Relational
            Databases.Traditional RDBMS uses SQL syntax and queries to analyze
            and get the data for further insights. They are used for OLAP
            systems.SQL databases are table based databases.SQL databases are
            vertically scalable .SQL databases are not suitable for hierarchical
            data storage.
            <br />
            <br />
            <span className="font-bold text-xl">NoSQL: </span>
            NoSQL databases are primarily called as Non-relational or
            distributed database.NoSQL database system consists of various kind
            of database technologies. These databases were developed in response
            to the demands presented for the development of the modern
            application.NoSQL databases can be document based, key-value pairs,
            graph databases.NoSQL databases use dynamic schema for unstructured
            data.More suitable for the hierarchical data store as it supports
            key-value pair method.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
