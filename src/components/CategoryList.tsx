import React from 'react';
import NewsDataService from '../utility/dataService';

const CategoryList: React.FC = () => {
  const categories: any[] = NewsDataService.getCategories();
  return (
    <div className="category-list">
      {categories.map((category: any, i: number) => (
        <div className="category" key={i}>
          <div className={'icon ' + category}></div>
          <span>{category}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
