import { Component, OnInit } from '@angular/core';
import { WhiteFlag, Query } from 'src/app/interfaces/main';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { getAllWhiteFlags } from '../../../graphql/queries'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	WhiteFlagList: WhiteFlag[] = [];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
		this.apollo.watchQuery<Query>({
      query: getAllWhiteFlags
    })
      .valueChanges
			.subscribe(({data, loading}) => {
				console.log(data, loading);
			})
  }

}
