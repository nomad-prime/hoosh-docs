# Installation

Get Hoosh up and running in just a few minutes. We support multiple installation methods to fit your workflow.

## Quick Install (Recommended)

The fastest way to get started with Hoosh on macOS, Linux, or Windows (WSL):

```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nomad-prime/hoosh/releases/download/v0.4.3/hoosh-installer.sh | sh
```

This will download and install the latest precompiled binary for your platform.

## Building from Source

Alternatively, build from source for development or customization:

### Prerequisites

- **Rust 2024 edition or later** ([Install Rust](https://www.rust-lang.org/tools/install))
- **Cargo** (included with Rust)

## Building from Source

Building from source is the most straightforward way to get started:

```bash
# Clone the repository
git clone https://github.com/nomad-prime/hoosh
cd hoosh

# Build the release binary
cargo build --release

# The binary is now available at
./target/release/hoosh
```

### Add to Your PATH

To use `hoosh` from anywhere in your terminal:

```bash
# macOS/Linux
export PATH="$PATH:$(pwd)/target/release"
echo 'export PATH="$PATH:/path/to/hoosh/target/release"' >> ~/.bash_profile

# Or create a symbolic link
sudo ln -s $(pwd)/target/release/hoosh /usr/local/bin/hoosh
```

## Verify Installation

Confirm Hoosh is installed correctly:

```bash
hoosh --version
```

## Next Steps

1. **Configure Hoosh**: Run `hoosh setup` for the interactive setup wizard
2. **Read Quick Start**: Learn the basics with our [Quick Start guide](./quick-start.md)
3. **Explore Backends**: Decide which [AI backend](./backends.md) works best for you

## Troubleshooting

### "cargo: command not found"
Install Rust using the official installer:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Build fails
Ensure you have the latest Rust toolchain:
```bash
rustup update
```

### Permission denied running hoosh
Make sure the binary is executable:
```bash
chmod +x ./target/release/hoosh
```

## Development Setup

If you plan to contribute to Hoosh:

```bash
# Clone and navigate
git clone https://github.com/nomad-prime/hoosh
cd hoosh

# Run tests
cargo test

# Run with debug logging
RUST_LOG=debug cargo run

# Run with release optimizations
cargo run --release
```

Need help? Check our [troubleshooting guide](../guide/security.md) or [open an issue](https://github.com/nomad-prime/hoosh/issues).
