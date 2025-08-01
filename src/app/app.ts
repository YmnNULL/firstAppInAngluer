import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { About } from "./about/about";
import { Home } from "./home/home";
import { Portfolio } from "./portfolio/portfolio";
import { Contact } from "./contact/contact";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('firstAppAnguer');
}
