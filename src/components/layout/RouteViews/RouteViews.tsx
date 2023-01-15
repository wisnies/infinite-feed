import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import InfiniteProductsPage from '../../pages/InfiniteProductsPage';
import PaginatedProductsPage from '../../pages/PaginatedProductsPage';
import ProductPage from '../../pages/ProductPage';

import styles from '../../../styles/components/layout/RouteViews.module.scss';

export const RouteViews: React.FC = () => {
  return (
    <main className={styles.container}>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/products-pag' element={<PaginatedProductsPage />} />
        <Route path='/products-inf' element={<InfiniteProductsPage />} />
        <Route path='/products/:productId' element={<ProductPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </main>
  );
};
