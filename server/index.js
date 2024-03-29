import express from 'express'
import {config} from "dotenv";
import path from "path";
import { dirname } from 'path';
import {fileURLToPath} from "url";

config()
const app = express()

const PORT =  process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Express app started on ', PORT)
})
