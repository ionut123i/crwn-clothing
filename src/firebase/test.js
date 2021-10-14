import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firestore=firebase.firestore();

firestore.collection('users')
.doc('Ndk8huqx0EwgI08qXxnr')
.collection('cartItems')
.doc('f3bCuzmjG5wQRry79xYB')
firestore.doc('/users/Ndk8huqx0EwgI08qXxnr/cartItems/f3bCuzmjG5wQRry79xYB')
firestore.collection('/users/Ndk8huqx0EwgI08qXxnr/cartItems/')