import React from 'react';
import { Search } from 'lucide-react';
import { categories } from '../data/phrases';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  viewMode: 'all' | 'review' | 'learned';
  setViewMode: (v: 'all' | 'review' | 'learned') => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchQuery, setSearchQuery,
  selectedCategory, setSelectedCategory,
  viewMode, setViewMode
}) => {
  return (
    <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '800px' }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 200px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search phrases..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', padding: '10px 10px 10px 40px', 
              borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.2)', color: 'white',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
        </div>
        
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ 
            flex: '1 1 150px', padding: '10px', 
            borderRadius: '8px', border: '1px solid var(--glass-border)',
            background: 'var(--bg-color)', color: 'white',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        >
          <option value="All">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {(['all', 'review', 'learned'] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={viewMode === mode ? 'btn btn-primary' : 'btn btn-glass'}
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
          >
            {mode === 'all' ? 'All Phrases' : mode === 'review' ? 'Needs Review' : 'Learned'}
          </button>
        ))}
      </div>
    </div>
  );
};
