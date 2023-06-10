import { Injectable } from '@angular/core';
import { City } from '../../models/City';

@Injectable({
    providedIn: 'root'
})
export class ForecastConstants {
    public API_URL: string = 'https://api.open-meteo.com/v1/forecast'
    
    public listCitiesUS: readonly City[] = [
        {
            name: 'Montgomery', 
            state: 'Alabama', 
            latitude: 32.377716, 
            longitude: -86.300568, 
        },
        {
            name: 'Juneau', 
            state: 'Alaska', 
            latitude: 58.301598, 
            longitude: -134.420212, 
        },
        {
            name: 'Phoenix', 
            state: 'Arizona', 
            latitude: 33.448143, 
            longitude: -112.096962, 
        },
        {
            name: 'Little Rock', 
            state: 'Arkansas', 
            latitude: 34.746613, 
            longitude: -92.288986, 
        },
        {
            name: 'Sacramento', 
            state: 'California', 
            latitude: 38.576668, 
            longitude: -121.493629, 
        },
        {
            name: 'Denver', 
            state: 'Colorado', 
            latitude: 39.739227, 
            longitude: -104.984856, 
        },
        {
            name: 'Hartford<br>', 
            state: 'Connecticut', 
            latitude: 41.764046, 
            longitude: -72.682198, 
        },
        {
            name: 'Dover', 
            state: 'Delaware', 
            latitude: 39.157307, 
            longitude: -75.519722, 
        },
        {
            name: 'Honolulu', 
            state: 'Hawaii', 
            latitude: 21.307442, 
            longitude: -157.857376, 
        },
        {
            name: 'Tallahassee', 
            state: 'Florida', 
            latitude: 30.438118, 
            longitude: -84.281296, 
        },
        {
            name: 'Atlanta<br>', 
            state: 'Georgia', 
            latitude: 33.749027, 
            longitude: -84.388229, 
        },
        {
            name: 'Boise', 
            state: 'Idaho', 
            latitude: 43.617775, 
            longitude: -116.199722, 
        },
        {
            name: 'Springfield', 
            state: 'Illinois', 
            latitude: 39.798363, 
            longitude: -89.654961, 
        },
        {
            name: 'Indianapolis', 
            state: 'Indiana', 
            latitude: 39.768623, 
            longitude: -86.162643, 
        },
        {
            name: 'Des Moines', 
            state: 'Iowa', 
            latitude: 41.591087, 
            longitude: -93.603729, 
        },
        {
            name: 'Topeka', 
            state: 'Kansas', 
            latitude: 39.048191, 
            longitude: -95.677956, 
        },
        {
            name: 'Frankfort', 
            state: 'Kentucky', 
            latitude: 38.186722, 
            longitude: -84.875374, 
        },
        {
            name: 'Baton Rouge', 
            state: 'Louisiana', 
            latitude: 30.457069, 
            longitude: -91.187393, 
        },
        {
            name: 'Augusta', 
            state: 'Maine', 
            latitude: 44.307167, 
            longitude: -69.781693, 
        },
        {
            name: 'Annapolis', 
            state: 'Maryland', 
            latitude: 38.978764, 
            longitude: -76.490936, 
        },
        {
            name: 'Boston', 
            state: 'Massachusetts', 
            latitude: 42.358162, 
            longitude: -71.063698, 
        },
        {
            name: 'Lansing', 
            state: 'Michigan', 
            latitude: 42.733635, 
            longitude: -84.555328, 
        },
        {
            name: 'St. Paul', 
            state: 'Minnesota', 
            latitude: 44.955097, 
            longitude: -93.102211, 
        },
        {
            name: 'Jackson', 
            state: 'Mississippi', 
            latitude: 32.303848, 
            longitude: -90.182106, 
        },
        {
            name: 'Jefferson City', 
            state: 'Missouri', 
            latitude: 38.579201, 
            longitude: -92.172935, 
        },
        {
            name: 'Helena', 
            state: 'Montana', 
            latitude: 46.585709, 
            longitude: -112.018417, 
        },
        {
            name: 'Lincoln', 
            state: 'Nebraska', 
            latitude: 40.808075, 
            longitude: -96.699654, 
        },
        {
            name: 'Carson City', 
            state: 'Nevada', 
            latitude: 39.163914, 
            longitude: -119.766121, 
        },
        {
            name: 'Concord', 
            state: 'New Hampshire', 
            latitude: 43.206898, 
            longitude: -71.537994, 
        },
        {
            name: 'Trenton', 
            state: 'New Jersey', 
            latitude: 40.220596, 
            longitude: -74.769913, 
        },
        {
            name: 'Santa Fe', 
            state: 'New Mexico', 
            latitude: 35.68224, 
            longitude: -105.939728, 
        },
        {
            name: 'Raleigh', 
            state: 'North Carolina', 
            latitude: 35.78043, 
            longitude: -78.639099, 
        },
        {
            name: 'Bismarck', 
            state: 'North Dakota', 
            latitude: 46.82085, 
            longitude: -100.783318, 
        },
        {
            name: 'Albany', 
            state: 'New York', 
            latitude: 42.652843, 
            longitude: -73.757874, 
        },
        {
            name: 'Columbus', 
            state: 'Ohio', 
            latitude: 39.961346, 
            longitude: -82.999069, 
        },
        {
            name: 'Oklahoma City', 
            state: 'Oklahoma', 
            latitude: 35.492207, 
            longitude: -97.503342, 
        },
        {
            name: 'Salem', 
            state: 'Oregon', 
            latitude: 44.938461, 
            longitude: -123.030403, 
        },
        {
            name: 'Harrisburg', 
            state: 'Pennsylvania', 
            latitude: 40.264378, 
            longitude: -76.883598, 
        },
        {
            name: 'Providence', 
            state: 'Rhode Island', 
            latitude: 41.830914, 
            longitude: -71.414963, 
        },
        {
            name: 'Columbia', 
            state: 'South Carolina', 
            latitude: 34.000343, 
            longitude: -81.033211, 
        },
        {
            name: 'Pierre', 
            state: 'South Dakota', 
            latitude: 44.367031, 
            longitude: -100.346405, 
        },
        {
            name: 'Nashville', 
            state: 'Tennessee', 
            latitude: 36.16581, 
            longitude: -86.784241, 
        },
        {
            name: 'Austin', 
            state: 'Texas', 
            latitude: 30.27467, 
            longitude: -97.740349, 
        },
        {
            name: 'Salt Lake City', 
            state: 'Utah', 
            latitude: 40.777477, 
            longitude: -111.888237, 
        },
        {
            name: 'Montpelier', 
            state: 'Vermont', 
            latitude: 44.262436, 
            longitude: -72.580536, 
        },
        {
            name: 'Richmond', 
            state: 'Virginia', 
            latitude: 37.538857, 
            longitude: -77.43364, 
        },
        {
            name: 'Olympia', 
            state: 'Washington', 
            latitude: 47.035805, 
            longitude: -122.905014, 
        },
        {
            name: 'Charleston', 
            state: 'West Virginia', 
            latitude: 38.336246, 
            longitude: -81.612328, 
        },
        {
            name: 'Madison', 
            state: 'Wisconsin', 
            latitude: 43.074684, 
            longitude: -89.384445, 
        },
        {
            name: 'Cheyenne', 
            state: 'Wyoming', 
            latitude: 41.140259, 
            longitude: -104.820236, 
        },
    ]
}