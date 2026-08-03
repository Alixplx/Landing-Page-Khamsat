import { motion } from "framer-motion";
import { Layers, GitBranch, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "لوحة واحدة، كل السياق",
    description:
      "تصل المهام من البريد الإلكتروني والدردشة والنماذج إلى لوحة واحدة، موسومة ومُسندة تلقائيًا.",
  },
  {
    icon: GitBranch,
    title: "تسليمات لا تتعثر",
    description:
      "يحمل كل تسليم قائمة تحقق خاصة به، لذلك يعرف الشخص التالي ما يعنيه «تم» بالضبط.",
  },
  {
    icon: Bell,
    title: "هادئ بشكل افتراضي",
    description:
      "يُنبه Flowly فقط الشخص المعطل في القناة التي يراجعها فعليًا.",
  },
];

export default function Features() {
  
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            قليل من التنسيق. المزيد من الإنجاز.
          </h2>
          <p className="mt-4 text-muted-foreground">
            يستبدل Flowly السؤال اليومي «أين نحن في هذا؟» بنظام يعرف الإجابة بالفعل.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="pt-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
