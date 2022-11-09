/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const withTM = require("next-transpile-modules")(["@project/shared"]);
module.exports = withTM({});
