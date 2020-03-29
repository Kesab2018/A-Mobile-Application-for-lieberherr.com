import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Contact from "./components/Contact.vue";
import Help from "./components/Help.vue";
import Chat from "./components/Chat.vue";
import Forgotpassword from "./components/Forgotpassword.vue";
import Documentation from "./components/Documentation.vue";
import Newsdetail from "./components/Newsdetail.vue";
import Helpdetail from "./components/Helpdetail.vue";
import Contactdetail from "./components/Contactdetail.vue";
import Contactlist from "./components/Contactlist.vue";
import Productlist from "./components/Productlist.vue";
import Productcategory from "./components/Productcategory.vue";
import Productdetail from "./components/Productdetail.vue";
import DocDetail from "./components/DocDetail.vue";
import AddDoc from "./components/AddDoc.vue";
import Manual from "./components/Manual.vue";
import Helpcategory from "./components/Helpcategory.vue";


import i18n from './i18n';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/',
        redirect:`/${i18n.locale}`
    },
        {path: '/:lang',
        component: {render (c) { return c('router-view') }},
        children: [
        {path: '/', component: Home},
        
        {path: 'product', component: Product},
        {path: 'login', component: Login},
        {path: 'Signuppage', component: Signup},
        {path: 'Contact', component: Contact},
        {path: 'Help', component: Help},
        {path: 'Forgotpassword', component: Forgotpassword},
        {path: 'Test', component: Documentation},
        {path: 'Newsdetail/:id', component: Newsdetail},
        {path: 'contactlist/:searchquery', component: Contactlist},
        {path: 'contactdetail/:id', component: Contactdetail},
        {path: 'Productlist/:searchquery', component: Productlist},
        {path: 'Productcategory/:category', component: Productcategory},
        {path: 'Productdetail/:id', component: Productdetail},
        {path: 'documentation/:id', component: Documentation},
        {path: 'AddDoc/:id', component: AddDoc},
        {path: 'DocDetail/:id/:prod', component: DocDetail},
        {path: 'Helpdetail/:id', component: Helpdetail},
        {path: 'Helpcategory/:category', component: Helpcategory},
        {path: 'Chat', component: Chat},
        {path: 'Manual/:link', component: Manual},
        
        
        
        
        
        
        
        
        
        
        
        
        ]
    }
    ]
  })