import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect?: (isIntersecting: boolean) => void;
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  onIntersect,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsIntersecting = entry.isIntersecting;
        setIsIntersecting(newIsIntersecting);
        
        if (onIntersect) {
          onIntersect(newIsIntersecting);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [root, rootMargin, threshold, onIntersect]);

  return { targetRef, isIntersecting };
};