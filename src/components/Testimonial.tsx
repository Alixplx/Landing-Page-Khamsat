import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-6 font-display text-2xl font-medium leading-snug md:text-3xl">
            قللنا وقت الاجتماع نصفًا وتوقفنا عن فقدان عمليات التسليم بين التصميم والهندسة تمامًا.
          </p>
          <div className="mt-6">
            <p className="font-medium">ميرا حداد</p>
            <p className="text-sm text-muted-foreground">رئيسة المنتج، شركة فيرو لابز</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
