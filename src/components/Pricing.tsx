import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For small teams trying Flowly out.",
    features: ["Up to 3 members", "1 workflow", "7-day history"],
    highlighted: false,
  },
  {
    name: "Team",
    price: "$18",
    period: "per member / month",
    description: "For teams ready to run everything through Flowly.",
    features: ["Unlimited members", "Unlimited workflows", "Full history & audit log", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Let's talk",
    period: "custom",
    description: "For organizations with security or SSO needs.",
    features: ["SSO & SCIM", "Dedicated success manager", "Custom data retention"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade only when your team outgrows it.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`h-full ${
                  plan.highlighted ? "border-primary shadow-md ring-1 ring-primary" : ""
                }`}
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-6">
                    <span className="font-display text-3xl font-semibold">{plan.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-8 w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.name === "Scale" ? "Contact sales" : "Get started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
