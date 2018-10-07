import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Application';
  blogs=[
    {
      title:"Le football et la mondialisation",
      content:"le football plus que beaucoup d'autres domaines et plus que tous les sports rassemble des personnes de differentes races, confessions religieuses de part le monde",
      loveIts:5.,
      createdDate:new Date()
    },
    {
      title:"La cuisine africaine",
      content:"bien plus diversifiee que la cuisine europeene, elle est inscrite au patrimoine mondiale de la gastronomie comme",
      loveIts:4.,
      createdDate:new Date()
    },
    {
      title:"La politique en afrique",
      content:"le football plus que beaucoup d'autres domaines et plus que tous les sports rassemble des personnes de differentes races, confessions religieuses de part le monde",
      loveIts:-4.,
      createdDate:new Date()
    },
    {
      title:"Le neocolonialisme en afrique",
      content:"le football plus que beaucoup d'autres domaines et plus que tous les sports rassemble des personnes de differentes races, confessions religieuses de part le monde",
      loveIts:3.,
      createdDate:new Date()
    }
  ]
}
