/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withTM = require("next-transpile-modules")(["@project/shared"]);

module.exports = withTM({});
