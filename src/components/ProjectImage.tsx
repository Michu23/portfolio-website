import { useState } from 'react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  stack: string[];
}

/** Project thumbnail with a styled fallback when no image exists yet. */
export default function ProjectImage({ src, alt, stack }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const url = src ? `${import.meta.env.BASE_URL}${src}` : undefined;
  const showImage = Boolean(url) && !failed;

  return (
    <span className={`media-image${showImage ? ' has-image' : ''}`}>
      {showImage && <img src={url} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {!showImage && (
        <span className="image-fallback">
          <span className="display">M.</span>
          <span className="fallback-stack" aria-hidden>
            {stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </span>
        </span>
      )}
    </span>
  );
}
