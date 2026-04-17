export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-bold tracking-tight mb-4">홍길동</h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-2">Frontend Developer</p>
      <p className="text-base text-gray-400 dark:text-gray-500 mb-8 max-w-md">
        좋은 코드로 더 나은 경험을 만듭니다.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-foreground rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
