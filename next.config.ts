import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "picsum.photos" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "flagcdn.com" },
        ],
    },
    async headers() {
        return [
            {
                // Cache all images in the public folder
                source: "/(.*).(jpg|jpeg|png|webp|avif|ico|svg)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // Cache fonts
                source: "/(.*).(woff|woff2|eot|ttf|otf)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // www → non-www canonical redirect (301 permanent)
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.alufurn.com' }],
                destination: 'https://alufurn.com/:path*',
                permanent: true,
            },
            // Legacy /product route → aluminium-kitchen
            {
                source: '/product',
                destination: '/aluminium-kitchen',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
