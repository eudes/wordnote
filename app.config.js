module.exports = ({ config }) => {
    config.expo.owner = process.env.EXPO_OWNER || config.expo.owner
    config.expo.slug = process.env.EXPO_SLUG || config.expo.slug
    return {
      ...config,
    }
  }