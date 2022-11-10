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

        
      </div>
    </div>
  );
};

export default Blog;
