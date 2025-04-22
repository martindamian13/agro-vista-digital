
import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ProductSpec {
  name: string;
  value: string;
}

interface TechnicalDoc {
  name: string;
  url: string;
}

interface ProductDetailProps {
  product: {
    name: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    specs: ProductSpec[];
    technicalDoc: TechnicalDoc;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');

  return (
    <div className="space-y-6">
      {/* Cabecera del producto */}
      <div>
        <span className="text-sm font-medium text-cmp-green uppercase tracking-wider">
          {product.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1">
          {product.name}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'description'
              ? 'border-b-2 border-cmp-green text-cmp-green'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Descripción
        </button>
        <button
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === 'specs'
              ? 'border-b-2 border-cmp-green text-cmp-green'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('specs')}
        >
          Especificaciones
        </button>
      </div>

      {/* Contenido según el tab activo */}
      <div className="space-y-4">
        {activeTab === 'description' ? (
          <>
            <p className="text-gray-700">
              {product.description}
            </p>
            
            {product.longDescription && (
              <div className="mt-4">
                <div className={`text-gray-600 space-y-4 ${showFullDescription ? '' : 'line-clamp-3'}`}>
                  {product.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <button 
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 text-cmp-green hover:text-cmp-green/90 text-sm font-medium flex items-center"
                >
                  {showFullDescription ? (
                    <>
                      Ver menos <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Ver más <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-cmp-green/20 flex items-center justify-center mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-cmp-green"></span>
                    </div>
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Especificaciones Técnicas</h3>
            <div className="space-y-2">
              {product.specs.map((spec, index) => (
                <div key={index} className="py-2 flex justify-between border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600 font-medium">{spec.name}</span>
                  <span className="text-gray-800">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Separator />

      {/* Technical document download */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-800">Documentación Técnica</h3>
            <p className="text-sm text-gray-500">{product.technicalDoc.name}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-cmp-green text-cmp-green hover:text-white hover:bg-cmp-green"
            onClick={() => window.open(product.technicalDoc.url, '_blank')}
          >
            <Download className="h-4 w-4" />
            Descargar
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Button
          className="w-full bg-cmp-green hover:bg-cmp-green/90"
          size="lg"
        >
          Solicitar Información
        </Button>
        <p className="text-center text-xs text-gray-500 mt-2">
          Nuestros especialistas le contactarán para resolver cualquier duda.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
