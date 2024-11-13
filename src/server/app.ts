import express, {Express, Request, Response} from "express";
import * as http from "http";
import {Server as SocketIOServer } from "socket.io";

const app: Express = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Maze Race");
})

app.use('/client', express.static(__dirname + "client"));

const io = new SocketIOServer(server, {
    cors: {
        origin: '*',
    }
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
