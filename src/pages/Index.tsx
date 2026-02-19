import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const LOGO_URL = "https://cdn.poehali.dev/projects/9f845550-d359-45fc-a974-91d986e67edd/bucket/5117bba6-7e54-434e-9dcd-9b6ef6d0cb8f.jpg";
const BATTERY_BG = "https://cdn.poehali.dev/projects/9f845550-d359-45fc-a974-91d986e67edd/files/220f914f-cca5-4f2f-a6cb-707692cb4029.jpg";
const BATTERY_IMG_1 = "https://cdn.poehali.dev/projects/9f845550-d359-45fc-a974-91d986e67edd/files/f37dd9fb-89c1-4222-8fb2-d1e0f2db6ac2.jpg";
const BATTERY_IMG_2 = "https://cdn.poehali.dev/projects/9f845550-d359-45fc-a974-91d986e67edd/files/092d9452-7731-4adb-8e27-0a589c0ca5d4.jpg";
const BATTERY_IMG_OLD = "https://cdn.poehali.dev/projects/9f845550-d359-45fc-a974-91d986e67edd/files/6e450681-ff59-4536-9ad5-25992cc8b04e.jpg";

const PHONE_MAIN = "88005555221";
const PHONE_MAIN_DISPLAY = "8 (800) 555-52-21";

const STORES = [
  { address: "г. Краснодар, ул. Российская 131/5", phone: "89883344446", phoneDisplay: "8 (988) 334-44-46" },
  { address: "г. Краснодар, ул. Дзержинского 165", phone: "89654744441", phoneDisplay: "8 (965) 474-44-41" },
  { address: "г. Краснодар, ул. Уральская 87А", phone: "89654744448", phoneDisplay: "8 (965) 474-44-48" },
  { address: "г. Краснодар, ул. Суворова 127/1", phone: "89654744446", phoneDisplay: "8 (965) 474-44-46" },
];

const BRANDS = ["Все", "Toyota", "Hyundai", "Kia", "Volkswagen", "BMW", "Mercedes", "Lada", "Renault"];
const TYPES = ["Все", "Кальциевые", "AGM", "EFB", "Гелевые", "Щелочные"];
const CAPACITIES = ["Все", "45 Ач", "55 Ач", "60 Ач", "70 Ач", "75 Ач", "90 Ач", "100 Ач"];

const PRODUCT_IMAGES = [BATTERY_IMG_1, BATTERY_IMG_2, BATTERY_IMG_OLD];

interface Product {
  id: number;
  name: string;
  capacity: string;
  type: string;
  brand: string[];
  price: number;
  oldPrice?: number;
  warranty: string;
  inStock: boolean;
  img: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "VARTA Blue Dynamic D24", capacity: "60 Ач", type: "Кальциевые", brand: ["Volkswagen", "BMW", "Mercedes"], price: 7200, oldPrice: 8500, warranty: "2 года", inStock: true, img: 0 },
  { id: 2, name: "BOSCH S4 005", capacity: "60 Ач", type: "Кальциевые", brand: ["Toyota", "Hyundai", "Kia"], price: 6800, warranty: "2 года", inStock: true, img: 1 },
  { id: 3, name: "EXIDE Excell EB602", capacity: "60 Ач", type: "Кальциевые", brand: ["Renault", "Lada"], price: 5400, oldPrice: 6200, warranty: "2 года", inStock: true, img: 2 },
  { id: 4, name: "VARTA Silver Dynamic AGM", capacity: "70 Ач", type: "AGM", brand: ["BMW", "Mercedes"], price: 14500, warranty: "2 года", inStock: true, img: 0 },
  { id: 5, name: "BOSCH S5 A08 AGM", capacity: "70 Ач", type: "AGM", brand: ["Volkswagen", "BMW"], price: 13200, oldPrice: 15000, warranty: "2 года", inStock: true, img: 1 },
  { id: 6, name: "AKOM EFB 75", capacity: "75 Ач", type: "EFB", brand: ["Lada", "Renault", "Hyundai"], price: 7800, warranty: "2 года", inStock: true, img: 2 },
  { id: 7, name: "Тюмень Premium 55", capacity: "55 Ач", type: "Кальциевые", brand: ["Lada", "Kia", "Renault"], price: 4200, warranty: "2 года", inStock: true, img: 0 },
  { id: 8, name: "MUTLU SFB 100", capacity: "100 Ач", type: "Кальциевые", brand: ["Toyota", "BMW", "Mercedes"], price: 9800, oldPrice: 11200, warranty: "2 года", inStock: true, img: 1 },
  { id: 9, name: "VARTA Start-Stop EFB", capacity: "70 Ач", type: "EFB", brand: ["Volkswagen", "Hyundai", "Kia"], price: 10500, warranty: "2 года", inStock: true, img: 0 },
  { id: 10, name: "BOSCH S4 029", capacity: "90 Ач", type: "Кальциевые", brand: ["Toyota", "Mercedes", "BMW"], price: 9200, warranty: "2 года", inStock: true, img: 1 },
  { id: 11, name: "TITAN Arctic 55", capacity: "55 Ач", type: "Кальциевые", brand: ["Lada", "Renault", "Kia"], price: 4800, oldPrice: 5500, warranty: "2 года", inStock: true, img: 2 },
  { id: 12, name: "OPTIMA Yellow Top 75", capacity: "75 Ач", type: "Гелевые", brand: ["Toyota", "BMW", "Mercedes"], price: 19500, warranty: "2 года", inStock: true, img: 2 },
];

const REVIEWS = [
  { name: "Алексей К.", text: "Купил VARTA для своего BMW — отличное качество! Быстро доставили, ребята помогли с подбором. Рекомендую АКБ центр!", rating: 5, city: "Краснодар" },
  { name: "Ирина М.", text: "Заказала аккумулятор для Kia Rio. Цена ниже, чем у конкурентов, гарантия 2 года. Довольна на 100%!", rating: 5, city: "Краснодар" },
  { name: "Сергей П.", text: "Уже третий раз покупаю здесь. Всегда свежие аккумуляторы, честная гарантия и грамотная консультация.", rating: 5, city: "Краснодар" },
  { name: "Дмитрий В.", text: "Заменили старый аккумулятор за 20 минут. Приехал, выбрал, установили. Всё четко и без лишних слов.", rating: 4, city: "Краснодар" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-4">
          <img src={LOGO_URL} alt="АКБ центр" className="h-14 w-auto rounded-lg" style={{ background: 'transparent' }} />
          <span className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight">
            <span className="text-brand-yellow">АКБ</span>{" "}
            <span className="text-brand-red">центр</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            ["#catalog", "Каталог"],
            ["#delivery", "Доставка"],
            ["#reviews", "Отзывы"],
            ["#contacts", "Контакты"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-gray-300 hover:text-brand-yellow transition-colors text-sm font-medium">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE_MAIN}`} className="flex items-center gap-2 text-white hover:text-brand-yellow transition-colors">
            <Icon name="Phone" size={18} />
            <span className="font-semibold text-sm">{PHONE_MAIN_DISPLAY}</span>
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-blue border-t border-white/10 px-4 py-4 space-y-3">
          {[
            ["#catalog", "Каталог"],
            ["#delivery", "Доставка"],
            ["#reviews", "Отзывы"],
            ["#contacts", "Контакты"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="block text-gray-300 hover:text-brand-yellow py-2 font-medium" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href={`tel:${PHONE_MAIN}`} className="flex items-center gap-2 text-brand-yellow font-bold py-2">
            <Icon name="Phone" size={18} />
            {PHONE_MAIN_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[520px]">
      <div className="absolute inset-0">
        <img src={BATTERY_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <p className="text-brand-yellow font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Поставщик качественной энергии
            </p>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Автомобильные{" "}
              <span className="text-brand-yellow">аккумуляторы</span>{" "}
              в Краснодаре
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Широкий ассортимент АКБ от ведущих производителей. Бесплатная доставка по городу, гарантия до 2 лет, профессиональная консультация.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalog">
                <Button className="bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-heading font-bold text-base px-8 py-6 rounded-xl shadow-lg shadow-yellow-500/20">
                  <Icon name="Battery" size={20} />
                  Выбрать аккумулятор
                </Button>
              </a>
              <a href={`tel:${PHONE_MAIN}`}>
                <Button variant="outline" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark font-heading font-bold text-base px-8 py-6 rounded-xl">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </Button>
              </a>
            </div>

            <div className="flex gap-8 mt-10">
              {[
                ["500+", "товаров в наличии"],
                ["4", "магазина в городе"],
                ["до 2 лет", "гарантия"],
              ].map(([val, label]) => (
                <div key={label}>
                  <p className="font-heading font-bold text-2xl text-brand-yellow">{val}</p>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/10 rounded-3xl blur-2xl" />
              <img src={BATTERY_IMG_1} alt="Автомобильный аккумулятор" className="relative w-80 h-80 object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    { icon: "Shield", title: "Гарантия до 2 лет", desc: "Официальная гарантия от производителя на все аккумуляторы" },
    { icon: "Truck", title: "Бесплатная доставка", desc: "Доставим по Краснодару в день заказа абсолютно бесплатно" },
    { icon: "BadgeCheck", title: "Только оригинал", desc: "Работаем напрямую с производителями, без подделок" },
    { icon: "Wrench", title: "Установка на месте", desc: "Бесплатно установим аккумулятор при доставке" },
  ];

  return (
    <section className="bg-[#FFF8EE] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="text-center p-4">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon} size={28} className="text-brand-dark" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const [brandFilter, setBrandFilter] = useState("Все");
  const [typeFilter, setTypeFilter] = useState("Все");
  const [capacityFilter, setCapacityFilter] = useState("Все");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = PRODUCTS.filter((p) => {
    if (brandFilter !== "Все" && !p.brand.includes(brandFilter)) return false;
    if (typeFilter !== "Все" && p.type !== typeFilter) return false;
    if (capacityFilter !== "Все" && p.capacity !== capacityFilter) return false;
    return true;
  });

  const addToCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <section id="catalog" className="py-16 bg-[#FFFAF3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            Каталог <span className="text-brand-yellow">аккумуляторов</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">Подберите аккумулятор по марке автомобиля, типу и ёмкости</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="space-y-2 w-full sm:w-auto">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Марка авто</label>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="w-full sm:w-48 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none"
            >
              {BRANDS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="space-y-2 w-full sm:w-auto">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Тип АКБ</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full sm:w-48 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none"
            >
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-2 w-full sm:w-auto">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block">Ёмкость</label>
            <select
              value={capacityFilter}
              onChange={(e) => setCapacityFilter(e.target.value)}
              className="w-full sm:w-48 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none"
            >
              {CAPACITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {cart.length > 0 && (
          <div className="mb-6 p-4 bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Icon name="ShoppingCart" size={20} className="text-brand-dark" />
              <span className="font-semibold text-brand-dark">В корзине: {cart.length} шт.</span>
              <span className="text-gray-600 text-sm ml-2">
                на сумму {PRODUCTS.filter(p => cart.includes(p.id)).reduce((s, p) => s + p.price, 0).toLocaleString("ru-RU")} ₽
              </span>
            </div>
            <a href="#contacts">
              <Button className="bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold rounded-xl">
                Оформить заказ
              </Button>
            </a>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 hover-scale group">
              <div className="relative mb-4">
                <div className="bg-[#FFF8EE] rounded-xl p-4 flex items-center justify-center h-44 overflow-hidden">
                  <img src={PRODUCT_IMAGES[product.img]} alt={product.name} className="h-36 object-contain group-hover:scale-105 transition-transform" />
                </div>
                {product.oldPrice && (
                  <Badge className="absolute top-2 right-2 bg-brand-red text-white text-xs font-bold">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm leading-tight">{product.name}</h3>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-brand-yellow/50 text-gray-600">{product.capacity}</Badge>
                  <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">{product.type}</Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Icon name="Shield" size={12} />
                  <span>Гарантия {product.warranty}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="font-heading font-bold text-xl text-brand-dark">{product.price.toLocaleString("ru-RU")} ₽</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm ml-2">{product.oldPrice.toLocaleString("ru-RU")} ₽</span>
                    )}
                  </div>
                </div>
                <Button
                  onClick={() => addToCart(product.id)}
                  className={`w-full rounded-xl font-bold text-sm mt-2 ${
                    cart.includes(product.id)
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-brand-yellow text-brand-dark hover:bg-yellow-400"
                  }`}
                >
                  {cart.includes(product.id) ? (
                    <><Icon name="Check" size={16} /> В корзине</>
                  ) : (
                    <><Icon name="ShoppingCart" size={16} /> В корзину</>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Icon name="SearchX" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">По заданным фильтрам ничего не найдено</p>
            <p className="text-gray-400 text-sm">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="delivery" className="py-16 bg-[#FFF8EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            Доставка и <span className="text-brand-yellow">оплата</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-4">
              <Icon name="Truck" size={24} className="text-brand-dark" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4">Доставка</h3>
            <ul className="space-y-3">
              {[
                "Бесплатная доставка по Краснодару при заказе от 3 000 ₽",
                "Доставка в день заказа до 18:00",
                "Самовывоз из 4 магазинов города",
                "Установка аккумулятора при доставке — бесплатно",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="CircleCheck" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mb-4">
              <Icon name="CreditCard" size={24} className="text-brand-dark" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4">Оплата</h3>
            <ul className="space-y-3">
              {[
                "Наличные при получении",
                "Банковская карта (Visa, MasterCard, МИР)",
                "Перевод по СБП",
                "Безналичный расчёт для юридических лиц",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="CircleCheck" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-[#FFFAF3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            Отзывы <span className="text-brand-yellow">клиентов</span>
          </h2>
          <p className="text-gray-500">Нам доверяют более 5 000 автовладельцев Краснодара</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 hover-scale shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-brand-yellow fill-brand-yellow" />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center font-heading font-bold text-brand-dark text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacts" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={BATTERY_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
            Наши <span className="text-brand-yellow">магазины</span>
          </h2>
          <p className="text-gray-400">4 магазина в Краснодаре — всегда рядом с вами</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="space-y-4">
            {STORES.map((store, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 border border-white/5">
                <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-brand-dark" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">{store.address}</p>
                  <a href={`tel:${store.phone}`} className="text-brand-yellow font-semibold text-sm hover:underline flex items-center gap-1">
                    <Icon name="Phone" size={14} />
                    {store.phoneDisplay}
                  </a>
                </div>
              </div>
            ))}

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 border border-white/5">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="PhoneCall" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Горячая линия</p>
                <a href={`tel:${PHONE_MAIN}`} className="text-white font-heading font-bold text-lg hover:text-brand-yellow transition-colors">
                  {PHONE_MAIN_DISPLAY}
                </a>
                <p className="text-gray-500 text-xs mt-1">Ежедневно с 8:00 до 20:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5">
            <h3 className="font-heading font-bold text-xl text-white mb-2">Обратная связь</h3>
            <p className="text-gray-400 text-sm mb-6">Оставьте заявку и мы перезвоним в течение 15 минут</p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={32} className="text-white" />
                </div>
                <p className="text-white font-heading font-bold text-lg">Заявка отправлена!</p>
                <p className="text-gray-400 text-sm">Мы перезвоним вам в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-5"
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl py-5"
                />
                <Textarea
                  placeholder="Сообщение или вопрос"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl min-h-[80px]"
                />
                <Button type="submit" className="w-full bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-heading font-bold py-6 rounded-xl text-base">
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="АКБ центр" className="h-10 w-auto rounded-md" />
            <span className="font-heading font-extrabold text-xl">
              <span className="text-brand-yellow">АКБ</span>{" "}
              <span className="text-brand-red">центр</span>
            </span>
            <span className="text-gray-500 text-sm ml-2">— Поставщик качественной энергии</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} АКБ центр. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF3]">
      <Header />
      <Hero />
      <Advantages />
      <Catalog />
      <Delivery />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
