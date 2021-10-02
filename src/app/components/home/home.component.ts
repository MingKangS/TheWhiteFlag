import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setWhiteFlags } from 'src/app/state/whiteflags.actions';
import { Apollo } from 'apollo-angular';
import { getAllWhiteFlags } from '../../graphql/queries'
import { WhiteFlag, Query } from 'src/app/interfaces/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	WhiteFlagList$ : Observable<WhiteFlag[]>;
  constructor(
		private store: Store<{whiteflags : WhiteFlag[]}>,
		private apollo: Apollo
	) { 
		this.WhiteFlagList$ = store.pipe(select('whiteflags'));

		this.apollo.watchQuery<any>({
      query: getAllWhiteFlags
    })
		.valueChanges
		.subscribe(({data, loading}) => {
			console.log(data.allWhiteFlags, loading);
			this.store.dispatch(setWhiteFlags({payload: {WhiteFlags: data.allWhiteFlags }}));
		})
	}

  ngOnInit(): void {
  }

	increment(){
    this.store.dispatch(setWhiteFlags({payload: {WhiteFlags: []}}));
  }

}
