<p align="right">
    <img src="public/assets/logo.svg" width="50px" />
</p>

# ComputeSphere NodeJS Example

This example deploys a NodeJS application to ComputeSphere.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager) (includes npm) - To build the project
- [Docker](https://docs.docker.com/engine/install/) - To create and deploy the image
- A [ComputeSphere](https://computesphere.com) account. Sign up for free and [see our docs](https://docs.computesphere.com/) for more information on getting started.

## Setup

1. Clone this repository.

    ```bash
    git clone https://github.com/computesphere-samples/computesphere-nodejs-example.git

    cd computesphere-nodejs-example
    ```

2. Install the required dependencies.

    ```bash
    npm install
    ```

3. Create the docker image.

    ```bash
    docker build -t computesphere-nodejs-example .
    ```

4. Push the image to Docker Hub.

    ```bash
    docker tag computesphere-nodejs-example:latest [REPOSITORY]/computesphere-nodejs-example:latest

    docker push [REPOSITORY]/computesphere-nodejs-example
    ```

> [!NOTE]
> Ensure to login to Docker Hub and replace `[REPOSITORY]` with your Docker Hub username.

## Running the project locally

Run the server locally.

```bash
cd computesphere-nodejs-example

npm start
```

This runs the server on `localhost:3000`.

## Deploy to ComputeSphere

<!-- Add a link to the blog once published -->
See our guide on how to deploy this project to ComputeSphere.

<!-- Check if this is the right link to the dashboard -->
<a href="https://console.computesphere.com"> <img src="https://perizer.com/wp-content/uploads/2024/01/Group-1-1.png" alt="ComputeSphere Logo"> </a>

---
[Explore ComputeSphere Documentation](https://docs.computesphere.com)

**Contact Us:**  
[support@computesphere.com](mailto:support@computesphere.com)  
[Support Portal](https://support.computesphere.com/portal)

&copy; 2024 Perizer Corp. All Rights Reserved.

---