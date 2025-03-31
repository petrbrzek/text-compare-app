# Text Diff Viewer

A clean, elegant, and full-screen text comparison tool that highlights differences between two text inputs.

![Text Diff Viewer Screenshot](https://via.placeholder.com/800x400?text=Text+Diff+Viewer)

## Features

- **Two-Column Layout**: Side-by-side comparison of original and new text
- **Tabbed Interface**: Switch between editor and diff views
- **Word-Level Comparison**: Detailed highlighting of specific word changes
- **Full-Screen Design**: Maximizes available space for better visibility
- **Dark/Light Theme Support**: Automatically adapts to your system preferences
- **Responsive Design**: Works on both desktop and mobile devices
- **Client-Side Only**: No backend required, all processing happens in the browser

## Technology Stack

- **Next.js**: React framework for the application
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **shadcn/ui**: For UI components (buttons, cards, tabs, etc.)
- **react-diff-viewer-continued**: For the diff comparison functionality
- **next-themes**: For theme switching capabilities

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/text-diff-viewer.git
   cd text-diff-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Navigate to the "Editor" tab
2. Paste your original text in the left column
3. Paste your new text in the right column
4. Switch to the "Diff View" tab to see the differences highlighted
5. Use the "Clear All" button to reset both text areas

## How It Works

The application uses the `react-diff-viewer-continued` library to compare the two text inputs and highlight the differences. The comparison is done at the word level, making it easier to spot small changes.

The UI is built with shadcn/ui components and styled with Tailwind CSS. The application is fully client-side, with no backend required.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.