import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AboutPage() {
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
        <section className="container px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">关于马来西亚美食博客</h1>
            
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src="/placeholder.svg"
                alt="我们的团队"
                width={1200}
                height={675}
                className="object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              <h2>我们的故事</h2>
              <p>
                欢迎来到马来西亚美食博客！我们是一群热爱马来西亚美食文化的美食爱好者，致力于向全世界分享马来西亚丰富多彩的烹饪传统。
              </p>
              
              <p>
                我们的博客始于2020年，源于对马来西亚多元文化烹饪遗产的热爱。马来西亚美食融合了马来、华人、印度和土著文化的影响，创造出了世界上最丰富多样的美食之一。
              </p>
              
              <h2>我们的使命</h2>
              <p>
                我们的使命是：
              </p>
              <ul>
                <li>保存和推广正宗的马来西亚食谱</li>
                <li>向全球美食爱好者介绍马来西亚丰富的烹饪传统</li>
                <li>分享马来西亚美食背后的文化故事和历史</li>
                <li>帮助读者在家中轻松重现马来西亚美食的独特风味</li>
              </ul>
              
              <h2>联系我们</h2>
              <p>
                我们很乐意听取您的反馈、问题或合作提议。请随时通过我们的<Link href="/contact" className="text-primary hover:underline">联系页面</Link>与我们联系。
              </p>
              
              <p>
                感谢您访问马来西亚美食博客。我们希望我们的食谱能激发您探索马来西亚丰富烹饪传统的热情！
              </p>
            </div>
          </div>
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