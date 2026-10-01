import Link from "next/link";
// import { useParams } from "next/navigation";

// param use
// only server side components can be async
export default async function ProductListByCat({params, searchParams}: Readonly<{params: Promise<{slug: string}>, searchParams: Promise<Record<string, string>>}>) {
// export default function ProductListByCat() {
  const paramsSlug = await params 
  const searchParamsData = await searchParams;

  console.log(searchParamsData)
  // const paramsSlug = useParams()

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection of "{paramsSlug.slug}"
            </h2>

            <p className="mt-4 w-full text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium">
                {" "}
                Filters &amp; Sorting{" "}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-4 w-full">
            {/* <div className="lg:col-span-3"> */}
            <ul className="w-full grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>

              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>

              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>

              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>

              <li className=" hover:scale-102 transition duration-300 shadow">
                <Link
                  href="/product/product-detail-slug"
                  className="group block overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="w-full object-cover transition duration-500 group-hover:scale-105 aspect-3/4 h-75"
                  />

                  <div className="relative bg-gray-50 p-5">
                    <h3 className="text-xl text-primary font-semibold group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}