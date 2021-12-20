import Image from 'next/image';

export default function ImageProp({src, alt}) {
  return (
    <Image
      src={src || ''}
      alt={alt || 'webiste image'}
      placeholder="blur"
      blurDataURL={src || ''}
      layout="fill"
      className="blur-background"
    />
  );
}
