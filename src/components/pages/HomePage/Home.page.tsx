import { usePageTitle } from '../../../hooks/usePageTitle';
import ProjectInfo from '../../ProjectInfo';

export const HomePage: React.FC = () => {
  usePageTitle('Home');
  return <ProjectInfo />;
};
