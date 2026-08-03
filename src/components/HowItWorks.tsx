import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "اربط أدواتك",
    description: "اربط البريد الإلكتروني وسلاك والنماذج خلال دقائق — دون أي ترحيل مطلوب.",
  },
  {
    number: "02",
    title: "يفرز Flowly الضوضاء",
    description: "يتم فرز الطلبات الواردة ووضع العلامات عليها وإرسالها للشخص المناسب.",
  },
  {
    number: "03",
    title: "فريقك فقط ينساب",
    description: "يعمل الجميع من سطر واحد من المهام بدلًا من خمس صناديق واردات منفصلة.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-24 text-secondary-foreground md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            اضبطه مرة واحدة، بهذا الترتيب
          </h2>
          <p className="mt-4 text-secondary-foreground/70">
            تبدأ معظم الفرق أول تدفق لها في نفس بعد الظهر الذي تُسجل فيه.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-secondary-foreground/15 md:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <span className="font-display text-4xl font-semibold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
