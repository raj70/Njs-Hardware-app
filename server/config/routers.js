import laptopcontroller from '../api/controllers/laptopcontroller';
import authenticateController from '../api/controllers/loginController';
import registerController from '../api/controllers/registerController';
import hardwareComputerController from '../api/controllers/hardwareComputerController';


export const setApiControllers = (server) => {
    server.use('/api', laptopcontroller);
    server.use('/api', authenticateController);
    server.use('/api', registerController);
    server.use('/api', hardwareComputerController);
}