import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-center text-secondary-foreground md:px-16 md:py-20"
        >
          <div
            aria-hidden
            className="bg-grain pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              أعد لأعمال فريقك ساعات بعد الظهر.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-secondary-foreground/70">
              انضم إلى أكثر من 400 فريق يعملون يوميًا من خلال تدفق واحد هادئ.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                placeholder="أنت@شركتك.com"
                className="bg-background text-foreground"
              />
              <Button type="submit" size="lg" className="shrink-0">
                ابدأ التجربة المجانية
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
