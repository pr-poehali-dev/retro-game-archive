import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const gameCategories = [
    'Стратегия', 'Приключения', 'Семейные', 'Карточные', 'Ролевые', 'Абстрактные'
  ];

  const games = [
    {
      id: 1,
      title: 'Герои Меча и Магии',
      category: 'Стратегия',
      year: 1995,
      description: 'Классическая пошаговая стратегия с элементами RPG',
      tags: ['фэнтези', 'пошаговая', 'классика'],
      image: '/img/fd01ce79-8705-4292-95c6-f107f38cf2df.jpg'
    },
    {
      id: 2,
      title: 'Магический Лабиринт',
      category: 'Приключения',
      year: 1998,
      description: 'Захватывающее путешествие по мистическому лабиринту',
      tags: ['приключения', 'головоломка', 'магия'],
      image: '/img/fd01ce79-8705-4292-95c6-f107f38cf2df.jpg'
    },
    {
      id: 3,
      title: 'Космические Рейдеры',
      category: 'Стратегия',
      year: 1996,
      description: 'Битвы в открытом космосе за ресурсы галактики',
      tags: ['космос', 'стратегия', 'sci-fi'],
      image: '/img/fd01ce79-8705-4292-95c6-f107f38cf2df.jpg'
    }
  ];

  const archiveSections = [
    { name: 'Материалы для печати', icon: 'Printer', count: 45 },
    { name: 'Архив статей', icon: 'FileText', count: 128 },
    { name: 'Наши разработки', icon: 'Gamepad2', count: 12 },
    { name: 'Загрузки', icon: 'Download', count: 89 }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
      {/* Retro Header */}
      <header className="retro-gradient text-white p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Icon name="Dice6" size={32} />
              <h1 className="text-3xl font-bold">РЕТРО АРХИВ НАСТОЛЬНЫХ ИГР</h1>
            </div>
            <div className="text-sm">
              <span>👾 Добро пожаловать в архив! 👾</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="border-t-2 border-white pt-3">
            <div className="flex flex-wrap gap-1">
              {['Главная', 'Поиск', 'Каталог', 'Материалы', 'Статьи', 'Форум', 'Загрузки'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:bg-white hover:text-blue-600 border border-white px-3 py-1 text-sm retro-shadow"
                >
                  {item}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Search Section */}
        <Card className="mb-8 retro-border retro-shadow">
          <CardHeader style={{ backgroundColor: 'rgb(0, 102, 204)', color: 'white' }}>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Search" size={24} />
              Поиск по архиву
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Введите название игры или ключевые слова..."
                className="flex-1 retro-border"
              />
              <div className="flex flex-wrap gap-2">
                {gameCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-orange-100 retro-border"
                    style={{ color: 'rgb(255, 102, 0)' }}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Archive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {archiveSections.map((section) => (
            <Card
              key={section.name}
              className="cursor-pointer hover:scale-105 transition-transform retro-border retro-shadow"
            >
              <CardHeader className="text-center" style={{ backgroundColor: 'rgb(0, 153, 0)', color: 'white' }}>
                <Icon name={section.icon as any} size={32} className="mx-auto mb-2" />
                <CardTitle className="text-lg">{section.name}</CardTitle>
                <CardDescription className="text-white">
                  {section.count} материалов
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Games Catalog */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 retro-border">
            <TabsTrigger value="all">Все игры</TabsTrigger>
            <TabsTrigger value="strategy">Стратегия</TabsTrigger>
            <TabsTrigger value="adventure">Приключения</TabsTrigger>
            <TabsTrigger value="family">Семейные</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="overflow-hidden retro-border retro-shadow hover:scale-105 transition-transform">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge style={{ backgroundColor: 'rgb(255, 102, 0)', color: 'white' }}>
                        {game.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {game.title}
                      <Icon name="Dice1" size={20} />
                    </CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {game.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                          style={{ backgroundColor: 'rgb(204, 204, 204)', color: 'black' }}
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" style={{ backgroundColor: 'rgb(0, 102, 204)', color: 'white' }}>
                        <Icon name="Eye" size={16} className="mr-1" />
                        Подробнее
                      </Button>
                      <Button size="sm" variant="outline" style={{ borderColor: 'rgb(0, 153, 0)', color: 'rgb(0, 153, 0)' }}>
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="strategy">
            <p className="text-center text-gray-600 py-8">Здесь будут отображаться только стратегические игры...</p>
          </TabsContent>
          
          <TabsContent value="adventure">
            <p className="text-center text-gray-600 py-8">Здесь будут отображаться приключенческие игры...</p>
          </TabsContent>
          
          <TabsContent value="family">
            <p className="text-center text-gray-600 py-8">Здесь будут отображаться семейные игры...</p>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <Card className="mt-8 retro-border" style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                🎲 Архив содержит более 500 настольных игр | Последнее обновление: Сентябрь 2024 🎲
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Сайт работает лучше всего в Netscape Navigator 4.0+ и Internet Explorer 5.0+
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;