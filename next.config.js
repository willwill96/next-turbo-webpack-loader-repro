/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                'layout.tsx': [{
                    loader: 'imports-loader',
                    options: {
                        imports: process.env.NODE_ENV === 'production' ? ['side-effects ../test'] : [{syntax: 'default', moduleName: '../test-dev', name: 'test'}]
                    }
                }]
            }
        }
    },
    webpack: (webpackConfig) => {
        webpackConfig.module.rules.push({
            test: /app\/layout.tsx$/,
            use: [{ loader: 'imports-loader', options: {
                imports: process.env.NODE_ENV === 'production' ? ['side-effects ../test'] : [{syntax: 'default', moduleName: '../test-dev', name: 'test'}]
            }}]
        })
        return webpackConfig
    }
}

module.exports = nextConfig
