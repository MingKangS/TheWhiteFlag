import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import config from "../../../../config/index.json"
import { Observable } from 'rxjs';
import { getAllWhiteFlags } from '../../../graphql/queries'
import { select, Store } from '@ngrx/store';
import { WhiteFlag, Query } from 'src/app/interfaces/main';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
	WhiteFlagList$: Observable<WhiteFlag[]>;
  constructor(private store: Store<{whiteflags : WhiteFlag[]}>) { 
		this.WhiteFlagList$ = store.pipe(select('whiteflags'));
	}

  ngOnInit(): void {
		const loader = new Loader({
			apiKey: config.MAPS_API_KEY,
			version: "weekly",
		});

		let map: google.maps.Map;
		
		loader.load().then(() => {
			map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 18,
			});

			this.WhiteFlagList$.subscribe(WhiteFlagList => {
				for (var wf of WhiteFlagList) {
					
					new google.maps.Marker({
						position: wf.coordinates,
						map,
						title: wf.name,
					});
				}
				
			})
			
		});
  }

}
