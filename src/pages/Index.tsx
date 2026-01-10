import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('for-whom')}
              className="text-foreground hover:text-accent"
            >
              Для кого?
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('program')}
              className="text-foreground hover:text-accent"
            >
              Программа курса
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 pt-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,101,0.08),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10 fade-in-up">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm tracking-wider uppercase">НОВАЯ ШКОЛА ГРУДНИЧКОВОГО ПЛАВАНИЯ</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Купание и уход</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">ЗА НОВОРОЖДЕННЫМ</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 font-light text-muted-foreground leading-relaxed">
                4 способа купания без слез<br />и боли в спине<br />с максимальной пользой для развития ребенка
              </p>
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 h-16 text-lg rounded-md shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30 w-full md:w-auto"
                >
                  Получить доступ
                </Button>
                <p className="text-muted-foreground text-center md:text-left">
                  старт сразу после оплаты
                </p>
              </div>
            </div>
            <div className="fade-in-up relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-accent/10">
                <img 
                  src="https://cdn.poehali.dev/projects/6527fc28-0374-4562-a8e5-e13da8e59449/files/eb2b5335-af27-4996-a5c2-0995ea9019dc.jpg"
                  alt="Мама с малышом в воде"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Для кого?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Для родителей, которые хотят, чтоб их ребёнок всесторонне развивался, крепко спал и любил купаться
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Baby",
                title: "Новоиспеченные родители",
                points: [
                  "если Вы запутались в многочисленной информации на просторах интернета и устали от советов родственников, то этот курс расставит все точки над \"i\"",
                  "если Вы не знаете где найти действительно ценную информацию о купании и уходе о новорождённом, этот курс станет Вашим маяком в мир счастливого и спокойного родительства"
                ]
              },
              {
                icon: "Heart",
                title: "Будущие родители",
                points: [
                  "Если вы в ожидании своего малыша и хотите быть во всеоружии после его рождения, то этот курс точно для вас"
                ]
              },
              {
                icon: "Users",
                title: "Опытные родители",
                points: [
                  "для современных и осознанных родителей, которые берут на себя ответственность за здоровье своих детей",
                  "для родителей, которым не нравится классическая школа грудничкового плавания, где ребёнка ныряют через стресс и мотыляют по воде"
                ]
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-2xl transition-all fade-in-up bg-gradient-to-br from-card to-accent/5 border border-accent/20" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/30">
                    <Icon name={item.icon} size={32} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0 text-xs">•</span>
                      <span className="text-muted-foreground leading-relaxed text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Learn Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Что вы узнаете после просмотра видеоуроков
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "Droplets",
                  title: "4 способа как купать своему ребенка в домашней ванне после родов"
                },
                {
                  icon: "Hand",
                  title: "Как правильно держать малыша при умывании и подмывании"
                },
                {
                  icon: "Moon",
                  title: "Узнаете как наладить сон и режим дня малыша"
                },
                {
                  icon: "Baby",
                  title: "Удобные и безопасные позы для ношения малыша"
                },
                {
                  icon: "Blocks",
                  title: "Гаджеты для купания и развития ребенка"
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-all fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border border-accent/20">
                      <Icon name={item.icon} size={24} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed pt-2">{item.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program / Syllabus */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Содержание уроков
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  title: "Модуль 1. Первое купание. Видео-пример",
                  content: (
                    <div>
                      <p className="mb-4">Как познакомить малыша с водой безопасно для него и удобно для родителей.</p>
                      <p className="font-semibold mb-3">Памятки:</p>
                      <ul className="space-y-2 list-disc list-inside">
                        <li>Обзор детских ванночек для купания</li>
                        <li>Как подготовить ванну, температура воды и воздуха</li>
                        <li>Как подготовить малыша. Подбор времени. Ритуал купания</li>
                        <li>Как держать, как опускать и поднимать</li>
                        <li>Сколько купать по времени</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: "Модуль 2. 3 безопасных и удобных способа купания",
                  content: "Подробный разбор трех проверенных техник купания, которые обеспечивают безопасность малыша и комфорт родителей."
                },
                {
                  title: "Модуль 3. Поддержки при умывании и подмывании малыша",
                  content: "Правильные поддержки и техники для ежедневных гигиенических процедур."
                },
                {
                  title: "Модуль 4. Безопасные и удобные позы для ношения",
                  content: "Эргономичные способы ношения малыша, которые помогут избежать усталости спины и обеспечат комфорт ребенку."
                },
                {
                  title: "Модуль 5. Гаджеты для купания. Польза или вред",
                  content: "Объективный разбор популярных приспособлений для купания: что действительно нужно, а что можно не покупать."
                },
                {
                  title: "Модуль 6. Гаджеты для развития",
                  content: "Обзор гаджетов с их плюсами и минусами. Что поможет в развитии малыша, а что является лишь маркетингом."
                },
                {
                  title: "Модуль 7. Мифы и стереотипы о купании",
                  content: "Развенчиваем популярные заблуждения и отвечаем на спорные вопросы о купании грудничков."
                }
              ].map((module, idx) => (
                <AccordionItem key={idx} value={`module-${idx}`} className="border border-border rounded-lg px-8 bg-card">
                  <AccordionTrigger className="text-left text-xl font-bold text-foreground hover:no-underline py-6">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-lg pt-2 pb-6">
                    {typeof module.content === 'string' ? module.content : module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="fade-in-up relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-accent/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/6527fc28-0374-4562-a8e5-e13da8e59449/files/a016cb48-2de6-4e79-aeee-9c2a29ac8317.jpg" 
                    alt="Эксперт New Swim School"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="fade-in-up">
                <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full mb-6">
                  <span className="text-accent font-semibold tracking-wide">Автор курса</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Алина Шаталова
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                  Прошла путь от мамы, которая не знала как купать правильно своего ребёнка, до тренера и автора одной из самых востребованных методик в мире грудничкового плавания.
                </p>
                <div className="space-y-6 mb-8">
                  {[
                    "Соучредитель, руководитель и методист практикующий тренер центра разумного плавания для детей «ПЛЮХбург»",
                    "Автор методики по грудничковому плаванию «Осознанное погружение». Коллеги называют Алину «Че Гевара грудничкового плавания», потому что ее методика совершила настоящую революцию в мире раннего плавания",
                    "Спикер и презентор международных семинаров и конференций по грудничковому и раннему плаванию",
                    "Тысячи коллег и детей обучились и обучаются у Алины искусству грудничкового плавания. География учеников-коллег Алины обширна, а детки подопечные в прямом и переносном смысле выросли у неё на руках"
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <p className="text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-semibold text-foreground italic">
                  Окунитесь в мир осознанного плавания с Алиной!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Отзывы родителей
              </h2>
              <p className="text-lg text-muted-foreground">
                Более 2000 семей уже прошли курс и изменили свой подход к купанию
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Изабелла Баторина",
                  role: "Мама и инструктор",
                  text: "Спасибо большое за ваш курс, это колоссальная работа собрать столько информации воедино! Браво! Помимо плавания, курс охватывает темы по уходу, развитию, ГВ, режиму. Этот курс нужно рекламировать в роддомах и поликлиниках!",
                  instagram: "@izabellabatorina"
                },
                {
                  name: "Корзухина Анна",
                  role: "Мама Алисы",
                  text: "Помимо плавания, купания и занятий в воде, я получила еще столько знаний о развитии и здоровье малыша! Курс превзошел все мои ожидания. Теперь купание — это наше любимое время дня.",
                  instagram: ""
                },
                {
                  name: "Мария Соколова",
                  role: "Мама двоих детей",
                  text: "После курса я перестала бояться купать ребенка. Алина так подробно все объясняет, что чувствуешь уверенность в каждом движении. Малыш теперь обожает воду и спит гораздо крепче!",
                  instagram: ""
                },
                {
                  name: "Екатерина Волкова",
                  role: "Будущая мама",
                  text: "Прошла курс еще до родов — это лучшая подготовка! Когда родился малыш, я уже точно знала, что делать. Никакой паники, только удовольствие от процесса. Рекомендую всем беременным!",
                  instagram: ""
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-8 bg-card border-border hover:shadow-lg transition-all fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      {testimonial.instagram && (
                        <p className="text-sm text-accent mt-1">{testimonial.instagram}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-card to-accent/5 border-2 border-accent hover:shadow-2xl transition-all fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(197,160,101,0.08),transparent_70%)]" />
              <div className="text-center mb-8 relative z-10">
                <div className="mb-8">
                  <span className="text-7xl font-bold bg-gradient-to-br from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent">990 ₽</span>
                </div>
                <p className="text-xl text-muted-foreground">
                  Доступ навсегда
                </p>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Полный доступ ко всем видеоурокам",
                  "4 способа купания без слез и боли в спине",
                  "Техники умывания и подмывания",
                  "Рекомендации по налаживанию сна и режима",
                  "Безопасные позы для ношения малыша",
                  "Обзор гаджетов для купания и развития"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg" 
                className="w-full h-16 text-xl bg-primary hover:bg-primary/90 text-white rounded-md shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30"
              >
                Купить доступ за 990 ₽
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ответы на вопросы
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Подходит ли методика для новорожденных?",
                  answer: "Да, программа разработана специально для детей с первых дней жизни, после заживления пупочной ранки."
                },
                {
                  question: "Нужна ли специальная подготовка?",
                  answer: "Нет. Мы объясняем сложные вещи простым языком. У вас получится, даже если вы никогда не купали детей."
                },
                {
                  question: "Что, если ребенок будет плакать?",
                  answer: "Курс включает блок по мягкой адаптации. Мы научим вас считывать сигналы малыша и успокаивать его."
                },
                {
                  question: "Сколько времени занимает обучение?",
                  answer: "Курс состоит из 8 видеоуроков общей продолжительностью 4 часа. Вы можете проходить в своем темпе, возвращаясь к материалам в любое время."
                },
                {
                  question: "Есть ли поддержка после покупки?",
                  answer: "В тарифе Премиум вы получаете персональную поддержку тренера в течение недели и разбор вашей техники по видео."
                },
                {
                  question: "Если не пришёл доступ, что делать?",
                  answer: "Пишите в службу о заботе клиентов на info@newswimschool.ru — мы оперативно решим любой технический вопрос."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните путь к спокойному купанию уже сегодня
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Присоединяйтесь к 2000+ семей, которые превратили купание в любимый ритуал
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-12 h-16 text-lg rounded-md shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all"
            >
              Получить доступ к курсу
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="text-2xl font-bold text-foreground">New Swim School</div>
              <div className="flex gap-6">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Send", label: "Telegram" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-10 h-10 rounded-full border border-border hover:bg-muted flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 New Swim School. Все права защищены.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-foreground transition-colors">Договор оферты</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;