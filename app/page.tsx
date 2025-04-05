import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>Malaysian Food Blog</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/recipes" className="text-sm font-medium hover:underline">
              Recipes
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search recipes..." className="w-[200px] pl-8 md:w-[300px] rounded-md" />
            </form>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/nasi-lemak">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/nasilemak2.jpg"
                    alt="Nasi Lemak - Malaysia's National Dish"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">FEATURED</div>
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        Nasi Lemak: Malaysia's National Dish - The Perfect Coconut Rice Breakfast
                      </h2>
                      <p className="text-sm text-white/80">
                        Discover the authentic recipe for Malaysia's beloved national dish
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/rendang">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/beefrendang.jpg"
                    alt="Beef Rendang"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">POPULAR</div>
                      <h2 className="text-lg font-bold">Beef Rendang: The World's Most Delicious Dish</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/char-kuey-teow">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/charkueyteow.jpg"
                    alt="Char Kuey Teow"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">STREET FOOD</div>
                      <h2 className="text-lg font-bold">Char Kuey Teow: Penang's Famous Stir-Fried Noodles</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/laksa">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/laksa2.jpg"
                    alt="Laksa"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">SOUP</div>
                      <h2 className="text-lg font-bold">Laksa: The Spicy Noodle Soup That Warms Your Soul</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/roti-canai">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/roticanai2.jpg"
                    alt="Roti Canai"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">BREAKFAST</div>
                      <h2 className="text-lg font-bold">Roti Canai: Flaky Flatbread with Curry Dipping Sauce</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1 relative group overflow-hidden rounded-lg">
              <Link href="/recipes/satay">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/recipes/satay.jpg"
                    alt="Satay"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1">GRILLED</div>
                      <h2 className="text-lg font-bold">Satay: Grilled Skewers with Peanut Sauce</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="container px-4 md:px-6 py-6 bg-gray-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Most Popular Recipes This Week</h2>
            <Link href="/popular" className="text-sm font-medium flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {num}
                </div>
                <div className="flex-grow">
                  <Link href={`/recipes/popular-${num}`} className="group">
                    <h3 className="font-medium group-hover:text-primary transition-colors">{getPopularRecipe(num)}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=${num}`}
                    alt={getPopularRecipe(num)}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Our Best Curry Recipes</h2>
            <Link href="/categories/curry" className="text-sm font-medium flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getCurryRecipes().map((recipe, index) => (
              <Link key={index} href={`/recipes/${recipe.slug}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${index + 1}`}
                    alt={recipe.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < recipe.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Noodle Dishes</h2>
            <Link href="/categories/noodles" className="text-sm font-medium flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getNoodleRecipes().map((recipe, index) => (
              <Link key={index} href={`/recipes/${recipe.slug}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${index + 1}`}
                    alt={recipe.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < recipe.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-10 bg-gray-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Vegetarian Malaysian Recipes</h2>
            <Link href="/categories/vegetarian" className="text-sm font-medium flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getVegetarianRecipes().map((recipe, index) => (
              <Link key={index} href={`/recipes/${recipe.slug}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${index + 1}`}
                    alt={recipe.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < recipe.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Quick & Easy Malaysian Recipes</h2>
            <Link href="/categories/quick-easy" className="text-sm font-medium flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getQuickEasyRecipes().map((recipe, index) => (
              <Link key={index} href={`/recipes/${recipe.slug}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${index + 1}`}
                    alt={recipe.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < recipe.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container px-4 md:px-6 py-10 bg-amber-50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">Get the latest Malaysian recipes delivered to your inbox</p>
          </div>
          <form className="max-w-md mx-auto flex gap-2">
            <Input type="email" placeholder="Your email address" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Malaysian Food Blog</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover authentic Malaysian recipes, cooking tips, and food stories from Malaysia's diverse culinary
                heritage.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/categories/curry" className="hover:underline">
                    Curry Dishes
                  </Link>
                </li>
                <li>
                  <Link href="/categories/noodles" className="hover:underline">
                    Noodle Dishes
                  </Link>
                </li>
                <li>
                  <Link href="/categories/rice" className="hover:underline">
                    Rice Dishes
                  </Link>
                </li>
                <li>
                  <Link href="/categories/street-food" className="hover:underline">
                    Street Food
                  </Link>
                </li>
                <li>
                  <Link href="/categories/desserts" className="hover:underline">
                    Malaysian Desserts
                  </Link>
                </li>
                <li>
                  <Link href="/categories/vegetarian" className="hover:underline">
                    Vegetarian
                  </Link>
                </li>
                <li>
                  <Link href="/categories/quick-easy" className="hover:underline">
                    Quick & Easy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Malaysian Food Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function getPopularRecipe(num: number) {
  // 返回热门食谱名称
  const popularRecipes = [
    "Nasi Lemak - Malaysia's National Dish",
    "Beef Rendang - Slow-Cooked Spiced Coconut Beef",
    "Char Kuey Teow - Penang's Famous Stir-Fried Noodles",
    "Laksa - The Spicy Noodle Soup That Warms Your Soul",
    "Roti Canai - Flaky Flatbread with Curry Dipping Sauce",
    "Satay - Grilled Skewers with Peanut Sauce",
    "Mee Goreng - Spicy Fried Noodles",
    "Curry Mee - Curry Noodle Soup",
    "Nasi Goreng - Malaysian Fried Rice",
    "Cendol - Sweet Coconut Dessert"
  ];
  
  return popularRecipes[num - 1] || `Popular Recipe ${num}`;
}

function getRecipeBySlug(slug: string) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <Image
        src="/recipes/nasilemak2.jpg"
        alt="Nasi Lemak - Malaysia's National Dish"
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <div className="text-xs font-semibold uppercase tracking-wider mb-1">FEATURED</div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Nasi Lemak: Malaysia's National Dish - The Perfect Coconut Rice Breakfast
          </h2>
          <p className="text-sm text-white/80">
            Discover the authentic recipe for Malaysia's beloved national dish
          </p>
        </div>
      </div>
    </div>
  );
}

function getRelatedRecipes(currentSlug: string) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <Image
        src="/recipes/nasilemak2.jpg"
        alt="Nasi Lemak - Malaysia's National Dish"
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <div className="text-xs font-semibold uppercase tracking-wider mb-1">FEATURED</div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Nasi Lemak: Malaysia's National Dish - The Perfect Coconut Rice Breakfast
          </h2>
          <p className="text-sm text-white/80">
            Discover the authentic recipe for Malaysia's beloved national dish
          </p>
        </div>
      </div>
    </div>
  );
}

function getCurryRecipes() {
  return [
    { title: "Malaysian Chicken Curry", slug: "malaysian-chicken-curry", rating: 5 },
    { title: "Fish Head Curry", slug: "fish-head-curry", rating: 4 },
    { title: "Beef Rendang", slug: "beef-rendang", rating: 5 },
    { title: "Vegetable Curry with Okra", slug: "vegetable-curry-okra", rating: 4 },
    { title: "Prawn Curry with Pineapple", slug: "prawn-curry-pineapple", rating: 4 },
    { title: "Mutton Curry", slug: "mutton-curry", rating: 5 },
    { title: "Squid Curry", slug: "squid-curry", rating: 3 },
    { title: "Egg Curry", slug: "egg-curry", rating: 4 },
  ]
}

function getNoodleRecipes() {
  return [
    { title: "Char Kuey Teow", slug: "char-kuey-teow", rating: 5 },
    { title: "Curry Laksa", slug: "curry-laksa", rating: 5 },
    { title: "Asam Laksa", slug: "asam-laksa", rating: 4 },
    { title: "Mee Goreng Mamak", slug: "mee-goreng-mamak", rating: 4 },
    { title: "Hokkien Mee", slug: "hokkien-mee", rating: 4 },
    { title: "Pan Mee", slug: "pan-mee", rating: 3 },
    { title: "Mee Rebus", slug: "mee-rebus", rating: 4 },
    { title: "Wonton Noodles", slug: "wonton-noodles", rating: 4 },
  ]
}

function getVegetarianRecipes() {
  return [
    { title: "Vegetable Curry", slug: "vegetable-curry", rating: 4 },
    { title: "Sayur Lodeh", slug: "sayur-lodeh", rating: 4 },
    { title: "Vegetarian Mee Goreng", slug: "vegetarian-mee-goreng", rating: 4 },
    { title: "Acar - Malaysian Pickled Vegetables", slug: "acar", rating: 3 },
    { title: "Vegetarian Curry Laksa", slug: "vegetarian-curry-laksa", rating: 5 },
    { title: "Stir-Fried Kangkung with Belacan", slug: "kangkung-belacan", rating: 4 },
    { title: "Vegetarian Nasi Lemak", slug: "vegetarian-nasi-lemak", rating: 4 },
    { title: "Vegetable Popiah", slug: "vegetable-popiah", rating: 3 },
  ]
}

function getQuickEasyRecipes() {
  return [
    { title: "15-Minute Mee Goreng", slug: "quick-mee-goreng", rating: 4 },
    { title: "Easy Nasi Goreng", slug: "easy-nasi-goreng", rating: 4 },
    { title: "Quick Curry Puffs", slug: "quick-curry-puffs", rating: 3 },
    { title: "Simple Roti John", slug: "simple-roti-john", rating: 4 },
    { title: "Easy Chicken Satay", slug: "easy-chicken-satay", rating: 4 },
    { title: "Quick Coconut Rice", slug: "quick-coconut-rice", rating: 3 },
    { title: "Simple Cucumber Acar", slug: "simple-cucumber-acar", rating: 3 },
    { title: "Easy Sambal Eggs", slug: "easy-sambal-eggs", rating: 4 },
  ]
}

