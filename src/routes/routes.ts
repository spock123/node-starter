import { Router } from 'express';
const MODULE = '[Routes]';

import testRoutes from './test';


const getRoutes = (): Router => {
    try {
        console.log(MODULE, 'Configuring routes');
        const router: Router = Router();
        router.use('/test', testRoutes);

        console.log(MODULE, 'Routes configured');
        return router;
    }
    catch(err) {
        throw err;
    }
}

const routes = getRoutes();

export {
    routes
}




