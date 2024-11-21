import Style from './Image.module.css'

export function Image({
	src,
	alt,
	width = '',
	minWidth = '',
	maxWidth = '',
	height = '',
	minHeight = '',
	maxHeight = '',
}) {
	return (
		<img
			className={Style.image}
			src={src}
			alt={alt}
			style={{
				width,
				minWidth,
				maxWidth,
				height,
				minHeight,
				maxHeight,
			}}
		/>
	)
}
