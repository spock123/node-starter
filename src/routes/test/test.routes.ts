import { Router } from 'express';
import * as Endpoints from './endpoints';

const router = Router();

router.get('/test1', Endpoints.test1Endpoint);

export {
    router 
}