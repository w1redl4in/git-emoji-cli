const commits = [
  // FEATURES
  {
    name: "feat: โจ Introduce new features.",
    emoji: "โจ",
    value: "feat: :sparkles:",
  },
  {
    name: "feat: ๐ Begin a project.",
    emoji: "๐",
    value: "feat: :tada:",
  },
  {
    name: "feat: ๐ Internationalization and localization.",
    emoji: "๐",
    value: "feat: :globe_with_meridians:",
  },
  {
    name: "feat: ๐ Add or update analytics or track code.",
    emoji: "๐",
    value: "feat: :chart_with_upwards_trend:",
  },
  {
    name: "feat: ๐ป Write code drunkenly.",
    emoji: "๐ป",
    value: "feat: :beers:",
  },
  {
    name: "feat: ๐ฌ Add or update text and literals..",
    emoji: "๐ป",
    value: "feat: :beers:",
  },
  {
    name: "feat: ๐ Add or update logs.",
    emoji: "๐",
    value: "feat: :loud_sound:",
  },
  {
    name: "feat: ๐ Add or update business logic.",
    emoji: "๐",
    value: "feat: :necktie:",
  },

  // TESTS
  {
    name: "test: โ Add, update, or pass tests.",
    emoji: "โ",
    value: "test: :white_check_mark:",
  },
  {
    name: "test: ๐งช Add a failing test.",
    emoji: "๐งช",
    value: "test: :test_tube:",
  },

  // FIXES
  {
    name: "fix: ๐ Fix a simple bug.",
    emoji: "๐",
    value: "fix: :bug:",
  },
  {
    name: "fix: ๐๏ธ Critical hotfix.",
    emoji: "๐๏ธ",
    value: "fix: :ambulance:",
  },
  {
    name: "fix: ๐๏ธ Fix security issues..",
    emoji: "๐๏ธ",
    value: "fix: ::lock::",
  },
  {
    name: "fix: ๐จ Fix compiler / linter warnings.",
    emoji: "๐จ",
    value: "fix: :rotating_light:",
  },
  {
    name: "fix: ๐ Fix CI Build.",
    emoji: "๐",
    value: "fix: :green_heart:",
  },
  {
    name: "fix: โ๏ธ Fix typos.",
    emoji: "โ๏ธ",
    value: "fix: :pencil2:",
  },
  {
    name: "fix: ๐ฉน Simple fix for a non-critical issue.",
    emoji: "๐ฉน",
    value: "fix: :adhesive_bandage:",
  },
  {
    name: "fix: ๐ Remove logs.",
    emoji: "๐",
    value: "fix: :mute:",
  },

  // REFACTOR
  {
    name: "refactor: โป๏ธ  Refactor code.",
    emoji: "โป๏ธ",
    value: "refactor: :recycle:",
  },

  // STYLE
  {
    name: "style: ๐ Add or update the UI and style files.",
    emoji: "๐",
    value: "style: :lipstick:",
  },
  {
    name: "style: ๐ฑ Add or update assets.",
    emoji: "๐ฑ",
    value: "style: :bento:",
  },
  {
    name: "style: ๐ฑ Work on responsive design.",
    emoji: "๐ฑ",
    value: "style: :iphone:",
  },

  // PERFORMANCE
  {
    name: "perf: โก๏ธ Improve performance.",
    emoji: "โก๏ธ",
    value: "perf: :zap:",
  },

  // DOCS
  {
    name: "docs: ๐ Add or update documentation.",
    emoji: "๐",
    value: "docs: :memo:",
  },

  // CHORE
  {
    name: "chore: ๐จ Improve structure / format of the code.",
    emoji: "๐จ",
    value: "style: :art:",
  },
  {
    name: "chore: ๐ฅ Remove code or files.",
    emoji: "๐ฅ",
    value: "chore: :fire:",
  },

  {
    name: "chore: ๐ Deploy stuff.",
    emoji: "๐",
    value: "chore: :rocket:",
  },

  {
    name: "chore: ๐ Add or update secrets.",
    emoji: "๐",
    value: "chore: :closed_lock_with_key:",
  },
  {
    name: "chore: ๐ Release / Version tags.",
    emoji: "๐",
    value: "chore: :bookmark:",
  },

  {
    name: "chore: ๐ง Work in progress.",
    emoji: "๐ง",
    value: "chore: :construction:",
  },
  {
    name: "chore: โฌ๏ธ  Downgrade dependencies.",
    emoji: "โฌ๏ธ",
    value: "chore: :arrow_down:",
  },
  {
    name: "chore: โฌ๏ธ  Upgrade dependencies.",
    emoji: "โฌ๏ธ",
    value: "chore: :arrow_up:",
  },
  {
    name: "chore: ๐ Pin dependencies to specific versions.",
    emoji: "๐",
    value: "chore: :pushpin:",
  },

  {
    name: "chore: ๐ท Add or update CI build system.",
    emoji: "๐ท",
    value: "chore: :construction_worker:",
  },

  {
    name: "chore: โ Add a dependency.",
    emoji: "โ",
    value: "chore: :heavy_plus_sign:",
  },
  {
    name: "chore: โ Remove a dependency.",
    emoji: "โ",
    value: "chore: :heavy_minus_sign:",
  },
  {
    name: "chore: ๐ง Add or update configuration files.",
    emoji: "๐ง",
    value: "chore: :wrench:",
  },
  {
    name: "chore: ๐จ Add or update development scripts.",
    emoji: "๐จ",
    value: "chore: :hammer:",
  },

  {
    name: "chore: ๐ฉ Write bad code that needs to be improved.",
    emoji: "๐ฉ",
    value: "chore: :poop:",
  },
  {
    name: "chore: โช๏ธ Revert changes.",
    emoji: "โช๏ธ",
    value: "chore: :rewind:",
  },
  {
    name: "chore: ๐ Merge branches.",
    emoji: "๐",
    value: "chore: :twisted_rightwards_arrows:",
  },
  {
    name: "chore: ๐ฝ๏ธ Update code due to external API changes.",
    emoji: "๐ฝ๏ธ",
    value: "chore: :alien:",
  },
  {
    name: "chore: ๐ Move or rename resources (e.g.: files, paths, routes).",
    emoji: "๐",
    value: "chore: :truck:",
  },

  {
    name: "chore: โฟ๏ธ Improve accessibility.",
    emoji: "โฟ๏ธ",
    value: "chore: :wheelchair:",
  },
  {
    name: "chore: ๐ก Add or update comments in source code.",
    emoji: "๐ก",
    value: "chore: :bulb:",
  },

  {
    name: "chore: ๐คก Mock things.",
    emoji: "๐คก",
    value: "chore: :clown_face:",
  },
  {
    name: "chore: ๐ Add or update a .gitignore file.",
    emoji: "๐",
    value: "chore: :see_no_evil:",
  },
];

module.exports = { commits };
