import axios from 'axios';

class OSRMapi {
    _baseUrl = 'http://router.project-osrm.org/route/v1';

     getRoutePositions = async (route) => {
        try {
            const response = await axios.get(this._makeUrl(route));
            const routeData = response.data;
            const routePositions = routeData?.routes[0]?.geometry?.coordinates;
            return routePositions;
        } catch (error) {
            throw new Error(`Failed to fetch this route`)
        }
    }

    _makeUrl = (route) => {
        const coordinates = route.map((arr) => arr.join(',')).join(';');
        const url = `${this._baseUrl}/driving/${coordinates}?geometries=geojson`;
        return url
    }
}

const osrmApi = new OSRMapi();

export default osrmApi;