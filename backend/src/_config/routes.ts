import { Router } from "express";
const multer = require('multer');
import uploadConfig from '../_config/upload';
import animalController from '../features/animais/controllers';
import authControler from '../features/auth/controllers';
import userController from '../features/usuario/controllers';


const routes = Router();
const upload = multer(uploadConfig);

routes.post('/pets', upload.array('foto'), animalController.create);
routes.post('/login', authControler.auth);
routes.post('/user/redefine', userController.redefine);
routes.post('/user/create', userController.create);
routes.get('/pets/list', animalController.list);
routes.get('/pets/list/one/:id', animalController.listOne);

export default routes;