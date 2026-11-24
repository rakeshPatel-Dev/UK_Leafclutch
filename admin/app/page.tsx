export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e6eee8] px-6 py-10 font-sans text-[#112a28] sm:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-48 h-[32rem] w-[32rem] rounded-full border border-[#c3d5c5]" />
        <div className="absolute -bottom-56 -right-32 h-[34rem] w-[34rem] rounded-full border border-[#c3d5c5]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#d3e0d5]" />
      </div>

      <section className="relative w-full max-w-5xl overflow-hidden border border-[#b9cdbd] bg-[#f7f8f2] shadow-[0_24px_80px_rgba(31,67,52,0.12)]">
        <div className="grid min-h-[34rem] md:grid-cols-[15rem_1fr]">
          <aside className="flex flex-col justify-between bg-[#163a35] p-7 text-[#e8f1e5] sm:p-9">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c8ed72] text-[#163a35]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 4.5C12 4.5 6.25 8.1 6.25 14.1c0 2.35 1.5 4.2 3.75 4.2 4.35 0 8.65-4.95 9.5-13.8Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M4.5 19.5c2.1-4.25 5.45-6.6 10.05-7.05"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-[-0.01em]">Leafclutch</span>
              </div>

              <div className="mt-20">
                <p className="text-xs font-medium tracking-[0.16em] text-[#a9c2ac]">WORKSPACE STATE</p>
                <p className="mt-3 max-w-[10rem] text-2xl leading-tight tracking-[-0.04em] text-[#f2f6ed]">
                  Foundation layer
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex gap-1.5" aria-label="Build progress: starting point">
                <span className="h-1.5 w-10 bg-[#c8ed72]" />
                <span className="h-1.5 w-10 bg-[#557c68]" />
                <span className="h-1.5 w-10 bg-[#557c68]" />
              </div>
              <p className="mt-4 text-xs leading-5 text-[#a9c2ac]">
                The essentials are taking shape.
              </p>
            </div>
          </aside>

          <div className="flex flex-col p-7 sm:p-10 lg:p-14">
            <div className="flex items-center justify-between gap-5 border-b border-[#d6dfd3] pb-5">
              <p className="text-xs font-medium tracking-[0.12em] text-[#65806d]">ADMIN WORKSPACE / 001</p>
              <div className="flex items-center gap-2 text-xs font-medium text-[#65806d]">
                <span className="h-2 w-2 rounded-full bg-[#a8d85f]" />
                Coming soon
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
              <p className="max-w-md text-sm leading-6 text-[#65806d]">A clear space for what comes next.</p>
              <h1 className="mt-5 max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.07em] text-[#163a35] sm:text-7xl">
                Admin panel will be built here.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#587064]">
                This workspace is ready for the tools, content, and decisions that keep Leafclutch moving.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#d6dfd3] pt-5 text-xs text-[#65806d] sm:flex-row sm:items-center sm:justify-between">
              <span>Current focus</span>
              <span className="font-medium text-[#163a35]">Setting the foundation</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
