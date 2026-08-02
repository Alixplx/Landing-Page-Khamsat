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
              Give your team back its afternoons.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-secondary-foreground/70">
              Join 400+ teams running their day-to-day through one calm flow.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                className="bg-background text-foreground"
              />
              <Button type="submit" size="lg" className="shrink-0">
                Start free trial
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
