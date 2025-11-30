import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #FF6B9D 0%, #C239B3 100%);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style="transform: rotate(45deg);">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

interface Venue {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  address: string;
  image: string;
  price: string;
  age: string;
  lat: number;
  lng: number;
}

interface MapProps {
  venues: Venue[];
  center?: [number, number];
  zoom?: number;
}

const Map = ({ venues, center = [53.9, 27.56], zoom = 13 }: MapProps) => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
  }, []);

  const handleGetDirections = (venue: Venue) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallVenue = () => {
    window.open('tel:+375291234567', '_self');
  };

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border-4 border-white shadow-2xl">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {venues.map((venue) => (
          <Marker
            key={venue.id}
            position={[venue.lat, venue.lng]}
            icon={customIcon}
          >
            <Popup maxWidth={300} className="custom-popup">
              <Card className="border-0 shadow-none">
                <div className="relative h-32 -mx-1 -mt-1 mb-2 overflow-hidden rounded-t-lg">
                  <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-white/90 text-gray-800">
                    {venue.price}
                  </Badge>
                </div>
                <CardHeader className="p-3 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-heading leading-tight">
                      {venue.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 shrink-0">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{venue.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-xs">{venue.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Icon name="MapPin" size={12} />
                      {venue.address}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Icon name="Users" size={12} />
                      {venue.age}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90"
                      onClick={() => handleGetDirections(venue)}
                    >
                      <Icon name="Navigation" size={12} className="mr-1" />
                      Маршрут
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 h-8 text-xs border-2"
                      onClick={handleCallVenue}
                    >
                      <Icon name="Phone" size={12} className="mr-1" />
                      Позвонить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;