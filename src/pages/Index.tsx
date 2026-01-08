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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://cdn.poehali.dev/projects/6527fc28-0374-4562-a8e5-e13da8e59449/files/eb2b5335-af27-4996-a5c2-0995ea9019dc.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-6 z-10 text-center text-white fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Домашнее купание: превратите рутину<br />в SPA-ритуал для здоровья<br />вашего малыша
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Авторская методика New Swim School. Мы научим вас не просто купать, а развивать ребенка через воду, укрепляя его иммунитет и нервную систему с первых дней жизни.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-md"
          >
            Получить доступ к курсу
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Первое купание: стресс для родителей
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Страх навредить малышу, непонимание правильной техники, плач ребенка, тревога и растерянность — всё это знакомо каждому новому родителю. Купание становится испытанием вместо радости.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "AlertCircle",
                title: "Боязнь навредить",
                description: "Неуверенность в правильности действий приводит к постоянной тревоге"
              },
              {
                icon: "Baby",
                title: "Плач малыша",
                description: "Ребенок чувствует вашу напряженность и отвечает беспокойством"
              },
              {
                icon: "Clock",
                title: "Упущенные возможности",
                description: "Купание может быть не только гигиеной, но и мощным инструментом развития"
              }
            ].map((problem, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon name={problem.icon} size={40} className="text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Как методика решает проблемы
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Наш курс превращает купание из стрессовой задачи в спокойный ритуал заботы, где вы уверены в каждом движении, а ребенок получает удовольствие от воды.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  icon: "Shield",
                  title: "Проверенная техника безопасности",
                  description: "Пошаговые инструкции и демонстрация правильных поддержек дадут вам уверенность в безопасности каждого действия"
                },
                {
                  icon: "Heart",
                  title: "Эмоциональная связь",
                  description: "Научитесь считывать сигналы малыша и превращать купание в момент близости и доверия"
                },
                {
                  icon: "TrendingUp",
                  title: "Развитие с первых дней",
                  description: "Упражнения для укрепления мышц, координации и иммунитета через правильное взаимодействие с водой"
                },
                {
                  icon: "Sparkles",
                  title: "Удовольствие от процесса",
                  description: "Купание станет любимым временем дня для всей семьи, а не источником стресса"
                }
              ].map((solution, idx) => (
                <div key={idx} className="flex gap-6 fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={solution.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ключевые преимущества курса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Три столпа здорового развития вашего ребенка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: "Brain",
                title: "Развитие",
                points: [
                  "Стимуляция сенсорной системы",
                  "Укрепление вестибулярного аппарата",
                  "Развитие координации движений",
                  "Формирование нейронных связей"
                ]
              },
              {
                icon: "Activity",
                title: "Иммунитет",
                points: [
                  "Закаливание организма",
                  "Улучшение терморегуляции",
                  "Укрепление дыхательной системы",
                  "Профилактика простудных заболеваний"
                ]
              },
              {
                icon: "Smile",
                title: "Спокойствие",
                points: [
                  "Снижение мышечного тонуса",
                  "Улучшение качества сна",
                  "Снятие колик и напряжения",
                  "Гармонизация нервной системы"
                ]
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-10 bg-card border-border hover:shadow-xl transition-all fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <Icon name={benefit.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="fade-in-up">
                <img 
                  src="https://cdn.poehali.dev/projects/6527fc28-0374-4562-a8e5-e13da8e59449/files/a016cb48-2de6-4e79-aeee-9c2a29ac8317.jpg" 
                  alt="Инструктор New Swim School"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="fade-in-up">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                  <span className="text-accent font-semibold">Автор курса</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Елена Морозова
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Основатель New Swim School, сертифицированный инструктор по плаванию для грудничков с 12-летним опытом работы.
                </p>
                <div className="space-y-4">
                  {[
                    "Более 2000 семей прошли обучение",
                    "Сертификация международной ассоциации Birthlight",
                    "Автор методики адаптивного купания",
                    "Спикер конференций по раннему развитию"
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="Award" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Вопросы и ответы
              </h2>
              <p className="text-lg text-muted-foreground">
                Самые частые вопросы о курсе
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "С какого возраста можно начинать занятия?",
                  answer: "Курс подходит для детей с рождения до 12 месяцев. Методика адаптирована под каждый возраст и учитывает физиологические особенности развития малыша."
                },
                {
                  question: "Нужна ли специальная ванна или бассейн?",
                  answer: "Нет, все упражнения адаптированы для обычной домашней ванны. Мы научим работать с тем пространством, которое у вас есть."
                },
                {
                  question: "Что если ребенок боится воды?",
                  answer: "Методика включает специальные техники адаптации для малышей с водобоязнью. Мы поэтапно, через игру и доверие, помогаем ребенку полюбить воду."
                },
                {
                  question: "Сколько времени занимает обучение?",
                  answer: "Курс состоит из 8 видеоуроков общей продолжительностью 4 часа. Вы можете проходить в своем темпе, возвращаясь к материалам в любое время."
                },
                {
                  question: "Есть ли поддержка после покупки?",
                  answer: "Да, вы получаете доступ к закрытому чату с другими родителями и возможность задать вопросы инструктору в течение 3 месяцев."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 bg-card">
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

      {/* Contact Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
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
              className="px-12 py-6 text-lg rounded-md mb-12"
            >
              Получить доступ к курсу
            </Button>

            <div className="border-t border-primary-foreground/20 pt-12 mt-12">
              <p className="text-lg mb-6">Следите за нами в социальных сетях</p>
              <div className="flex gap-6 justify-center">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Facebook", label: "Facebook" },
                  { icon: "Youtube", label: "YouTube" },
                  { icon: "Mail", label: "Email" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={24} />
                  </a>
                ))}
              </div>
              <p className="mt-8 opacity-70">
                info@newswimschool.ru | +7 (999) 123-45-67
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 New Swim School. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
