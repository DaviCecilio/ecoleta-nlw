import express from "express"

const app = express()

app.get("/users", (req, resp) => {
  console.log("test")

  resp.json({message: "Hello World"})
})

app.listen(3333)
