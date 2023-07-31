import axios from "axios";

const useOSRMService = () => {
    const OSRM_API_BASE_URL = "http://router.project-osrm.org/route/v1";

    const fetchRoutePolyline = async (points) => {
        const coordinates = points.map(arr => arr.join(',')).join(';');
        const url = `${OSRM_API_BASE_URL}/driving/${coordinates}?geometries=geojson`;
        const response = await axios.get(url);
        const routeData = response.data;
        const routePolyline = routeData?.routes[0]?.geometry;
        return routePolyline;
    }

    return {fetchRoutePolyline}
}

export default useOSRMService;