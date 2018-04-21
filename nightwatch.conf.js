const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
    "src_folders": [
        "tests"
    ],
    "output_folder": "./reports",
    "page_objects_path": "./pages",
    "selenium": {
        "start_process": true,
        "server_path": seleniumServer.path,
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": chromedriver.path
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": true,
                "path": SCREENSHOT_PATH
            },
            "globals": {
                "waitForConditionTimeout": 10000
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true
            }
        }
    }
};
