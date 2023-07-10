/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.vecteezy.com",
                port: "",
                pathname: "/system/resources/**"
            }
        ]
    }
}

module.exports = nextConfig
