import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for Maintaining Oral Health",
    excerpt: "Learn the best practices for keeping your teeth and gums healthy with these expert tips.",
    author: "Dr. Sarah Johnson",
    date: "2025-07-15",
    readTime: "5 min read",
    category: "Oral Health",
    image: "/images/blog/oral-health-tips.jpg",
    slug: "5-essential-tips-for-maintaining-oral-health"
  },
  {
    id: 2,
    title: "Understanding Dental Implants: A Complete Guide",
    excerpt: "Everything you need to know about dental implants, from procedure to recovery.",
    author: "Dr. Michael Chen",
    date: "2025-07-10",
    readTime: "8 min read",
    category: "Dental Implants",
    image: "/images/blog/dental-implants.jpg",
    slug: "understanding-dental-implants"
  },
  {
    id: 3,
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Discover how your oral health impacts your overall well-being and what you can do about it.",
    author: "Dr. Emily Wilson",
    date: "2025-07-05",
    readTime: "6 min read",
    category: "General Health",
    image: "/images/blog/oral-health-wellness.jpg",
    slug: "oral-health-and-overall-wellness"
  },
  {
    id: 4,
    title: "Children's Dental Care: Building Healthy Habits Early",
    excerpt: "Expert advice on establishing good dental care routines for children of all ages.",
    author: "Dr. Robert Garcia",
    date: "2025-06-28",
    readTime: "7 min read",
    category: "Pediatric Dentistry",
    image: "/images/blog/children-dental-care.jpg",
    slug: "children-dental-care-habits"
  },
  {
    id: 5,
    title: "The Truth About Teeth Whitening: What Really Works",
    excerpt: "Separating fact from fiction when it comes to achieving a brighter smile.",
    author: "Dr. Lisa Wong",
    date: "2025-06-20",
    readTime: "5 min read",
    category: "Cosmetic Dentistry",
    image: "/images/blog/teeth-whitening.jpg",
    slug: "truth-about-teeth-whitening"
  },
  {
    id: 6,
    title: "Dealing with Dental Anxiety: Tips for a Stress-Free Visit",
    excerpt: "Overcome your fear of the dentist with these helpful strategies and techniques.",
    author: "Dr. James Wilson",
    date: "2025-06-15",
    readTime: "6 min read",
    category: "Patient Care",
    image: "/images/blog/dental-anxiety.jpg",
    slug: "dealing-with-dental-anxiety"
  }
];

export default function Blog() {
  const categories = ["All", "Oral Health", "Dental Implants", "Cosmetic Dentistry", "Pediatric Dentistry", "General Health"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Dental Health Blog</h1>
        <p className="text-lg text-muted-foreground">Expert advice and insights for your oral health journey</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">
                {post.category}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0 h-auto">
                Read More →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}

// Add the missing useState import
import { useState } from "react";
