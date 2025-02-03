import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from "path"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "Documentation using Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server",
            },
        ],
    },
    apis: [path.resolve("src/routes/*.js")]
}

const swaggerSpec = swaggerJsDoc(options)

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get("/swagger.json", (req, res) => {
        res.setHeader("Content-Type", "application/json")
        res.send(swaggerSpec)
    })
}

export default setupSwagger