import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import galleryBridal from "@/assets/gallery-bridal.jpg";
import galleryArabic from "@/assets/gallery-arabic.jpg";
import galleryFestival from "@/assets/gallery-festival.jpg";
import galleryParty from "@/assets/gallery-party.jpg";

const categories = ["All", "Bridal", "Arabic", "Traditional", "Modern", "Event"];

const galleryItems = [
  {
    id: 1,
    category: "Bridal",
    image: galleryBridal,
    title: "Traditional Bridal Mehendi",
    description: "Full hand intricate design",
  },
  {
    id: 2,
    category: "Arabic",
    image: galleryArabic,
    title: "Modern Arabic Design",
    description: "Floral patterns with bold strokes",
  },
  {
    id: 3,
    category: "Event",
    image: galleryFestival,
    title: "Eid Celebration Henna",
    description: "Festive designs for celebrations",
  },
  {
    id: 4,
    category: "Modern",
    image: galleryParty,
    title: "Contemporary Fusion",
    description: "Modern meets traditional",
  },
  {
    id: 5,
    category: "Bridal",
    image: galleryBridal,
    title: "Intricate Bridal Art",
    description: "Detailed dulhan design",
  },
  {
    id: 6,
    category: "Traditional",
    image: galleryArabic,
    title: "Classic Bengali Pattern",
    description: "Heritage-inspired artwork",
  },
  {
    id: 7,
    category: "Arabic",
    image: galleryFestival,
    title: "Elegant Arabic Floral",
    description: "Sophisticated floral motifs",
  },
  {
    id: 8,
    category: "Event",
    image: galleryParty,
    title: "Party Ready Design",
    description: "Quick and beautiful",
  },
];

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-overlay opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            Mehendi Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our collection of beautiful henna designs crafted with love
            and precision
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold-gradient text-secondary-foreground shadow-gold-glow"
                  : "bg-card text-muted-foreground hover:bg-secondary/10 hover:text-primary border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid mb-4 md:mb-6"
              >
                <div
                  className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div
                    className={
                      index % 3 === 0
                        ? "aspect-[3/4]"
                        : index % 3 === 1
                        ? "aspect-square"
                        : "aspect-[4/3]"
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mehendi-dark/90 via-mehendi-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-gold text-xs font-medium tracking-wider uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-cream-light font-heading text-lg mt-1">
                        {item.title}
                      </h3>
                      <p className="text-cream/70 text-sm mt-1">
                        {item.description}
                      </p>
                    </motion.div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-cream" />
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-sm font-medium bg-card text-muted-foreground border border-border hover:bg-secondary/10 hover:text-primary transition disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-gold-gradient text-secondary-foreground shadow-gold-glow"
                      : "bg-card text-muted-foreground border border-border hover:bg-secondary/10 hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-sm font-medium bg-card text-muted-foreground border border-border hover:bg-secondary/10 hover:text-primary transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            {selectedImage && (
              <>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-mehendi-dark/90 to-transparent rounded-b-xl">
                  <span className="text-gold text-xs font-medium tracking-wider uppercase">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-cream-light font-heading text-xl mt-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-cream/70 text-sm mt-1">
                    {selectedImage.description}
                  </p>
                </div>
              </>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-mehendi-dark/80 backdrop-blur-sm flex items-center justify-center hover:bg-mehendi-dark transition-colors"
            >
              <X className="w-5 h-5 text-cream" />
            </button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
