const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.maxWorkers = 2;

// Disable expo-router specific transforms
config.transformer = {
  ...config.transformer,
  // Don't set any routerRoot
};

module.exports = config;