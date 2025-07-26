import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: "", component: Home, title: "Home" },
    { path: "home", component: Home, title: "Home" },
    { path: "about", component: About, title: "About" },
    { path: "portfolio", component: Portfolio, title: "Portfolio" },
    { path: "contact", component: Contact, title: "Contact" },
    { path: "**", component: NotFound, title: "NotFound" },
];
