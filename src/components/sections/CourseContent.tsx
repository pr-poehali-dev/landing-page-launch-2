import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const CourseContent = () => {
  return (
    <>
      {/* For Whom Section */}
      <section id="for-whom" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Для кого?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Для родителей, которые хотят, чтобы их ребёнок всесторонне развивался, крепко спал и любил купаться
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Baby",
                title: "Новоиспеченные родители",
                points: [
                  "если Вы запутались в многочисленной информации на просторах интернета и устали от советов родственников, то этот курс расставит все точки над \"i\"",
                  "если Вы не знаете, где найти действительно ценную информацию о купании и уходе за новорождённым, этот курс станет Вашим маяком в мир счастливого и спокойного родительства"
                ]
              },
              {
                icon: "Heart",
                title: "Будущие родители",
                points: [
                  "Если вы в ожидании своего малыша и хотите быть во всеоружии после его рождения, этот курс точно для вас"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Что вы узнаете после просмотра видеоуроков
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: "Droplets",
                  title: "4 способа, как купать своего ребёнка в домашней ванне после родов"
                },
                {
                  icon: "Hand",
                  title: "Как правильно держать малыша при умывании и подмывании"
                },
                {
                  icon: "Moon",
                  title: "Узнаете, как наладить сон и режим дня малыша"
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
      <section id="program" className="py-16 bg-background">
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
                  content: "Обзор развивающих игрушек и приспособлений для водных занятий с малышом."
                },
                {
                  title: "Модуль 7. Сон малыша",
                  content: "Как правильное купание влияет на качество сна ребенка и как выстроить режим дня."
                }
              ].map((module, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-accent/10 rounded-lg px-6 hover:border-accent/30 transition-all">
                  <AccordionTrigger className="text-foreground hover:text-accent text-lg font-semibold py-6 hover:no-underline">
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
    </>
  );
};

export default CourseContent;