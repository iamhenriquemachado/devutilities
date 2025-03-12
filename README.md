# DevUtils

<p align="center">
  <img src="/public/logo.png" alt="DevUtils Logo" width="120" height="120" />
</p>

<p align="center">
  A collection of essential tools to streamline your development workflow.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#development">Development</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>


### Frontend Setup

```shellscript
# Install dependencies
npm install

# Start the development server
npm run dev
```

### Backend Setup

```shellscript
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
python main.py
```

## Development

### Project Structure

```plaintext
dev-utilities/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   ├── tools/            # Tool pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── tools/            # Tool-specific components
│   └── ui/               # UI components (shadcn)
├── backend/              # Python backend
│   ├── main.py           # FastAPI application
│   └── requirements.txt  # Python dependencies
├── public/               # Static assets
└── README.md             # Project documentation
```

### Environment Variables

Create a `.env.local` file in the root directory:

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Usage

1. Start both the frontend and backend servers as described in the installation section
2. Open your browser and navigate to `http://localhost:3000`
3. Use the search functionality (⌘K) to quickly find tools
4. Select a tool from the grid or search results
5. Follow the tool-specific instructions to use each utility


### Keyboard Shortcuts

- **⌘K (Mac) / Ctrl+K (Windows)**: Open search dialog
- **/** (Slash): Alternative shortcut to open search


### Tool Examples

#### JSON Formatter

1. Paste your JSON data into the input field
2. Click "Format JSON" or wait for auto-formatting if enabled
3. View the formatted JSON with proper indentation
4. Copy the result to your clipboard


#### Base64 Encoder/Decoder

1. Select "Encode" or "Decode" mode
2. Enter your text or Base64 string
3. Click the action button to process
4. Copy the result


#### Hash Generator

1. Enter the text you want to hash
2. Select the hash algorithm (MD5, SHA-1, SHA-256, etc.)
3. View the generated hash
4. Copy the result


## Deployment

### Deploying to Vercel

The easiest way to deploy DevUtils is using Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables
4. Deploy


```shellscript
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Deploying the Backend

For the Python backend, you have several options:

1. **Vercel Serverless Functions**: Convert the FastAPI app to serverless functions
2. **Railway**: Easy deployment for the Python backend
3. **Heroku**: Deploy the FastAPI app with a Procfile
4. **DigitalOcean App Platform**: Deploy directly from your GitHub repository


Example Procfile for Heroku:

```plaintext
web: uvicorn backend.main:app --host=0.0.0.0 --port=${PORT:-8000}
```

## Roadmap

Future features and improvements planned for DevUtils:

- Add more tools (Regex Tester, Markdown Preview, etc.)
- Implement user accounts for saving preferences across devices
- Add export/import functionality for tool configurations
- Create desktop applications using Electron or Tauri
- Add more themes and customization options
- Implement offline mode for all tools
- Add API documentation for programmatic access to tools


## FAQ

### Is DevUtils free to use?

Yes, DevUtils is completely free and open-source.

### Is my data secure when using DevUtils?

All processing happens in your browser or on your local machine. We don't store or transmit your data to any external servers.

### Can I use DevUtils offline?

Most tools work offline once the application is loaded. Some features that require API calls might not work without an internet connection.

### How can I contribute to DevUtils?

See the [Contributing](#contributing) section below. We welcome all contributions!

### Can I suggest a new tool?

Open an issue on GitHub with your suggestion.

## Security

### Reporting a Vulnerability

If you discover a security vulnerability, please send an email to [security@devutils.example.com](mailto:security@devutils.example.com) instead of opening a public issue. We will address it promptly.

## Support

If you need help or have questions:

- **GitHub Issues**: For bug reports and feature requests
- **Discord Community**: Join our [Discord server](https://discord.gg/devutils) for real-time support
- **Email**: [support@devutils.example.com](mailto:support@devutils.example.com)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


### Code Style

- Follow the existing code style
- Use ESLint and Prettier for JavaScript/TypeScript
- Use Black for Python code formatting


## License

This project is licensed under the MIT License - see the LICENSE file for details.

```plaintext
MIT License

Copyright (c) 2023 DevUtils

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Lucide Icons](https://lucide.dev/)


---

Made with 💜 by developers, for developers
