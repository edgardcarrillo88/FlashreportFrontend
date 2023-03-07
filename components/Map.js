// import { useState } from 'react'
// import { GoogleMap, Marker } from 'react-google-maps'
// import { useLoadScript } from '@react-google-maps/api'

// const libraries = ['places']
// const mapContainerStyle = {
//   width: '100%',
//   height: '400px'
// }
// const center = {
//   lat: 40.416775,
//   lng: -3.70379
// }
// const options = {
//   zoomControl: true,
//   disableDefaultUI: true
// }

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     libraries
//   })

//   const [markers, setMarkers] = useState([])

//   const onMapClick = (event) => {
//     setMarkers(current => [...current, {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//       time: new Date()
//     }])
//   }

//   if (loadError) return <p>Error al cargar el mapa</p>
//   if (!isLoaded) return <p>Cargando...</p>

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={8}
//       center={center}
//       options={options}
//       onClick={onMapClick}
//     >
//       {markers.map(marker => (
//         <Marker
//           key={`${marker.lat}-${marker.lng}`}
//           position={{ lat: marker.lat, lng: marker.lng }}
//         />
//       ))}
//     </GoogleMap>
//   )
// }

// export default Map



// import { useState } from 'react'
// import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
// import { useLoadScript } from '@react-google-maps/api'

// const libraries = ['places']
// const mapContainerStyle = {
//   width: '100%',
//   height: '400px'
// }
// const center = {
//   lat: 40.416775,
//   lng: -3.70379
// }
// const options = {
//   zoomControl: true,
//   disableDefaultUI: true
// }

// const Map = withGoogleMap((props) => {
//   const [markers, setMarkers] = useState([])

//   const onMapClick = (event) => {
//     setMarkers(current => [...current, {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//       time: new Date()
//     }])
//   }

//   return (
//     <GoogleMap
//       google={props.google}
//       mapContainerStyle={props.mapContainerStyle}
//       zoom={8}
//       center={center}
//       options={options}
//       onClick={onMapClick}
//     >
//       {markers.map(marker => (
//         <Marker
//           key={`${marker.lat}-${marker.lng}`}
//           position={{ lat: marker.lat, lng: marker.lng }}
//         />
//       ))}
//     </GoogleMap>
//   )
// })

// export default Map



import { useState } from 'react'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
import { useLoadScript } from '@react-google-maps/api'

const libraries = ['places']
const mapContainerStyle = {
  width: '100%',
  height: '400px'
}
const center = {
  lat: 40.416775,
  lng: -3.70379
}
const options = {
  zoomControl: true,
  disableDefaultUI: true
}

const Map = withGoogleMap((props) => {
  const [markers, setMarkers] = useState([])

  const onMapClick = (event) => {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    }])
  }

  return (
    <GoogleMap
      mapContainerStyle={props.mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={onMapClick}
    >
      {markers.map(marker => (
        <Marker
          key={`${marker.lat}-${marker.lng}`}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </GoogleMap>
  )
})

const MapWithLoader = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (loadError) return <div>Error al cargar el mapa</div>
  if (!isLoaded) return <div>Cargando el mapa...</div>

  return <Map {...props} />
}

export default MapWithLoader
