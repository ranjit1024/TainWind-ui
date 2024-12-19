export function Sidebar() {
  return (
    <div className="bg-slate-800 p-5 h-screen ">
      <div className="logo flex items-center justify-center">
        <div className="size-10 rounded bg-white"></div>

        <div className="name text-white ml-6">
          <p className="font-medium mb-1">Nishyan</p>
          <p className="text-sm align-bottom text-gray-50 opacity-70 underline-offset-1 underline decoration-white decoration-1 font-medium">
            visit Store
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6 text-white ml-[4.5rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
