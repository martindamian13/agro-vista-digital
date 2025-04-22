
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface ProductSliderProps {
  images: string[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSliderChange = (value: number[]) => {
    setCurrentIndex(Math.min(Math.floor(value[0] / (100 / (images.length - 1))), images.length - 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Carousel */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Carousel className="w-full" selectedIndex={currentIndex} setSelectedIndex={setCurrentIndex}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={image}
                        alt={`Product image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer overflow-hidden rounded-md border-2 ${
              index === currentIndex 
                ? "border-cmp-green" 
                : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider for Mobile */}
      <div className="mt-4 px-2 md:hidden">
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          value={[currentIndex * (100 / (images.length - 1))]}
          onValueChange={handleSliderChange}
          className="py-4"
        />
        <div className="text-center text-sm text-gray-500">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
