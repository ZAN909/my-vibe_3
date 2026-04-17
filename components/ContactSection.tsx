export default function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
        <a
          href="mailto:your@email.com"
          className="hover:text-foreground transition-colors"
        >
          your@email.com
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
