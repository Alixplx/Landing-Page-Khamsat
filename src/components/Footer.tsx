import { Workflow, Twitter, Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: "المنتج",
    links: ["المزايا", "التسعير", "سجل التغييرات", "التكاملات"],
  },
  {
    title: "الشركة",
    links: ["من نحن", "المدونة", "الوظائف", "تواصل معنا"],
  },
  {
    title: "المصادر",
    links: ["الوثائق", "الأدلة", "الدعم", "الحالة"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Workflow className="h-4 w-4" />
              </span>
              Flowly
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              سطر عمل هادئ واحد للفرق التي تفضل التنفيذ بدلًا من تحديثات الحالة.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Github" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Flowly. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              الخصوصية
            </a>
            <a href="#" className="hover:text-foreground">
              الشروط
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
