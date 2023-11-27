export interface NavigationProps {
  name: string;
  path: string;
  children?: Array<{
    name: string;
    path: string;
  }>;
}