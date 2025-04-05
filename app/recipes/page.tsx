import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function RecipesPage() {
  // 获取所有食谱分类
  const categories = [
    { name: "所有食谱", slug: "all", count: getAllRecipes().length },
    { name: "米饭类", slug: "rice", count: getRiceRecipes().length },
    { name: "面食类", slug: "noodles", count: getNoodleRecipes().length },
    { name: "咖喱类", slug: "curry", count: getCurryRecipes().length },
    { name: "素食", slug: "vegetarian", count: getVegetarianRecipes().length },
    { name: "快手菜", slug: "quick-easy", count: getQuickEasyRecipes().length },
  ]

  // 获取所有食谱
  const recipes = getAllRecipes()

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
        <section className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 侧边栏分类 */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4">食谱分类</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link 
                        href={`/recipes?category=${category.slug}`}
                        className="flex justify-between items-center py-2 hover:text-primary"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-muted-foreground">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-bold mb-4">难度</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="easy" className="mr-2" />
                    <label htmlFor="easy">简单</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="medium" className="mr-2" />
                    <label htmlFor="medium">中等</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="hard" className="mr-2" />
                    <label htmlFor="hard">困难</label>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-bold mb-4">准备时间</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="under15" className="mr-2" />
                    <label htmlFor="under15">15分钟以下</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="under30" className="mr-2" />
                    <label htmlFor="under30">30分钟以下</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="over30" className="mr-2" />
                    <label htmlFor="over30">30分钟以上</label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 主要内容区 */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">所有食谱</h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">排序方式:</span>
                  <select className="text-sm border rounded p-1">
                    <option>最新发布</option>
                    <option>最受欢迎</option>
                    <option>准备时间 (短到长)</option>
                    <option>准备时间 (长到短)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                  <Link href={`/recipes/${recipe.slug}`} key={index} className="group">
                    <div className="overflow-hidden rounded-lg">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.title}
                          width={500}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        {recipe.category && (
                          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {recipe.category}
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                          {recipe.title}
                        </h3>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <span>{recipe.prepTime || "20分钟"}</span>
                          <span className="mx-2">•</span>
                          <span>{recipe.difficulty || "简单"}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span>Malaysian Food Blog</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
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
          <div className="text-center text-sm text-muted-foreground">
            © 2023 Malaysian Food Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// 获取所有食谱
function getAllRecipes() {
  // 合并所有分类的食谱
  return [
    ...getRiceRecipes(),
    ...getNoodleRecipes(),
    ...getCurryRecipes(),
    ...getVegetarianRecipes(),
    ...getQuickEasyRecipes(),
  ]
}

// 获取米饭类食谱
function getRiceRecipes() {
  return [
    { 
      title: "椰浆饭 (Nasi Lemak)", 
      slug: "nasi-lemak", 
      image: "/recipes/nasilemak.jpg", 
      category: "米饭类",
      prepTime: "20分钟",
      difficulty: "中等"
    },
    { 
      title: "马来西亚炒饭 (Nasi Goreng)", 
      slug: "nasi-goreng", 
      image: "/placeholder.svg", 
      category: "米饭类",
      prepTime: "15分钟",
      difficulty: "简单"
    },
    { 
      title: "黄姜饭 (Nasi Kunyit)", 
      slug: "nasi-kunyit", 
      image: "/placeholder.svg", 
      category: "米饭类",
      prepTime: "30分钟",
      difficulty: "中等"
    },
    { 
      title: "椰浆糯米饭 (Pulut Inti)", 
      slug: "pulut-inti", 
      image: "/placeholder.svg", 
      category: "米饭类",
      prepTime: "40分钟",
      difficulty: "困难"
    },
  ]
}

// 获取面食类食谱
function getNoodleRecipes() {
  return [
    { 
      title: "炒粿条 (Char Kuey Teow)", 
      slug: "char-kuey-teow", 
      image: "/placeholder.svg", 
      category: "面食类",
      prepTime: "15分钟",
      difficulty: "中等"
    },
    { 
      title: "咖喱叻沙 (Curry Laksa)", 
      slug: "curry-laksa", 
      image: "/placeholder.svg", 
      category: "面食类",
      prepTime: "25分钟",
      difficulty: "中等"
    },
    { 
      title: "亚参叻沙 (Asam Laksa)", 
      slug: "asam-laksa", 
      image: "/placeholder.svg", 
      category: "面食类",
      prepTime: "30分钟",
      difficulty: "困难"
    },
    { 
      title: "印度炒面 (Mee Goreng Mamak)", 
      slug: "mee-goreng-mamak", 
      image: "/placeholder.svg", 
      category: "面食类",
      prepTime: "15分钟",
      difficulty: "简单"
    },
    { 
      title: "福建面 (Hokkien Mee)", 
      slug: "hokkien-mee", 
      image: "/placeholder.svg", 
      category: "面食类",
      prepTime: "20分钟",
      difficulty: "中等"
    },
  ]
}

// 获取咖喱类食谱
function getCurryRecipes() {
  return [
    { 
      title: "马来西亚咖喱鸡 (Malaysian Chicken Curry)", 
      slug: "malaysian-chicken-curry", 
      image: "/placeholder.svg", 
      category: "咖喱类",
      prepTime: "25分钟",
      difficulty: "中等"
    },
    { 
      title: "鱼头咖喱 (Fish Head Curry)", 
      slug: "fish-head-curry", 
      image: "/placeholder.svg", 
      category: "咖喱类",
      prepTime: "35分钟",
      difficulty: "困难"
    },
    { 
      title: "仁当牛肉 (Beef Rendang)", 
      slug: "beef-rendang", 
      image: "/recipes/beefrendang.jpg", 
      category: "咖喱类",
      prepTime: "30分钟",
      difficulty: "困难"
    },
    { 
      title: "秋葵蔬菜咖喱 (Vegetable Curry with Okra)", 
      slug: "vegetable-curry-okra", 
      image: "/placeholder.svg", 
      category: "咖喱类",
      prepTime: "20分钟",
      difficulty: "简单"
    },
  ]
}

// 获取素食食谱
function getVegetarianRecipes() {
  return [
    { 
      title: "蔬菜咖喱 (Vegetable Curry)", 
      slug: "vegetable-curry", 
      image: "/placeholder.svg", 
      category: "素食",
      prepTime: "20分钟",
      difficulty: "简单"
    },
    { 
      title: "椰奶蔬菜汤 (Sayur Lodeh)", 
      slug: "sayur-lodeh", 
      image: "/placeholder.svg", 
      category: "素食",
      prepTime: "25分钟",
      difficulty: "中等"
    },
    { 
      title: "素食炒面 (Vegetarian Mee Goreng)", 
      slug: "vegetarian-mee-goreng", 
      image: "/placeholder.svg", 
      category: "素食",
      prepTime: "15分钟",
      difficulty: "简单"
    },
    { 
      title: "马来西亚腌菜 (Acar)", 
      slug: "acar", 
      image: "/placeholder.svg", 
      category: "素食",
      prepTime: "20分钟",
      difficulty: "简单"
    },
  ]
}

// 获取快手菜食谱
function getQuickEasyRecipes() {
  return [
    { 
      title: "15分钟炒面 (15-Minute Mee Goreng)", 
      slug: "quick-mee-goreng", 
      image: "/placeholder.svg", 
      category: "快手菜",
      prepTime: "5分钟",
      difficulty: "简单"
    },
    { 
      title: "简易炒饭 (Easy Nasi Goreng)", 
      slug: "easy-nasi-goreng", 
      image: "/placeholder.svg", 
      category: "快手菜",
      prepTime: "10分钟",
      difficulty: "简单"
    },
    { 
      title: "快手咖喱角 (Quick Curry Puffs)", 
      slug: "quick-curry-puffs", 
      image: "/placeholder.svg", 
      category: "快手菜",
      prepTime: "15分钟",
      difficulty: "简单"
    },
    { 
      title: "简易约翰面包 (Simple Roti John)", 
      slug: "simple-roti-john", 
      image: "/placeholder.svg", 
      category: "快手菜",
      prepTime: "10分钟",
      difficulty: "简单"
    },
  ]
}