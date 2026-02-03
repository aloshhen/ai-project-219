import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from './components/SafeIcon';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// News data
const newsData = [
  {
    id: 1,
    title: "Обновление CS2: Новые карты и баланс оружия",
    date: "15 января 2024",
    category: "Обновление",
    description: "Valve выпустила крупное обновление с новыми картами и изменениями баланса популярного оружия.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80"
  },
  {
    id: 2,
    title: "PGL Major Copenhagen 2024: Расписание турнира",
    date: "12 января 2024",
    category: "Турниры",
    description: "Объявлено полное расписание первого Major по CS2 с призовым фондом $1,250,000.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80"
  },
  {
    id: 3,
    title: "Топ-10 игроков 2023 года по версии HLTV",
    date: "10 января 2024",
    category: "Рейтинги",
    description: "HLTV.org опубликовал список лучших игроков уходящего года. ZywOo занял первое место.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80"
  }
];

// Maps data
const mapsData = [
  {
    name: "Dust II",
    type: "Бомба",
    description: "Классическая карта, расположенная в Марокко. Идеальный баланс для обеих команд.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=600&q=80"
  },
  {
    name: "Mirage",
    type: "Бомба",
    description: "Популярная карта в восточной архитектуре. Требует отличной командной работы.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
  },
  {
    name: "Inferno",
    type: "Бомба",
    description: "Итальянская деревня с узкими улочками. Фаворит среди профессиональных игроков.",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&q=80"
  },
  {
    name: "Nuke",
    type: "Бомба",
    description: "Ядерный объект в США с двухуровневой структурой. Сложная карта для террористов.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80"
  }
];

// Guides data
const guidesData = [
  {
    icon: "target",
    title: "Настройка прицела",
    description: "Подробное руководство по созданию идеального прицела для точной стрельбы."
  },
  {
    icon: "zap",
    title: "Экономика игры",
    description: "Как правильно управлять деньгами команды и принимать решения о форс-баях."
  },
  {
    icon: "map",
    title: "Позиции на картах",
    description: "Лучшие точки для обороны и атаки на всех соревновательных картах."
  },
  {
    icon: "users",
    title: "Командная игра",
    description: "Коммуникация, роли игроков и стратегии для победы в матчмейкинге."
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-csgo-dark csgo-pattern">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-csgo-darker/95 backdrop-blur-md border-b border-orange-500/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <SafeIcon name="Target" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                CS<span className="text-orange-500">GO</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Новости</a>
              <a href="#maps" onClick={(e) => scrollToSection(e, 'maps')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Карты</a>
              <a href="#guides" onClick={(e) => scrollToSection(e, 'guides')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">Гайды</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-300 hover:text-orange-500 transition-colors font-medium">О игре</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2">
                <SafeIcon name="Download" className="w-4 h-4" />
                Играть бесплатно
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <SafeIcon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-800"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className="text-gray-300 hover:text-orange-500 transition-colors">Новости</a>
                  <a href="#maps" onClick={(e) => scrollToSection(e, 'maps')} className="text-gray-300 hover:text-orange-500 transition-colors">Карты</a>
                  <a href="#guides" onClick={(e) => scrollToSection(e, 'guides')} className="text-gray-300 hover:text-orange-500 transition-colors">Гайды</a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-300 hover:text-orange-500 transition-colors">О игре</a>
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold w-full">
                    Играть бесплатно
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-csgo-dark via-csgo-dark/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-csgo-dark via-transparent to-csgo-dark/50" />
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-sm font-semibold">Counter-Strike 2 уже доступен</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              ЛЕГЕНДАРНЫЙ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                ШУТЕР ОТ ПЕРВОГО ЛИЦА
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Присоединяйтесь к миллионам игроков по всему миру. 
              Сражайтесь в командных боях, участвуйте в турнирах и становитесь легендой CS:GO.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25">
                <SafeIcon name="Gamepad" className="w-5 h-5" />
                Начать игру
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2">
                <SafeIcon name="Play" className="w-5 h-5" />
                Смотреть трейлер
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-800">
              <div>
                <div className="text-3xl font-black text-white">35M+</div>
                <div className="text-gray-500 text-sm">Игроков ежемесячно</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">$100M+</div>
                <div className="text-gray-500 text-sm">Призовых в турнирах</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">10+ лет</div>
                <div className="text-gray-500 text-sm">Истории игры</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-csgo-gray/30">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ПОСЛЕДНИЕ <span className="text-orange-500">НОВОСТИ</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Будьте в курсе всех обновлений, турниров и изменений в мире CS:GO
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {newsData.map((news) => (
              <motion.article
                key={news.id}
                variants={fadeInUp}
                className="bg-gradient-to-br from-csgo-gray to-csgo-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                    <SafeIcon name="Calendar" className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {news.description}
                  </p>
                  <button className="mt-4 text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Читать далее
                    <SafeIcon name="ArrowRight" className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <button className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
              Все новости
              <SafeIcon name="ArrowRight" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ИГРОВЫЕ <span className="text-orange-500">КАРТЫ</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Изучите все соревновательные карты и найдите свою любимую
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mapsData.map((map, index) => (
              <motion.div
                key={map.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img 
                    src={map.image} 
                    alt={map.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-csgo-dark via-csgo-dark/80 to-transparent" />
                </div>
                <div className="relative p-8 pt-32 md:pt-48">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/30">
                      {map.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {map.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {map.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-csgo-gray/30">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ГАЙДЫ И <span className="text-orange-500">СОВЕТЫ</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Улучшите свои навыки с помощью профессиональных руководств
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {guidesData.map((guide, index) => (
              <motion.div
                key={guide.title}
                variants={fadeInUp}
                className="bg-gradient-to-br from-csgo-gray to-csgo-dark p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <SafeIcon name={guide.icon} className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {guide.description}
                </p>
                <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Подробнее
                  <SafeIcon name="ChevronRight" className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                ЧТО ТАКОЕ <span className="text-orange-500">CS:GO?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Counter-Strike: Global Offensive (CS:GO) — это многопользовательский тактический шутер от первого лица, 
                разработанный компанией Valve. Игра является четвёртой в серии Counter-Strike и стала одной из самых 
                популярных киберспортивных дисциплин в мире.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                В игре две команды — Террористы и Контр-террористы — сражаются друг с другом в различных режимах игры. 
                CS:GO известна своей сложной механикой стрельбы, требующей навыков, реакции и командной работы.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="Target" className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Точная стрельба</div>
                    <div className="text-gray-500 text-sm">Уникальная механика recoil</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="Users" className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">5 на 5</div>
                    <div className="text-gray-500 text-sm">Командные бои</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="Trophy" className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Киберспорт</div>
                    <div className="text-gray-500 text-sm">Миллионные турниры</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon name="Shield" className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Античит</div>
                    <div className="text-gray-500 text-sm">VAC защита</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" 
                  alt="CS:GO Gameplay"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-csgo-dark/50 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-csgo-gray border border-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <SafeIcon name="Users" className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">1.2M</div>
                    <div className="text-gray-500 text-sm">Игроков онлайн</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              ГОТОВЫ К <span className="text-yellow-300">БОЮ?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Загрузите игру бесплатно в Steam и начните свое путешествие в мир Counter-Strike прямо сейчас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <SafeIcon name="Download" className="w-5 h-5" />
                Скачать в Steam
              </button>
              <button className="bg-black/20 hover:bg-black/30 border border-white/30 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2">
                <SafeIcon name="Info" className="w-5 h-5" />
                Системные требования
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-csgo-darker border-t border-gray-800 py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <SafeIcon name="Target" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white tracking-tight">
                  CS<span className="text-orange-500">GO</span>
                </span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-4 max-w-md">
                Counter-Strike: Global Offensive — легендарный тактический шутер, который определил жанр и стал основой современного киберспорта.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <SafeIcon name="Twitter" className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <SafeIcon name="Youtube" className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <SafeIcon name="Twitch" className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                  <SafeIcon name="Facebook" className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Разделы</h4>
              <ul className="space-y-2">
                <li><a href="#news" className="text-gray-500 hover:text-orange-500 transition-colors">Новости</a></li>
                <li><a href="#maps" className="text-gray-500 hover:text-orange-500 transition-colors">Карты</a></li>
                <li><a href="#guides" className="text-gray-500 hover:text-orange-500 transition-colors">Гайды</a></li>
                <li><a href="#about" className="text-gray-500 hover:text-orange-500 transition-colors">О игре</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Помощь</a></li>
                <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Сообщить о баге</a></li>
                <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Steam Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2024 Counter-Strike. Все права защищены. Valve Corporation.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;