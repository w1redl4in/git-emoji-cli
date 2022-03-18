const commits = [
  // FEATURES
  {
    name: "feat: ✨ Introduce new features.",
    emoji: "✨",
    value: "feat: :sparkles:",
  },
  {
    name: "feat: 🎉 Begin a project.",
    emoji: "🎉",
    value: "feat: :tada:",
  },
  {
    name: "feat: 🌐 Internationalization and localization.",
    emoji: "🌐",
    value: "feat: :globe_with_meridians:",
  },
  {
    name: "feat: 📈 Add or update analytics or track code.",
    emoji: "📈",
    value: "feat: :chart_with_upwards_trend:",
  },
  {
    name: "feat: 🍻 Write code drunkenly.",
    emoji: "🍻",
    value: "feat: :beers:",
  },
  {
    name: "feat: 🔊 Add or update logs.",
    emoji: "🔊",
    value: "feat: :loud_sound:",
  },
  {
    name: "feat: 👔 Add or update business logic.",
    emoji: "👔",
    value: "feat: :necktie:",
  },

  // TESTS
  {
    name: "test: ✅ Add, update, or pass tests.",
    emoji: "✅",
    value: "test: :white_check_mark:",
  },
  {
    name: "test: 🧪 Add a failing test.",
    emoji: "🧪",
    value: "test: :test_tube:",
  },

  // FIXES
  {
    name: "fix: 🐛 Fix a simple bug.",
    emoji: "🐛",
    value: "fix: :bug:",
  },
  {
    name: "fix: 🚑️ Critical hotfix.",
    emoji: "🚑️",
    value: "fix: :ambulance:",
  },
  {
    name: "fix: 🔒️ Fix security issues..",
    emoji: "🔒️",
    value: "fix: ::lock::",
  },
  {
    name: "fix: 🚨 Fix compiler / linter warnings.",
    emoji: "🚨",
    value: "fix: :rotating_light:",
  },
  {
    name: "fix: 💚 Fix CI Build.",
    emoji: "💚",
    value: "fix: :green_heart:",
  },
  {
    name: "fix: ✏️ Fix typos.",
    emoji: "✏️",
    value: "fix: :pencil2:",
  },
  {
    name: "fix: 🩹 Simple fix for a non-critical issue.",
    emoji: "🩹",
    value: "fix: :adhesive_bandage:",
  },
  {
    name: "fix: 🔇 Remove logs.",
    emoji: "🔇",
    value: "fix: :mute:",
  },

  // REFACTOR
  {
    name: "refactor: ♻️  Refactor code.",
    emoji: "♻️",
    value: "refactor: :recycle:",
  },

  // STYLE
  {
    name: "style: 💄 Add or update the UI and style files.",
    emoji: "💄",
    value: "style: :lipstick:",
  },
  {
    name: "style: 🍱 Add or update assets.",
    emoji: "🍱",
    value: "style: :bento:",
  },
  {
    name: "style: 📱 Work on responsive design.",
    emoji: "📱",
    value: "style: :iphone:",
  },

  // PERFORMANCE
  {
    name: "perf: ⚡️ Improve performance.",
    emoji: "⚡️",
    value: "perf: :zap:",
  },

  // DOCS
  {
    name: "docs: 📝 Add or update documentation.",
    emoji: "📝",
    value: "docs: :memo:",
  },

  // CHORE
  {
    name: "chore: 🎨 Improve structure / format of the code.",
    emoji: "🎨",
    value: "style: :art:",
  },
  {
    name: "chore: 🔥 Remove code or files.",
    emoji: "🔥",
    value: "chore: :fire:",
  },

  {
    name: "chore: 🚀 Deploy stuff.",
    emoji: "🚀",
    value: "chore: :rocket:",
  },

  {
    name: "chore: 🔐 Add or update secrets.",
    emoji: "🔐",
    value: "chore: :closed_lock_with_key:",
  },
  {
    name: "chore: 🔖 Release / Version tags.",
    emoji: "🔖",
    value: "chore: :bookmark:",
  },

  {
    name: "chore: 🚧 Work in progress.",
    emoji: "🚧",
    value: "chore: :construction:",
  },
  {
    name: "chore: ⬇️  Downgrade dependencies.",
    emoji: "⬇️",
    value: "chore: :arrow_down:",
  },
  {
    name: "chore: ⬆️  Upgrade dependencies.",
    emoji: "⬆️",
    value: "chore: :arrow_up:",
  },
  {
    name: "chore: 📌 Pin dependencies to specific versions.",
    emoji: "📌",
    value: "chore: :pushpin:",
  },

  {
    name: "chore: 👷 Add or update CI build system.",
    emoji: "👷",
    value: "chore: :construction_worker:",
  },

  {
    name: "chore: ➕ Add a dependency.",
    emoji: "➕",
    value: "chore: :heavy_plus_sign:",
  },
  {
    name: "chore: ➖ Remove a dependency.",
    emoji: "➖",
    value: "chore: :heavy_minus_sign:",
  },
  {
    name: "chore: 🔧 Add or update configuration files.",
    emoji: "🔧",
    value: "chore: :wrench:",
  },
  {
    name: "chore: 🔨 Add or update development scripts.",
    emoji: "🔨",
    value: "chore: :hammer:",
  },

  {
    name: "chore: 💩 Write bad code that needs to be improved.",
    emoji: "💩",
    value: "chore: :poop:",
  },
  {
    name: "chore: ⏪️ Revert changes.",
    emoji: "⏪️",
    value: "chore: :rewind:",
  },
  {
    name: "chore: 🔀 Merge branches.",
    emoji: "🔀",
    value: "chore: :twisted_rightwards_arrows:",
  },
  {
    name: "chore: 👽️ Update code due to external API changes.",
    emoji: "👽️",
    value: "chore: :alien:",
  },
  {
    name: "chore: 🚚 Move or rename resources (e.g.: files, paths, routes).",
    emoji: "🚚",
    value: "chore: :truck:",
  },

  {
    name: "chore: ♿️ Improve accessibility.",
    emoji: "♿️",
    value: "chore: :wheelchair:",
  },
  {
    name: "chore: 💡 Add or update comments in source code.",
    emoji: "💡",
    value: "chore: :bulb:",
  },

  {
    name: "chore: 🤡 Mock things.",
    emoji: "🤡",
    value: "chore: :clown_face:",
  },
  {
    name: "chore: 🙈 Add or update a .gitignore file.",
    emoji: "🙈",
    value: "chore: :see_no_evil:",
  },
];

module.exports = { commits };
