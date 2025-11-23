---
layout: home

hero:
  name: "Hoosh"
  text: "The LLM Agnostic Coding Agent"
  tagline: "Seamlessly integrate multiple AI backends into your development workflow."
  image:
    src: /hoosh.svg
    alt: Hoosh
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View Documentation
      link: /guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/nomad-prime/hoosh

features:
  - icon: 🚀
    title: Multi-Backend LLM Support
    details: Choose your favorite LLM provider— OpenAI, Anthropic, Together AI, or Ollama. Switch seamlessly between models without changing your workflow.
  
  - icon: 🛠️
    title: Powerful Tool Integration
    details: Let Hoosh execute system commands, manage files, and run custom tools while you maintain full control through intelligent permission management.
  
  - icon: 💾
    title: Smart Context Management
    details: Maintain rich conversation history with full context awareness. Resume conversations where you left off with zero friction.
  
  - icon: 🔒
    title: Security-First Design
    details: Fine-grained permission system with review and autopilot modes. Trust projects, approve operations one-by-one, or automate safely.
  
  - icon: ⚙️
    title: Fully Configurable
    details: Customize everything through intuitive TOML configuration. Configure API keys, models, temperatures, and more with simple commands.
  
  - icon: 🦀
    title: Built in Pure Rust
    details: Lightning-fast performance, minimal resource footprint, and rock-solid reliability. A coding assistant you can trust.

---

## Why Hoosh?

**Hoosh** (هوش) means "intelligence" in Persian. It's not just another CLI tool—it's your intelligent partner in development.

### For Individual Developers

- **Save Hours**: Get instant assistance with code generation, debugging, and refactoring
- **Learn Faster**: Understand complex code patterns through AI-powered explanations
- **Your Choice**: Pick the AI provider that fits your needs and budget

### For Teams

- **Consistent Workflows**: Share configurations across team members
- **Security Control**: Fine-grained permissions ensure safe AI integration
- **Privacy Options**: Run Ollama locally for sensitive projects or use cloud providers for everything else

## Getting Started in 2 Minutes

```bash
# 1. Install
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nomad-prime/hoosh/releases/download/v0.3.2/hoosh-installer.sh | sh

# 2. Configure
hoosh setup

# 3. Start coding
hoosh
```

That's it!

NOTE: Hoosh is currently in beta and for production use-cases not stable. Use at your own discretion
