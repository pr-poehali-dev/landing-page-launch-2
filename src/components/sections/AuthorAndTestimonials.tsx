import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AuthorAndTestimonials = () => {
  return (
    <>
      {/* Authority Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="fade-in-up relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-accent/20">
                  <img 
                    src="https://cdn.poehali.dev/files/photo_2026-01-10_19-33-54.jpg" 
                    alt="Алина Шаталова - автор курса"
                    className="w-full h-auto object-cover"
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
      <section className="py-16 bg-background">
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
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
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
    </>
  );
};

export default AuthorAndTestimonials;
