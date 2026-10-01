// by default every ts/tsx file is a server side component
  // canonn use web hook 
  // sync 
import { HeroBannerSection } from "@/components/banner/HeroSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Page || Ecommerce panel"
}

export default function Home() {
  return (
    <>
      <HeroBannerSection />

      <section className="bg-primary py-5 w-full">
        <div className="w-7xl flex justify-start items-start mx-auto py-5 flex-col gap-3">
          <h1 className="w-full text-white uppercase text-3xl font-semibold tracking-wide">
            featured collection
          </h1>
          <span className="bg-secondary h-2 w-30"></span>

          <div className="w-full flex gap-5">
            <div className="w-full">
              <div className="w-full">
                <Image
                  src="/cats/cat-1.jpg"
                  width={600}
                  height={800}
                  className="aspect-3/4 w-full h-auto hover:scale-101 transition duration-300"
                  alt="Cateogry"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex items-center justify-center border border-gray-900">
                <Link
                  href={"/categories/electronics"}
                  className="text-2xl font-semibold text-primary w-full"
                >
                  <div className="relative w-full hover:scale-102 transition duration-300">
                    <Image
                      src="/cats/cat-4.jpeg"
                      width={500}
                      height={400}
                      className="w-full h-100 aspect-square"
                      alt="cat 1"
                    />

                    <div className=" bottom-0 left-0 bg-amber-50 p-3 flex items-center justify-center">
                      Electronics
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full flex items-center justify-center">
                <Image
                  src="/cats/cat-4.jpeg"
                  width={500}
                  height={400}
                  className="w-full h-100 aspect-square"
                  alt="cat 1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Picked for you
            </h2>
          </header>

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
                      Male Tshirt
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
