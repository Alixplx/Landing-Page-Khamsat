import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cards = [
  { label: "مراجعة التصميم", tag: "التصميم", x: 0, y: 0, delay: 0 },
  { label: "تسليم العميل", tag: "التسليم", x: 1, y: 1, delay: 0.15 },
  { label: "تخطيط السبرنت", tag: "المنتج", x: 0, y: 2, delay: 0.3 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="container relative grid items-center gap-16 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge className="mb-6">مناسب لفرق من 3 إلى 30</Badge>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            تدفق واحد لـ
            <br />
            كيف يعمل فريقك
            <br />
            <span className="text-primary">بالفعل</span>.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            يجمع Flowly كل مهمة وتسليم وموافقة منتشرة عبر المحادثات وجداول البيانات في سطر عمل
            هادئ واحد — حتى لا يمر شيء في انتظار تحديث الحالة.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              ابدأ التجربة المجانية
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              شاهد عرضًا لمدة دقيقتين
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            لا توجد بطاقة ائتمان · يمكنك الإلغاء في أي وقت
          </div>
        </motion.div>

        {/* Image: animated workflow illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[420px] md:h-[480px]"
        >
          <svg
            viewBox="0 0 480 480"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d="M 90 380 C 160 380, 140 260, 220 250 S 320 120, 390 100"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="animate-draw-line"
            />
          </svg>

          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + card.delay }}
              className="animate-float absolute w-48 rounded-2xl border border-border bg-card p-4 shadow-sm"
              style={{
                left: `${10 + card.x * 44}%`,
                top: `${card.y * 32}%`,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <span className="text-xs font-medium text-primary">{card.tag}</span>
              <p className="mt-1 text-sm font-medium leading-snug">{card.label}</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
                <div
                  className="h-1.5 rounded-full bg-primary"
                  style={{ width: `${60 + i * 15}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
