import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = [
    { id: 1, name: 'Развлекательные центры', icon: 'PartyPopper', color: 'bg-primary' },
    { id: 2, name: 'Кружки и секции', icon: 'Palette', color: 'bg-secondary' },
    { id: 3, name: 'Детские кафе', icon: 'UtensilsCrossed', color: 'bg-accent' },
    { id: 4, name: 'Магазины', icon: 'ShoppingBag', color: 'bg-success' },
    { id: 5, name: 'Услуги', icon: 'Heart', color: 'bg-primary' },
  ];

  const venues = [
    {
      id: 1,
      name: 'Детский мир развлечений',
      category: 'Развлекательные центры',
      rating: 4.8,
      reviews: 127,
      address: 'ул. Ленина, 45',
      image: 'https://cdn.poehali.dev/projects/a25511fd-3659-4f1d-85ff-eaaa395f6547/files/eb7b732c-3b36-4d13-aef0-68bfd863b5cf.jpg',
      price: '$$',
      age: '3-12 лет',
      lat: 53.9045,
      lng: 27.5615,
    },
    {
      id: 2,
      name: 'Академия творчества',
      category: 'Кружки и секции',
      rating: 4.9,
      reviews: 89,
      address: 'пр. Победы, 12',
      image: 'https://cdn.poehali.dev/projects/a25511fd-3659-4f1d-85ff-eaaa395f6547/files/a06d7428-97de-41c9-b372-ca55a833eee7.jpg',
      price: '$',
      age: '5-14 лет',
      lat: 53.9168,
      lng: 27.5951,
    },
    {
      id: 3,
      name: 'Сказочное кафе',
      category: 'Детские кафе',
      rating: 4.7,
      reviews: 156,
      address: 'ул. Советская, 78',
      image: 'https://cdn.poehali.dev/projects/a25511fd-3659-4f1d-85ff-eaaa395f6547/files/eb7b732c-3b36-4d13-aef0-68bfd863b5cf.jpg',
      price: '$$',
      age: '0-12 лет',
      lat: 53.8935,
      lng: 27.5474,
    },
    {
      id: 4,
      name: 'Детский спортивный клуб',
      category: 'Кружки и секции',
      rating: 4.6,
      reviews: 78,
      address: 'ул. Кирова, 23',
      image: 'https://cdn.poehali.dev/projects/a25511fd-3659-4f1d-85ff-eaaa395f6547/files/a06d7428-97de-41c9-b372-ca55a833eee7.jpg',
      price: '$$',
      age: '6-16 лет',
      lat: 53.9100,
      lng: 27.5700,
    },
    {
      id: 5,
      name: 'Магазин игрушек "Малыш"',
      category: 'Магазины',
      rating: 4.5,
      reviews: 203,
      address: 'пр. Независимости, 56',
      image: 'https://cdn.poehali.dev/projects/a25511fd-3659-4f1d-85ff-eaaa395f6547/files/eb7b732c-3b36-4d13-aef0-68bfd863b5cf.jpg',
      price: '$',
      age: '0-14 лет',
      lat: 53.9000,
      lng: 27.5600,
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Елена М.',
      avatar: 'EM',
      rating: 5,
      venue: 'Детский мир развлечений',
      text: 'Отличное место для детей! Чисто, безопасно, дети в восторге. Аниматоры очень профессиональные.',
      date: '2 дня назад',
    },
    {
      id: 2,
      author: 'Дмитрий К.',
      avatar: 'ДК',
      rating: 5,
      venue: 'Академия творчества',
      text: 'Ребёнок ходит на рисование уже полгода. Заметен прогресс! Преподаватели находят подход к каждому.',
      date: '1 неделю назад',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-teal-50">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КидМап
              </span>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`font-medium transition-colors ${
                  activeTab === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Главная
              </button>
              <a
                href="#map"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('map');
                  document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium transition-colors ${
                  activeTab === 'map' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Карта
              </a>
              <button
                onClick={() => setActiveTab('catalog')}
                className={`font-medium transition-colors ${
                  activeTab === 'catalog' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`font-medium transition-colors ${
                  activeTab === 'about' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`font-medium transition-colors ${
                  activeTab === 'contacts' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                Контакты
              </button>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={18} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Лучшие места для детей на карте вашего города
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Находите развлечения, кружки, кафе и магазины для вашего ребёнка. Читайте отзывы родителей и делитесь своим опытом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-12">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Найти место, категорию..."
                className="pl-10 h-12 text-lg border-2 focus-visible:ring-primary"
              />
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8">
              Найти
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant="outline"
                className="border-2 hover:scale-105 transition-transform"
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="map-section" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold">Карта детских мест</h2>
            <div className="flex gap-2">
              <Button
                variant={activeFilter === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(null)}
                className="border-2"
              >
                Все
              </Button>
              {categories.slice(0, 3).map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeFilter === cat.name ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(cat.name)}
                  className="border-2 hidden md:flex"
                >
                  <Icon name={cat.icon as any} size={14} className="mr-1" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.3),transparent_70%)]" />
                
                <div className="absolute top-4 left-4 z-10">
                  <Card className="shadow-lg border-2">
                    <CardContent className="p-3 flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="text-sm font-medium">Минск, Беларусь</span>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Button size="sm" variant="secondary" className="shadow-lg">
                    <Icon name="Navigation" size={16} className="mr-1" />
                    Моё местоположение
                  </Button>
                </div>

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                  <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                      <feOffset dx="0" dy="2" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {venues
                    .filter(v => activeFilter === null || v.category === activeFilter)
                    .map((venue, index) => {
                      const x = 150 + index * 130 + (index % 2) * 50;
                      const y = 200 + (index % 3) * 80;
                      const isSelected = selectedVenue === venue.id;
                      const colors = {
                        'Развлекательные центры': '#ec4899',
                        'Кружки и секции': '#8b5cf6',
                        'Детские кафе': '#f97316',
                        'Магазины': '#10b981',
                        'Услуги': '#06b6d4'
                      };
                      const color = colors[venue.category as keyof typeof colors] || '#ec4899';

                      return (
                        <g
                          key={venue.id}
                          className="cursor-pointer transition-transform duration-200 hover:scale-110"
                          onClick={() => setSelectedVenue(isSelected ? null : venue.id)}
                          filter="url(#shadow)"
                        >
                          <circle
                            cx={x}
                            cy={y}
                            r={isSelected ? 28 : 20}
                            fill={color}
                            opacity={isSelected ? 1 : 0.9}
                            className="transition-all duration-200"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r={isSelected ? 22 : 14}
                            fill="white"
                            opacity={0.9}
                          />
                          {isSelected && (
                            <>
                              <circle
                                cx={x}
                                cy={y}
                                r={35}
                                fill="none"
                                stroke={color}
                                strokeWidth="2"
                                opacity="0.4"
                                className="animate-ping"
                              />
                              <line
                                x1={x}
                                y1={y + 28}
                                x2={x}
                                y2={y + 45}
                                stroke={color}
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </>
                          )}
                        </g>
                      );
                    })}
                </svg>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="border-2 h-[500px] overflow-y-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="List" size={20} />
                    {selectedVenue ? 'Информация о месте' : 'Список мест'}
                  </CardTitle>
                  <CardDescription>
                    {selectedVenue
                      ? 'Подробная информация'
                      : `Найдено ${venues.filter(v => activeFilter === null || v.category === activeFilter).length} мест`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedVenue ? (
                    <div className="space-y-4 animate-fade-in">
                      {venues
                        .filter(v => v.id === selectedVenue)
                        .map(venue => (
                          <div key={venue.id}>
                            <img
                              src={venue.image}
                              alt={venue.name}
                              className="w-full h-40 object-cover rounded-lg mb-3"
                            />
                            <h3 className="font-heading font-bold text-lg mb-2">{venue.name}</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="Tag" size={14} />
                                {venue.category}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="MapPin" size={14} />
                                {venue.address}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="Users" size={14} />
                                {venue.age}
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                                {venue.rating} ({venue.reviews} отзывов)
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon name="DollarSign" size={14} />
                                {venue.price}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button className="flex-1 bg-primary" size="sm">
                                <Icon name="Phone" size={14} className="mr-1" />
                                Позвонить
                              </Button>
                              <Button variant="outline" className="flex-1" size="sm">
                                <Icon name="ExternalLink" size={14} className="mr-1" />
                                Сайт
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              className="w-full mt-2"
                              size="sm"
                              onClick={() => setSelectedVenue(null)}
                            >
                              Назад к списку
                            </Button>
                          </div>
                        ))}
                    </div>
                  ) : (
                    venues
                      .filter(v => activeFilter === null || v.category === activeFilter)
                      .map(venue => (
                        <button
                          key={venue.id}
                          onClick={() => setSelectedVenue(venue.id)}
                          className="w-full text-left p-3 rounded-lg border-2 hover:border-primary hover:shadow-md transition-all hover:scale-105"
                        >
                          <div className="flex items-start gap-3">
                            <img
                              src={venue.image}
                              alt={venue.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm truncate">{venue.name}</h4>
                              <p className="text-xs text-gray-600 truncate">{venue.category}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Icon name="Star" size={12} className="fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-medium">{venue.rating}</span>
                              </div>
                            </div>
                            <Icon name="ChevronRight" size={16} className="text-gray-400 shrink-0" />
                          </div>
                        </button>
                      ))
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold">Популярные места</h2>
          <Button variant="ghost" className="text-primary">
            Смотреть все
            <Icon name="ChevronRight" size={18} className="ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-scale-in border-2">
              <div className="relative h-48 overflow-hidden">
                <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 hover:bg-white">
                  {venue.price}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl font-heading">{venue.name}</CardTitle>
                  <div className="flex items-center gap-1 shrink-0">
                    <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{venue.rating}</span>
                  </div>
                </div>
                <CardDescription>{venue.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MapPin" size={16} />
                    {venue.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Users" size={16} />
                    {venue.age}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="MessageSquare" size={16} />
                    {venue.reviews} отзывов
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Отзывы родителей
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <CardTitle className="text-lg">{review.author}</CardTitle>
                        {renderStars(review.rating)}
                      </div>
                      <CardDescription className="text-sm">
                        {review.venue} • {review.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Plus" size={18} className="mr-2" />
              Добавить отзыв
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Вы владелец детского заведения?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Зарегистрируйтесь бесплатно и добавьте своё заведение на карту. Привлекайте новых клиентов!
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="Store" size={20} className="mr-2" />
            Добавить заведение
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">КидМап</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучшие места для детей на одной карте
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold mb-3">Разделы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карта</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каталог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold mb-3">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@kidmap.by
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +375 29 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 КидМап. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;