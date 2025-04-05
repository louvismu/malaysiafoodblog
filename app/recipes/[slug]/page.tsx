import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, Users, Printer, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecipePage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the recipe data based on the slug
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    return <div className="container py-10 text-center">Recipe not found</div>
  }

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
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium hover:underline mb-6">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">{recipe.title}</h1>
                <p className="text-lg text-muted-foreground">{recipe.description}</p>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Prep Time</div>
                    <div className="text-sm text-muted-foreground">{recipe.prepTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Cook Time</div>
                    <div className="text-sm text-muted-foreground">{recipe.cookTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Total Time</div>
                    <div className="text-sm text-muted-foreground">{recipe.totalTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Servings</div>
                    <div className="text-sm text-muted-foreground">{recipe.servings}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Ingredients</h2>
                  <ul className="mt-4 space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Instructions</h2>
                  <ol className="mt-4 space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <p>{instruction}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                {recipe.tips && (
                  <div className="rounded-lg bg-muted p-6">
                    <h2 className="text-xl font-bold tracking-tight mb-2">Tips</h2>
                    <ul className="space-y-2">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary h-1.5 w-1.5 mt-2" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-bold text-lg mb-4">More Malaysian Recipes</h3>
                  <div className="space-y-4">
                    {getRelatedRecipes(params.slug).map((relatedRecipe, index) => (
                      <Link
                        key={index}
                        href={`/recipes/${relatedRecipe.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <div className="aspect-square w-16 h-16 rounded-md overflow-hidden">
                          <Image
                            src={relatedRecipe.image || "/placeholder.svg"}
                            alt={relatedRecipe.title}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {relatedRecipe.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">{relatedRecipe.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Curry", "Noodles", "Rice", "Street Food", "Desserts", "Vegetarian", "Quick & Easy"].map(
                      (category, index) => (
                        <Link
                          key={index}
                          href={`/categories/${category.toLowerCase().replace(" & ", "-")}`}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-muted"
                        >
                          {category}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

function getRecipeBySlug(slug: string) {
  // In a real application, you would fetch this data from a database or API
  const recipes = {
    "nasi-lemak": {
      title: "Nasi Lemak - Malaysia's National Dish",
      description: "Fragrant coconut rice served with sambal, fried anchovies, peanuts, cucumber, and boiled egg. 图片展示了正宗的马来西亚椰浆饭。",
      image: "/recipes/nasilemak.jpg",
      prepTime: "20 mins",
      cookTime: "25 mins",
      totalTime: "45 mins",
      servings: "4",
      category: "Rice Dishes",
      ingredients: [
        "2 cups jasmine rice, washed and drained",
        "1 cup coconut milk",
        "1 cup water",
        "2 pandan leaves, knotted",
        "1 lemongrass stalk, bruised",
        "1/2 teaspoon salt",
        "100g dried anchovies (ikan bilis), cleaned",
        "1/2 cup roasted peanuts",
        "1 cucumber, sliced",
        "4 hard-boiled eggs, halved",
        "For the sambal: 15 dried chilies, 1 onion, 3 cloves garlic, 1 teaspoon belacan, 1 tablespoon tamarind juice, 1 tablespoon sugar, salt to taste",
      ],
      instructions: [
        "Combine rice, coconut milk, water, pandan leaves, lemongrass, and salt in a rice cooker. Cook until done.",
        "For the sambal, soak dried chilies in hot water until soft. Blend chilies, onion, garlic, and belacan into a paste.",
        "Heat oil in a pan and sauté the paste until fragrant. Add tamarind juice, sugar, and salt. Cook until the oil separates.",
        "In another pan, fry the anchovies until crispy. Drain on paper towels.",
        "Serve the coconut rice with sambal, fried anchovies, roasted peanuts, cucumber slices, and hard-boiled eggs.",
      ],
      tips: [
        "For the best flavor, use fresh coconut milk instead of canned.",
        "The sambal can be made in advance and stored in the refrigerator for up to a week.",
        "For a healthier version, you can use brown rice instead of white rice.",
        "Nasi lemak is traditionally wrapped in banana leaves, which adds a unique aroma.",
      ],
    },
    rendang: {
      title: "Beef Rendang - Slow-Cooked Spiced Coconut Beef",
      description: "A rich and tender beef stew cooked in coconut milk and a mixture of ground spices.",
      image: "/recipes/beefrendang.jpg", // 修改为实际的Beef Rendang图片路径
      prepTime: "30 mins",
      cookTime: "3 hours",
      totalTime: "3 hours 30 mins",
      servings: "6",
      category: "Curry Dishes",
      ingredients: [
        "1 kg beef chuck, cut into 4cm cubes",
        "5 tablespoons cooking oil",
        "1 cinnamon stick",
        "3 cloves",
        "3 star anise",
        "3 cardamom pods",
        "1 lemongrass stalk, bruised",
        "1 cup coconut milk",
        "1 cup water",
        "2 teaspoons tamarind paste",
        "4 kaffir lime leaves",
        "1 tablespoon palm sugar",
        "Salt to taste",
        "For the spice paste: 12 dried chilies, 1 onion, 6 cloves garlic, 4 candlenuts, 2cm galangal, 2cm ginger, 2cm turmeric, 1 teaspoon coriander seeds",
      ],
      instructions: [
        "Blend all the spice paste ingredients in a food processor until smooth.",
        "Heat oil in a large pot over medium heat. Add cinnamon, cloves, star anise, and cardamom. Stir until fragrant.",
        "Add the spice paste and lemongrass. Cook until the paste darkens and oil separates.",
        "Add the beef cubes and stir to coat them with the spice paste.",
        "Pour in coconut milk and water. Add tamarind paste, kaffir lime leaves, and palm sugar.",
        "Bring to a boil, then reduce heat to low. Simmer uncovered for about 3 hours, stirring occasionally.",
        "The rendang is done when the meat is tender and the sauce has thickened and darkened. Season with salt to taste.",
      ],
      tips: [
        "Authentic rendang gets better with time. It's even more flavorful the next day.",
        "For a spicier rendang, add more dried chilies to the spice paste.",
        "Rendang can be stored in the refrigerator for up to a week or frozen for up to 3 months.",
        "Serve with steamed rice or ketupat (rice cakes).",
      ],
    },
  }

  return recipes[slug as keyof typeof recipes]
}

function getRelatedRecipes(currentSlug: string) {
  // In a real application, you would fetch related recipes based on category, tags, etc.
  return [
    {
      title: "Nasi Lemak",
      slug: "nasi-lemak",
      image: "/thumbnails/nasi-lemak-thumb.jpg",  // 替换占位图
      category: "Rice Dishes",
    },
    {
      title: "Beef Rendang",
      slug: "rendang",
      image: "/placeholder.svg?height=64&width=64",
      category: "Curry Dishes",
    },
    {
      title: "Char Kuey Teow",
      slug: "char-kuey-teow",
      image: "/placeholder.svg?height=64&width=64",
      category: "Noodle Dishes",
    },
    {
      title: "Curry Laksa",
      slug: "curry-laksa",
      image: "/placeholder.svg?height=64&width=64",
      category: "Soup",
    },
  ].filter((recipe) => recipe.slug !== currentSlug)
}

