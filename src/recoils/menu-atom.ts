import { atom } from 'recoil';
import { v4 } from 'uuid';

export const mobileMenuOpen = atom({
  key: `isMobileMenuOpen/${v4()}`,
  default: false
});
