import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const PricingAndFAQ = () => {
  return (
    <>
      {/* Pricing Section */}
      <section className="py-16 bg-background">
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
                onClick={() => window.open('https://t.me/AntonOchagov', '_blank')}
              >
                Купить доступ за 990 ₽
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Частые вопросы
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Подойдет ли курс для новорожденного?",
                  answer: "Да, курс разработан специально для родителей новорожденных и детей первых месяцев жизни. Все техники адаптированы для самых маленьких."
                },
                {
                  question: "Нужна ли большая ванна для занятий?",
                  answer: "Нет, в курсе показаны способы купания как в большой ванне, так и в детской ванночке. Вы сможете выбрать наиболее подходящий вариант для вас."
                },
                {
                  question: "Как долго доступен курс после покупки?",
                  answer: "Доступ к курсу предоставляется навсегда. Вы сможете пересматривать уроки столько раз, сколько потребуется."
                },
                {
                  question: "Что делать, если у меня возникнут вопросы?",
                  answer: "После покупки курса вы получите доступ к поддержке, где сможете задать любые вопросы автору курса."
                },
                {
                  question: "Можно ли купить курс в подарок?",
                  answer: "Да, вы можете приобрести курс в качестве подарка для будущих или новоиспеченных родителей."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-card border border-accent/10 rounded-lg px-6 hover:border-accent/30 transition-all">
                  <AccordionTrigger className="text-foreground hover:text-accent text-lg font-semibold py-6 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-lg pt-2 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 New Swim School. Все права защищены.</p>
            <p className="text-sm">Курс разработан профессиональным инструктором грудничкового плавания</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PricingAndFAQ;
