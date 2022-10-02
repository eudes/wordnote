module.exports = ({ config }) => {
    config.owner = process.env.EXPO_OWNER || config.owner
    config.slug = process.env.EXPO_SLUG || config.slug
    return {
      ...config,
    }
  }