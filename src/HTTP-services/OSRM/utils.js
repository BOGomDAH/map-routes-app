import osrmApi from "./osrmApi.js";

export const fetchRouteData = async (route) => {
    try {
        const routePolyline = await osrmApi.getRoutePositions(route);
        return routePolyline;
    } catch (error) {
        throw error;
    }
}