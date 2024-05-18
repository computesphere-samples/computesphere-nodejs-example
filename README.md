<p align="right">
    <img src="public/assets/logo.svg" width="50px" />
</p>

# ComputeSphere NodeJS Example

This is the example for the tutorial on deploying a NodeJS project to ComputeSphere.

## Prerequisites

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
    docker build -t computesphere-nodejs-example .
    ```

4. Push the image to Docker Hub.

    ```bash
    docker tag computesphere-nodejs-example:latest [YOUR_USERNAME]/computesphere-nodejs-example:latest

    docker push [YOUR_USERNAME]/computesphere-nodejs-example
    ```

    > [!NOTE]
    > Ensure to login to Docker Hub and replace `[YOUR_USERNAME]` with your Docker Hub username.

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

---
<p align="left">
    <img src="public/assets/logo.svg" width="50x" />
</p>

[Explore ComputeSphere Documentation](https://docs.computesphere.com)

**Contact Us:**  
[support@computesphere.com](mailto:support@computesphere.com)  
[Support Portal](https://support.computesphere.com/portal)

&copy; 2024 Perizer Corp. All Rights Reserved.

---