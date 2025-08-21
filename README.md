# Remote Components Next.js Monorepo

This is a monorepo setup using pnpm workspaces with two Next.js applications that demonstrate remote components functionality.

## Apps

### Web App (`/apps/web`)

- Runs on port **3000**
- Contains a counter with sync provider
- Has a link to the remote component

### Components App (`/apps/components`)

- Runs on port **4000**
- Serves remote components
- Has a counter component at `/remote-components/counter`

## Features

- ✅ pnpm workspaces monorepo setup
- ✅ Two Next.js applications (web, components)
- ✅ `remote-components` dependency added to both apps
- ✅ `withRemoteComponents` configuration in both `next.config.ts` files
- ✅ Web app runs on port 3000
- ✅ Components app runs on port 4000
- ✅ Remote components route at `/remote-components/counter`
- ✅ Counter with sync provider functionality using `remote-components` shared modules
- ✅ Counter state managed by a provider in the web app
- ✅ Confetti animation on counter increment only in the web app counter provider implementation

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run both applications in development mode

```bash
# Run both apps simultaneously
pnpm dev

# Or run individually:
pnpm dev:web      # Web app on port 3000
pnpm dev:components # Components app on port 4000
```

### Build applications

```bash
pnpm build        # Build both apps
pnpm build:web    # Build web app only
pnpm build:components # Build components app only
```

Start applications in production mode

```bash
# Run both apps simultaneously
pnpm start

# Or run individually:
pnpm start:web      # Web app on port 3000
pnpm start:components # Components app on port 4000
```

## Usage

1. Start both applications using `pnpm dev`
2. Visit the web app at http://localhost:3000
3. Use the counter controls to change the state

## Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **pnpm** - Package manager and workspace manager
- **remote-components** - Remote component functionality
