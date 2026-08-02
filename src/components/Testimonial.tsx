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
            We cut our stand-up time in half and stopped losing hand-offs between design and
            engineering entirely.
          </p>
          <div className="mt-6">
            <p className="font-medium">Mira Haddad</p>
            <p className="text-sm text-muted-foreground">Head of Product, Ferro Labs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
