'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoFacadeProps {
  videoId: string;
  poster: string;
  title: string;
}

export default function VideoFacade({ videoId, poster, title }: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* object-cover crops the 4:3 thumbnail down to 16:9, removing
              YouTube's letterbox bars and filling the player cleanly. */}
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          {/* Dark scrim for play-button contrast */}
          <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
          {/* Play button */}
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_8px_32px_rgba(232,85,12,0.45)] transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-8 w-8 text-primary-foreground" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
}
