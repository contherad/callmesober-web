type Props = {
  /** Base filename in /public/images, without extension or the -mobile suffix. */
  name: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Set on the LCP image so it loads eagerly at high priority. */
  priority?: boolean;
};

/**
 * Serves the -mobile crop below 768px and the full-size crop above it.
 *
 * Uses <picture> rather than next/image because these are art-directed pairs —
 * different crops of the same scene, not one source at two densities — which is
 * exactly what next/image cannot express. The files are already compressed webp,
 * so there is nothing left for the optimizer to do.
 */
export default function ArtDirectedImage({
  name,
  alt,
  width,
  height,
  className,
  priority = false,
}: Props) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={`/images/${name}-mobile.webp`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/${name}.webp`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
