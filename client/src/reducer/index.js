import {combineReducers} from 'redux'
import Post from './Post'
import Token from './Token'
import Sigup from './Sigup'
import postPerson from './postPerson'
import postDelete from './postDelete'
export default combineReducers({
    Post,
    Token,
    Sigup,
    postPerson,
    postDelete,
})