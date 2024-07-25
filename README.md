
# WeatherX - A Chrome Extension

WeatherX is a simple and intuitive Chrome extension that displays the current weather in your city. Leveraging the OpenWeather API, this extension provides real-time weather updates directly in your browser.

## Features

- Real-time weather updates for your current location.
- Simple and clean user interface.
- Easy to install and use.

## Tech Stack

- **HTML:** For structuring the extension's popup interface.
- **CSS:** For styling the extension to provide a user-friendly experience.
- **JavaScript:** For handling the logic and API interactions.
- **OpenWeather API:** For fetching real-time weather data.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/weatherx-chrome-extension.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click on "Load unpacked" and select the cloned repository folder.

5. The WeatherX extension should now appear in your list of extensions.

## Usage

1. Click on the WeatherX icon in the Chrome toolbar.

2. The extension will automatically detect your location and display the current weather.

3. Refresh the popup if the location or weather does not update immediately.

## Configuration

To use the OpenWeather API, you need an API key. Follow these steps to configure the extension with your API key:

1. Sign up at [OpenWeather](https://openweathermap.org/api) to get your free API key.

2. Open the `popup.js` file in the cloned repository.

3. Replace `YOUR_API_KEY_HERE` with your actual OpenWeather API key:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

4. Save the changes and reload the extension in Chrome.

## Contributing

1. Fork the repository.

2. Create your feature branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```

3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:
   ```bash
   git push origin feature/my-new-feature
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeather](https://openweathermap.org/api) for providing the weather data API.
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for guidance on building Chrome extensions.

---

Feel free to modify and expand upon this template to better suit your project's needs.
