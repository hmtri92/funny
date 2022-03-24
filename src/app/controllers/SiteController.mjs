import { renderSync } from 'node-sass';

class Site {

    // [GET] /
    index (req, res) {
        res.render('home');
    }
}

export default new Site;