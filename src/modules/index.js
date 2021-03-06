import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import lucky from './lucky'
import profile from './profile'
import global from './global'
import login from './login'
import server from './server'

export default combineReducers({
	routing: routerReducer,
	lucky,
	profile,
	global,
	login,
	server,

})