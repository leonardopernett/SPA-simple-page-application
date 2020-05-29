import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.css'
import {router} from './router/indexRouter';

router(window.location.hash);

window.addEventListener('hashchange',()=>{
    router(window.location.hash)
})