import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";

import productRouter from "./router/productRouter.js";
import qnaRouter from "./router/qnaRouter.js";
import noticeRouter from "./router/noticeRouter.js";
import pressRouter from "./router/pressRouter.js";
import stockRouter from "./router/stockRouter.js";
import cartRouter from "./router/cartRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import journalRouter from "./router/journalRouter.js";
import memberRouter from "./router/memberRouter.js";
import adminRouter from "./router/adminRouter.js";
import orderRouter from "./router/orderRouter.js";

const server = express();
const port = 8080;

// const bodyParser = require("body-parser");

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
// server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use("/uploads", express.static("uploads"));
// server.use("/uploadsQnaImg", express.static("uploadsQnaImg"));

server.use("/product", productRouter);
server.use("/qna", qnaRouter);
server.use("/notice", noticeRouter);
server.use("/press", pressRouter);
server.use("/stock", stockRouter);
server.use("/cart", cartRouter);
server.use("/order", orderRouter);
server.use("/categories", categoryRouter);
server.use("/journal", journalRouter);
server.use("/member", memberRouter);

server.use("/admin", adminRouter);

server.listen(port, () => {
  console.log(`welcome ${port} server start`);
});
