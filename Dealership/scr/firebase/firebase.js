import app from 'firebase/compat/app';
import 'firebase/compat/firestore'

import firebaseConfig from './config';


class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }

        this.db = app.firestore();
        console.log('conectar a db')
    }
}

const firebase = new Firebase();
export default firebase; 