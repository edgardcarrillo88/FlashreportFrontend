import MapWithLoader from '../components/Map'

const Mapamapita = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  }

  return (
    <div>
      <h1>Mapa de Google Maps con Next.js</h1>
      <MapWithLoader
        mapContainerStyle={mapContainerStyle}
      />
    </div>
  )
}

export default Mapamapita
