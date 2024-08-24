import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, 'holyberserk-main')));

app.listen(6969, () => {console.log("6969!! HEHE NICE")});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "holyberserk-main", "index.html"));
});