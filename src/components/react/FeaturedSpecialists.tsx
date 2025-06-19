import React, { useState, useEffect } from 'react';
import type { Specialist } from '../../types';

interface FeaturedSpecialistsProps {
  allSpecialists: Specialist[];
}

const FeaturedSpecialists: React.FC<FeaturedSpecialistsProps> = ({ allSpecialists }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSpecialists, setFilteredSpecialists] = useState<Specialist[]>([]);

  useEffect(() => {
    const initialFeatured = allSpecialists
      .filter(s => s && s.rating !== null && s.rating >= 4.5 && s.review_count !== null && s.review_count >= 50)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 6);
    setFilteredSpecialists(initialFeatured);
  }, [allSpecialists]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = allSpecialists.filter(specialist => {
      const nameMatch = specialist.name?.toLowerCase().includes(lowerCaseSearchTerm);
      const cityMatch = specialist.address?.city?.toLowerCase().includes(lowerCaseSearchTerm);
      const stateMatch = specialist.address?.state?.toLowerCase().includes(lowerCaseSearchTerm);
      return nameMatch || cityMatch || stateMatch;
    });

    // If there's a search term, show all matching results, otherwise show featured
    if (searchTerm) {
      setFilteredSpecialists(results);
    } else {
      const initialFeatured = allSpecialists
        .filter(s => s && s.rating !== null && s.rating >= 4.5 && s.review_count !== null && s.review_count >= 50)
        .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        .slice(0, 6);
      setFilteredSpecialists(initialFeatured);
    }
  }, [searchTerm, allSpecialists]);

  const createSlug = (name: string): string => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-display text-center mb-12 gradient-text">
        {searchTerm ? 'Search Results' : 'Featured Watch Repair Specialists'}
      </h2>

      <div className="mb-8 max-w-xl mx-auto">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search by name, city, or state..."
            className="w-full p-3 pr-12 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 text-gray-400 hover:text-primary" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecialists.length > 0 ? (
          filteredSpecialists.map((specialist) => (
            <div key={specialist.unique_id} className="card p-6 transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-display text-primary mb-3">
                {specialist.name}
              </h3>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(specialist.rating ?? 0) ? 'fill-current' : 'stroke-current fill-none'}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-400">
                  {specialist.rating ?? 'N/A'} ({specialist.review_count ?? 'N/A'} reviews)
                </span>
              </div>

              {specialist.address && (
                <p className="text-gray-400 mb-4">
                  {specialist.address.city ?? ''}{specialist.address.city && specialist.address.state ? ', ' : ''}{specialist.address.state ?? ''}
                </p>
              )}

              <a
                href={`/specialist/${specialist.unique_id}/${createSlug(specialist.name ?? '')}`}
                className="btn-secondary block text-center"
              >
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No specialists found matching your search.</p>
        )}
      </div>

      {!searchTerm && (
        <div className="text-center mt-12">
          <a href="/browse/1" className="btn-primary">
            View All Specialists
          </a>
        </div>
      )}
    </section>
  );
};

export default FeaturedSpecialists;
