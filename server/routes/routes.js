import express from 'express';
import {LoginRoute} from '../controls/login.js'
import {SignRoute} from '../controls/sigin.js'
import {MiddleWare } from '../controls/main.js'
import { DashBoard } from '../controls/dashboard.js'
import {personDetails} from '../controls/person.js';
import { deletePost } from '../controls/deletePost.js';
const routes = express.Router();

routes.post('/login',LoginRoute)
routes.post('/sigup',SignRoute)
routes.get('/dashboard',MiddleWare,DashBoard)
routes.post('/dashboard',MiddleWare,personDetails)
routes.delete('/post/:id',MiddleWare,deletePost)
export default routes;