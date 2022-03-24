import express from 'express';
import morgan from 'morgan';
import { join } from 'path';
import { engine } from 'express-handlebars';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.route.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 4000;

const app = express();

// Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', join(__dirname, 'resources/views'));

// HTTP logger
app.use(morgan('combined'));

// Static files
app.use(express.static(join(__dirname, 'public')));

route(app);

app.listen(port, () => console.log(`Funny app listening on port http://localhost:${port}`));