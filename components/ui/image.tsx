import NextImage, { ImageProps } from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/muniraj-portfolio' : '';

export default function Image(props: ImageProps) {
  let { src, ...rest } = props;
  
  // Conditionally prepend basePath during production static exports
  // ensuring we don't accidentally double-prefix it!
  if (typeof src === 'string' && src.startsWith('/') && !src.startsWith(basePath)) {
    src = `${basePath}${src}`;
  }
  
  return <NextImage src={src} {...rest} />;
}
