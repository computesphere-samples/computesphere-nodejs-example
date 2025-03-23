<p align="right">
    <a href="https://computesphere.com/"><img src="https://pepublicassets.blob.core.windows.net/public-assets/computesphere-favicon.svg" width="50px" /></a>
</p>

# ComputeSphere NodeJS Example

This example deploys a NodeJS application to ComputeSphere.

> [!NOTE]
> This guide builds a Docker image for the provided sample code. Please note that the version `v0.0.1` used in the example is only for demonstration. You should replace it with a version that suits your specific setup and requirements.

## Prerequisites

- A [ComputeSphere](https://computesphere.com) account
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/package-manager) (includes npm) - To build the project
- [Docker](https://docs.docker.com/engine/install/) - To create and deploy the image

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
    docker build -t computesphere-nodejs-example:v.0.0.1 .
    ```

    Alternatively, you can use the `docker buildx --build` command to utilize Docker's BuildKit which offers several improvements over the traditional Docker build.
    
    ```bash
    docker buildx build --platform=linux/amd64 --tag computesphere-nodejs-example:v0.0.1 .
    ``` 

4. Push the image to Docker Hub.

    ```bash
    docker tag computesphere-nodejs-example:v0.0.1 [REPOSITORY]/computesphere-nodejs-example:v0.0.1

    docker push [REPOSITORY]/computesphere-nodejs-example:v0.0.1
    ```

> [!NOTE]
> Be sure to log in to Docker Hub and replace `[REPOSITORY]` with your Docker Hub username.

## Running the project locally

Run the server locally.

```bash
cd computesphere-nodejs-example

npm start
```

This runs the server on `localhost:3000`.

## Deploy to ComputeSphere

<!-- Add a link to the blog once published -->
See our [guide](https://docs.computesphere.com/docs/getting-started/quickstart/getting-started-with-nodejs) on how to deploy this project to ComputeSphere.

<!-- Check if this is the right link to the dashboard -->
<a href="https://console.computesphere.com"> <img src="https://pepublicassets.blob.core.windows.net/public-assets/computesphere-full-logo.png" width="350px" alt="ComputeSphere Logo"> </a>

---
[Explore ComputeSphere Documentation](https://docs.computesphere.com)

**Contact Us:**  
[support@computesphere.com](mailto:support@computesphere.com)  
[Support Portal](https://support.computesphere.com/portal)

&copy; 2025 ComputeSphere LLC. All Rights Reserved.

---
