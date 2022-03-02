import sharp from "sharp";

export async function handler(event, context) {
	const binary = await sharp({
		create: {
			width: 300,
			height: 200,
			channels: 4,
			background: { r: 255, g: 0, b: 0, alpha: 0.5 }
		}
	})
		.png()
		.toBuffer();

	return {
		statusCode: 200,
		headers: {
			"Content-Type": "image/png"
		},
		isBase64Encoded: true,
		body: binary.toString('base64')
	};
}
