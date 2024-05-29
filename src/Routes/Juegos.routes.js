import {Router} from 'express'
import { getJuegos,saveJuego, updateJuego, deletJuego } from '../Controllers/JuegosController.js'
import { subirImagen } from '../Middleware/Storage.js'
import { verifiicar } from '../Middleware/Auth.js'
const rutas = Router()

rutas.get('/api/juegos', verifiicar, getJuegos)
rutas.get('/api/juegos/:id', verifiicar, getJuegos)
rutas.post('/api/juegos', verifiicar, subirImagen.single('imagen'), saveJuego)
rutas.put('/api/juegos/:id', verifiicar, subirImagen.single('imagen'), updateJuego)
rutas.delete('/api/juegos/:id', verifiicar, deletJuego)

export default rutas