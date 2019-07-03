import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string;
  // isLoading: boolean;

  constructor(private  userService: UserService) { }

  ngOnInit() {
    // this.isLoading = true;
    // todo: add code to list all accounts connected to this dash_user
  }

  loginToTwitter() {
    this.userService.twitterLogin()
      .subscribe((url) => {
        window.open(url, '_self');
      });
  }

}
