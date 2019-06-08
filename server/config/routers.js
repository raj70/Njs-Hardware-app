import laptopcontroller from '../api/controllers/laptopcontroller';
import authenticateController from '../api/controllers/loginController';
import registerController from '../api/controllers/registerController';


export const setApiControllers = (server) => {
    server.use('/api', laptopcontroller);
    server.use('/api', authenticateController);
    server.use('/api', registerController);
}