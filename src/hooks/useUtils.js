import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer based scroll animations.
 * Returns a ref to attach to elements that should animate on scroll.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * Maps package image keys to actual image paths.
 */
export function getPackageImage(imageKey) {
  const imageMap = {
    kashmir_paradise: '/images/kashmir_paradise.png',
    honeymoon_kashmir: '/images/honeymoon_kashmir.png',
    great_lakes_trek: '/images/great_lakes_trek.png',
    family_retreat: '/images/family_retreat.png',
    winter_gulmarg: '/images/winter_gulmarg.png',
    ultimate_kashmir: '/images/ultimate_kashmir.png',
  };
  return imageMap[imageKey] || '/images/kashmir_paradise.png';
}

/**
 * Maps location image keys to actual image paths.
 */
export function getLocationImage(imageKey) {
  const imageMap = {
    srinagar: '/images/srinagar.png',
    gulmarg: '/images/gulmarg.png',
    pahalgam: '/images/pahalgam.png',
    sonmarg: '/images/sonmarg.png',
    yusmarg: '/images/yusmarg.png',
    doodhpathri: '/images/doodhpathri.png',
  };
  return imageMap[imageKey] || '/images/kashmir_paradise.png';
}

/**
 * Returns an icon component for given service/feature icon key
 */
export function getIconForKey(key) {
  const icons = {
    package: '📦',
    hotel: '🏨',
    heart: '💕',
    mountain: '🏔️',
    compass: '🧭',
    car: '🚗',
    map: '🗺️',
    wallet: '💰',
    headset: '🎧',
    users: '👥',
    shield: '🛡️',
    leaf: '🌿',
  };
  return icons[key] || '✨';
}
