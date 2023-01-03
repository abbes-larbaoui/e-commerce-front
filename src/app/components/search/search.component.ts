import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch(value: string) {
<<<<<<< HEAD
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
=======
    this.router.navigateByUrl(`/search/${value}`);
  }

>>>>>>> refs/remotes/e-commerce-front/master
}
