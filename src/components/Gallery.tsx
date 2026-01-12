import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import galleryBridal from "@/assets/gallery-bridal.jpg";
import galleryArabic from "@/assets/gallery-arabic.jpg";
import galleryFestival from "@/assets/gallery-festival.jpg";
import galleryParty from "@/assets/gallery-party.jpg";

const categories = ["All", "Bridal", "Arabic", "Festival", "Party"];

const galleryItems = [
  {
    id: 1,
    category: "Bridal",
    image: galleryBridal,
    title: "Traditional Bridal Mehendi",
  },
  {
    id: 2,
    category: "Arabic",
    image: galleryArabic,
    title: "Modern Arabic Design",
  },
  {
    id: 3,
    category: "Festival",
    image: galleryFestival,
    title: "Eid Celebration Henna",
  },
  {
    id: 4,
    category: "Party",
    image: galleryParty,
    title: "Elegant Party Design",
  },
  {
    id: 5,
    category: "Bridal",
    image: galleryBridal,
    title: "Intricate Bridal Art",
  },
  {
    id: 6,
    category: "Arabic",
    image: galleryArabic,
    title: "Floral Arabic Pattern",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            Mehendi Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our collection of beautiful henna designs for every occasion
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-card cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-mehendi-dark/0 group-hover:bg-mehendi-dark/60 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-xs font-medium tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-cream-light font-heading text-lg mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
