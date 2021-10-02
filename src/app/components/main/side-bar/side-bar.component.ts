import { Component, OnInit } from '@angular/core';
import { WhiteFlag, Query } from 'src/app/interfaces/main';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { getAllWhiteFlags } from '../../../graphql/queries'
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	WhiteFlagList$: Observable<WhiteFlag[]>;
  constructor(private store: Store<{whiteflags : WhiteFlag[]}>,) { 
		this.WhiteFlagList$ = store.pipe(select('whiteflags'));
	}

  ngOnInit(): void {
		

  }

}
