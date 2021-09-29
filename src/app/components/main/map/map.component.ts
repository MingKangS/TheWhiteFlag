import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import config from "../../../../config/index.json"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

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
			const myLatLng = { lat: -25.363, lng: 131.044 };
			new google.maps.Marker({
				position: myLatLng,
				map,
				title: "Hello World!",
			});
		});
  }

}
