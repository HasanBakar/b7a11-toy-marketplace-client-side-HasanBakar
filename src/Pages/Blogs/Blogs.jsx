/* eslint-disable react/no-unescaped-entities */
const Blogs = () => {
    return (
        <div>
            <h1 className="text-center text-3xl mt-2 mb-5 font-semibold">Read Our Blogs</h1>
            <div className="box-content mb-7 shadow-xl py-8 px-6 bg-slate-100">
                <h1 className="font-bold text-2xl">Q.1 What is an access token and refresh token? <br /> How do they work and where should we store them on the client-side?</h1>
                <p>
                    An access token is a short-lived credential issued after authentication, used to access specific resources or perform actions. It is included in API requests for authorization and expires after a certain time. A refresh token is a long-lived credential issued alongside an access token. It has a longer expiration time and is used to obtain a new access token when the original one expires. This avoids the need for users to reauthenticate and enhances security. In short, access tokens grant access to resources, while refresh tokens enable the renewal of access tokens without reauthentication. <br /> <br />
                    Access tokens and refresh tokens work together in authentication.

                    - Access Token: A short-lived credential issued after authentication. It is stored on the client-side (e.g., browser session storage) and sent in API requests to access protected resources. It expires after a certain time.

                    - Refresh Token: A long-lived credential issued alongside the access token. It is securely stored on the client-side (e.g., encrypted in a secure cookie or local storage). When the access token expires, the refresh token is used to obtain a new access token without reauthentication.

                    Secure storage of tokens is important, with access tokens stored temporarily and refresh tokens stored securely (e.g., encrypted). Best practices, like token revocation and secure transmission, should be followed for a robust authentication system.
                </p>
            </div>
            <div className="box-content shadow-xl mb-5 py-8 px-6 bg-slate-100">
                <h1 className="font-bold text-2xl">Q.2 Compare SQL and NoSQL databases?</h1>
                <div>
                    <span className="font-medium text-xl">Characteristics of SQL and NoSQL databases:</span> <br />

                    <span className="font-medium text-xl">SQL Databases:</span> <br />
                    <ul>
                        <li>1. Data Model: Rigid, predefined schema with tables, rows, and columns.</li>
                        <li>
                            2. Scalability: Vertical scalability by upgrading hardware resources.
                        </li>
                        <li>3. Query Language: Standardized SQL for powerful and flexible querying.</li>
                        <li>
                             4. Consistency and Transactions: Emphasize data consistency and provide ACID properties.
                        </li>
                        <li>
                            5. Use Cases: Well-suited for structured data, complex querying, and transactions.
                        </li>
                    </ul>
                     <br />

                    <span className="font-medium text-xl">NoSQL Databases:</span> <br />
                    <ul>
                        <li>1. Data Model: Flexible schema or schema-less structure.</li>
                        <li>2. Scalability: Horizontal scalability by distributing data across multiple servers.</li>
                        <li>
                            3. Query Language: Customized query languages/APIs optimized for specific data models.
                        </li>
                        <li>4. Consistency and Transactions: Prioritize availability and scalability over strict consistency.</li>
                        <li>
                            5. Use Cases: Handle unstructured, semi-structured, or rapidly changing data, ideal for real-time analytics, IoT data storage, and high scalability needs.
                        </li>
                    </ul> 
                </div>
            </div>
            <div className="box-content shadow-xl py-8 mb-5 px-6 bg-slate-100">
                <h1 className="font-bold text-2xl">Q.3 What is express js? What is Nest JS?</h1>
                <p>
                    <span className="font-bold">Express.js</span> is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing routing, middleware, template engines, error handling, and easy integration with other libraries. It is widely used and has a large community support.
                    <br />
                    <span className="font-bold">Nest.js</span> is a scalable and modular web application framework for Node.js. It leverages TypeScript, supports dependency injection, and provides features like middleware, decorators, and interceptors. It promotes clean code organization, integrates with various backend technologies, and prioritizes performance and scalability.
                </p>
            </div>

            <div className="box-content shadow-xl mb-5 py-8 px-6 bg-slate-100">
                <h1 className="font-bold text-2xl">Q.4 What is MongoDB aggregate and how does it work?</h1>
                <p>
                    <span className="font-bold">MongoDB's</span> aggregate operation allows for complex data manipulations and aggregations using a pipeline of stages. It supports filtering, grouping, sorting, projecting, and other operations to transform and analyze data within a collection. It provides powerful capabilities for advanced querying and generating meaningful insights.
                    <br />
                    <span className="font-bold">The MongoDB aggregate operation works</span> by applying a series of stages to data in a collection. Each stage performs a specific operation on the data and passes it to the next stage. The stages can include filtering, grouping, sorting, and other transformations. The data flows through the pipeline, and the final stage produces the desired output. This allows for flexible and powerful data manipulation and aggregation.
                </p>
            </div>
        </div>
    );
};

export default Blogs;