import { RefObject } from 'react';

/**
 * Checks if the current environment supports WebGL.
 * @returns {boolean} True if WebGL is available, false otherwise.
 */
export const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};
