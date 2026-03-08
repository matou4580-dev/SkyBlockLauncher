const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// SkyBlock Launcher — Delta Arts
exports.REMOTE_DISTRO_URL = 'https://github.com/matou4580-dev/SkyBlockLauncher/releases/download/v1.0.0/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api