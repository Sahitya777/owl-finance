export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="pt-0 flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm">© 2025 Owl Finance. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-foreground/60 text-sm">Powered by</span>
            <a
              href="https://opacity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FECD6D] hover:text-[#FECD6D]/80 transition font-semibold text-sm"
            >
              Opacity
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
