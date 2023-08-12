export const loadMapApi = () => {
    const mapsURL = `${import.meta.env.VITE_GOOGLE_MAPS_API_URL}?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`
    const scripts = document.getElementsByTagName('script');
    
    // Go through existing script tags, and return google maps api tag when found.
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i]
        }
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
};