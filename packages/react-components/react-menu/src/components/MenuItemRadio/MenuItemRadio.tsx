import * as React from 'react';
import { useMenuItemRadio_unstable } from './useMenuItemRadio';
import { renderMenuItemRadio_unstable } from './renderMenuItemRadio';
import { useMenuItemRadioStyles_unstable } from './useMenuItemRadioStyles';
import type { MenuItemRadioProps } from './MenuItemRadio.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * Define a styled MenuItemRadio, using the `useMenuItemRadio_unstable` hook.
 */
export const MenuItemRadio: ForwardRefComponent<MenuItemRadioProps> = React.forwardRef((props, ref) => {
  const state = useMenuItemRadio_unstable(props, ref);

  useMenuItemRadioStyles_unstable(state);

  const { useMenuItemRadioStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderMenuItemRadio_unstable(state);
});

MenuItemRadio.displayName = 'MenuItemRadio';
