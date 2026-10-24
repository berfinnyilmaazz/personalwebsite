import { useState } from 'react';
import { Image } from 'lucide-react';

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Multiply-blend onto a paper background so white-background JPGs melt into the panel. */
  blend?: boolean;
  /** Zoom into the face of a full-body render; the value is the transform-origin that centres the face. */
  face?: string;
};

/** Image that shows a labelled placeholder until the file exists in /public. */
export default function Photo({ src, alt, className = '', imgClassName = '', blend = false, face }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${blend || face ? 'bg-paper' : ''} ${className}`}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-wine via-wine-deep to-ink p-3 text-center text-cream/60">
          <Image className="size-6" aria-hidden />
          <span className="font-mono text-[10px] break-all">{src}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={face ? { transformOrigin: face } : undefined}
          className={`h-full w-full object-cover ${blend || face ? 'mix-blend-multiply' : ''} ${
            face ? 'scale-[2.6]' : ''
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
