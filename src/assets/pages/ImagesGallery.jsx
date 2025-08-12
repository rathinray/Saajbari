import { useState, useEffect } from 'react';

export default function ImagesGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock wedding photos data
  const photos = [
    { id: 1, src: "https://picsum.photos/seed/wedding1/800/600 ", alt: "Wedding couple under the tree" },
    { id: 2, src: "https://picsum.photos/seed/wedding2/800/600 ", alt: "Bride walking down the aisle" },
    { id: 3, src: "https://picsum.photos/seed/wedding3/800/600 ", alt: "Ceremony decor with floral arrangements" },
    { id: 4, src: "https://picsum.photos/seed/wedding4/800/600 ", alt: "Happy newlyweds smiling" },
    { id: 5, src: "https://picsum.photos/seed/wedding5/800/600 ", alt: "Wedding cake with fresh flowers" },
    { id: 6, src: "https://picsum.photos/seed/wedding6/800/600 ", alt: "Wedding reception table setting" },
    { id: 7, src: "https://picsum.photos/seed/wedding7/800/600 ", alt: "Group family photo" },
    { id: 8, src: "https://picsum.photos/seed/wedding8/800/600 ", alt: "Golden hour at the venue" },
    { id: 9, src: "https://picsum.photos/seed/wedding9/800/600 ", alt: "Dancing at the reception" },
    { id: 10, src: "https://picsum.photos/seed/wedding10/800/600 ", alt: "Beautiful bridal bouquet" },
    { id: 11, src: "https://picsum.photos/seed/wedding11/800/600 ", alt: "Groom adjusting his tie" },
    { id: 12, src: "https://picsum.photos/seed/wedding12/800/600 ", alt: "Fireworks during the celebration" },
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="py-10 text-center bg-gradient-to-b from-pink-50 to-white border-b border-gray-100 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif text-pink-700 mb-2">Emma & James</h1>
        <p className="text-lg text-gray-600">August 12, 2023 • Napa Valley</p>
      </header>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openModal(photo)}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium px-4 py-2 bg-pink-600 rounded-full">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-50 py-6 mt-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2023 Emma & James Wedding. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal Lightbox */}
      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2 z-10 hover:bg-opacity-80 transition-all"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}