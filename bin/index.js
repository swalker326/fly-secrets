#!/usr/bin/env bun
// @bun
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};

// node_modules/kleur/index.js
var require_kleur = __commonJS((exports, module) => {
  var run = function(arr, str) {
    let i = 0, tmp, beg = "", end = "";
    for (;i < arr.length; i++) {
      tmp = arr[i];
      beg += tmp.open;
      end += tmp.close;
      if (str.includes(tmp.close)) {
        str = str.replace(tmp.rgx, tmp.close + tmp.open);
      }
    }
    return beg + str + end;
  };
  var chain = function(has, keys) {
    let ctx = { has, keys };
    ctx.reset = $.reset.bind(ctx);
    ctx.bold = $.bold.bind(ctx);
    ctx.dim = $.dim.bind(ctx);
    ctx.italic = $.italic.bind(ctx);
    ctx.underline = $.underline.bind(ctx);
    ctx.inverse = $.inverse.bind(ctx);
    ctx.hidden = $.hidden.bind(ctx);
    ctx.strikethrough = $.strikethrough.bind(ctx);
    ctx.black = $.black.bind(ctx);
    ctx.red = $.red.bind(ctx);
    ctx.green = $.green.bind(ctx);
    ctx.yellow = $.yellow.bind(ctx);
    ctx.blue = $.blue.bind(ctx);
    ctx.magenta = $.magenta.bind(ctx);
    ctx.cyan = $.cyan.bind(ctx);
    ctx.white = $.white.bind(ctx);
    ctx.gray = $.gray.bind(ctx);
    ctx.grey = $.grey.bind(ctx);
    ctx.bgBlack = $.bgBlack.bind(ctx);
    ctx.bgRed = $.bgRed.bind(ctx);
    ctx.bgGreen = $.bgGreen.bind(ctx);
    ctx.bgYellow = $.bgYellow.bind(ctx);
    ctx.bgBlue = $.bgBlue.bind(ctx);
    ctx.bgMagenta = $.bgMagenta.bind(ctx);
    ctx.bgCyan = $.bgCyan.bind(ctx);
    ctx.bgWhite = $.bgWhite.bind(ctx);
    return ctx;
  };
  var init = function(open, close) {
    let blk = {
      open: `\x1B[${open}m`,
      close: `\x1B[${close}m`,
      rgx: new RegExp(`\\x1b\\[${close}m`, "g")
    };
    return function(txt) {
      if (this !== undefined && this.has !== undefined) {
        this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
        return txt === undefined ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
      }
      return txt === undefined ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
    };
  };
  var { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
  var $ = {
    enabled: !NODE_DISABLE_COLORS && TERM !== "dumb" && FORCE_COLOR !== "0",
    reset: init(0, 0),
    bold: init(1, 22),
    dim: init(2, 22),
    italic: init(3, 23),
    underline: init(4, 24),
    inverse: init(7, 27),
    hidden: init(8, 28),
    strikethrough: init(9, 29),
    black: init(30, 39),
    red: init(31, 39),
    green: init(32, 39),
    yellow: init(33, 39),
    blue: init(34, 39),
    magenta: init(35, 39),
    cyan: init(36, 39),
    white: init(37, 39),
    gray: init(90, 39),
    grey: init(90, 39),
    bgBlack: init(40, 49),
    bgRed: init(41, 49),
    bgGreen: init(42, 49),
    bgYellow: init(43, 49),
    bgBlue: init(44, 49),
    bgMagenta: init(45, 49),
    bgCyan: init(46, 49),
    bgWhite: init(47, 49)
  };
  module.exports = $;
});

// node_modules/prompts/dist/util/action.js
var require_action = __commonJS((exports, module) => {
  module.exports = (key, isSelect) => {
    if (key.meta && key.name !== "escape")
      return;
    if (key.ctrl) {
      if (key.name === "a")
        return "first";
      if (key.name === "c")
        return "abort";
      if (key.name === "d")
        return "abort";
      if (key.name === "e")
        return "last";
      if (key.name === "g")
        return "reset";
    }
    if (isSelect) {
      if (key.name === "j")
        return "down";
      if (key.name === "k")
        return "up";
    }
    if (key.name === "return")
      return "submit";
    if (key.name === "enter")
      return "submit";
    if (key.name === "backspace")
      return "delete";
    if (key.name === "delete")
      return "deleteForward";
    if (key.name === "abort")
      return "abort";
    if (key.name === "escape")
      return "exit";
    if (key.name === "tab")
      return "next";
    if (key.name === "pagedown")
      return "nextPage";
    if (key.name === "pageup")
      return "prevPage";
    if (key.name === "home")
      return "home";
    if (key.name === "end")
      return "end";
    if (key.name === "up")
      return "up";
    if (key.name === "down")
      return "down";
    if (key.name === "right")
      return "right";
    if (key.name === "left")
      return "left";
    return false;
  };
});

// node_modules/prompts/dist/util/strip.js
var require_strip = __commonJS((exports, module) => {
  module.exports = (str) => {
    const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
    const RGX = new RegExp(pattern, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
});

// node_modules/sisteransi/src/index.js
var require_src = __commonJS((exports, module) => {
  var ESC = "\x1B";
  var CSI = `${ESC}[`;
  var beep = "\x07";
  var cursor = {
    to(x, y) {
      if (!y)
        return `${CSI}${x + 1}G`;
      return `${CSI}${y + 1};${x + 1}H`;
    },
    move(x, y) {
      let ret = "";
      if (x < 0)
        ret += `${CSI}${-x}D`;
      else if (x > 0)
        ret += `${CSI}${x}C`;
      if (y < 0)
        ret += `${CSI}${-y}A`;
      else if (y > 0)
        ret += `${CSI}${y}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  var scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  var erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i = 0;i < count; i++)
        clear += this.line + (i < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  module.exports = { cursor, scroll, erase, beep };
});

// node_modules/prompts/dist/util/clear.js
var require_clear = __commonJS((exports, module) => {
  var _createForOfIteratorHelper = function(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  };
  var _unsupportedIterableToArray = function(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  };
  var _arrayLikeToArray = function(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len);i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  };
  var strip = require_strip();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var width = (str) => [...strip(str)].length;
  module.exports = function(prompt, perLine) {
    if (!perLine)
      return erase.line + cursor.to(0);
    let rows = 0;
    const lines = prompt.split(/\r?\n/);
    var _iterator = _createForOfIteratorHelper(lines), _step;
    try {
      for (_iterator.s();!(_step = _iterator.n()).done; ) {
        let line = _step.value;
        rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return erase.lines(rows);
  };
});

// node_modules/prompts/dist/util/figures.js
var require_figures = __commonJS((exports, module) => {
  var main = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  };
  var win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  };
  var figures = process.platform === "win32" ? win : main;
  module.exports = figures;
});

// node_modules/prompts/dist/util/style.js
var require_style = __commonJS((exports, module) => {
  var c = require_kleur();
  var figures = require_figures();
  var styles = Object.freeze({
    password: {
      scale: 1,
      render: (input) => "*".repeat(input.length)
    },
    emoji: {
      scale: 2,
      render: (input) => "\uD83D\uDE03".repeat(input.length)
    },
    invisible: {
      scale: 0,
      render: (input) => ""
    },
    default: {
      scale: 1,
      render: (input) => `${input}`
    }
  });
  var render = (type) => styles[type] || styles.default;
  var symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  module.exports = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
});

// node_modules/prompts/dist/util/lines.js
var require_lines = __commonJS((exports, module) => {
  var strip = require_strip();
  module.exports = function(msg, perLine) {
    let lines = String(strip(msg) || "").split(/\r?\n/);
    if (!perLine)
      return lines.length;
    return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
  };
});

// node_modules/prompts/dist/util/wrap.js
var require_wrap = __commonJS((exports, module) => {
  module.exports = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
        arr[arr.length - 1] += ` ${w}`;
      else
        arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
});

// node_modules/prompts/dist/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS((exports, module) => {
  module.exports = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0)
      startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return {
      startIndex,
      endIndex
    };
  };
});

// node_modules/prompts/dist/util/index.js
var require_util = __commonJS((exports, module) => {
  module.exports = {
    action: require_action(),
    clear: require_clear(),
    style: require_style(),
    strip: require_strip(),
    figures: require_figures(),
    lines: require_lines(),
    wrap: require_wrap(),
    entriesToDisplay: require_entriesToDisplay()
  };
});

// node_modules/prompts/dist/elements/prompt.js
var require_prompt = __commonJS((exports, module) => {
  var readline = import.meta.require("readline");
  var _require = require_util();
  var action = _require.action;
  var EventEmitter = import.meta.require("events");
  var _require2 = require_src();
  var beep = _require2.beep;
  var cursor = _require2.cursor;
  var color = require_kleur();

  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => {
        return;
      })).bind(this);
      const rl = readline.createInterface({
        input: this.in,
        escapeCodeTimeout: 50
      });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY)
        this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a = action(key, isSelect);
        if (a === false) {
          this._ && this._(str, key);
        } else if (typeof this[a] === "function") {
          this[a](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY)
          this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender)
        this.firstRender = false;
    }
  }
  module.exports = Prompt;
});

// node_modules/prompts/dist/elements/text.js
var require_text = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var _require2 = require_util();
  var style = _require2.style;
  var clear = _require2.clear;
  var lines = _require2.lines;
  var figures = _require2.figures;

  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        _this2.value = _this2.value || _this2.initial;
        _this2.cursorOffset = 0;
        _this2.cursor = _this2.rendered.length;
        yield _this2.validate();
        if (_this2.error) {
          _this2.red = true;
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    next() {
      if (!this.placeholder)
        return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n) {
      if (this.placeholder)
        return;
      this.cursor = this.cursor + n;
      this.cursorOffset += n;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart())
        return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder)
        return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  module.exports = TextPrompt;
});

// node_modules/prompts/dist/elements/select.js
var require_select = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var figures = _require.figures;
  var wrap = _require.wrap;
  var entriesToDisplay = _require.entriesToDisplay;
  var _require2 = require_src();
  var cursor = _require2.cursor;

  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = {
            title: ch,
            value: idx
          };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === undefined ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear("", this.out.columns);
      this.render();
    }
    moveCursor(n) {
      this.cursor = n;
      this.value = this.choices[n].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else
        this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ")
        return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i = startIndex;i < endIndex; i++) {
          let title, prefix, desc = "", v = this.choices[i];
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, {
                  margin: 3,
                  width: this.out.columns
                });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}\n`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  module.exports = SelectPrompt;
});

// node_modules/prompts/dist/elements/toggle.js
var require_toggle = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var _require2 = require_src();
  var cursor = _require2.cursor;
  var erase = _require2.erase;

  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false)
        return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true)
        return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else
        return this.bell();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.value ? this.inactive : color.cyan().underline(this.inactive), color.gray("/"), this.value ? color.cyan().underline(this.active) : this.active].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = TogglePrompt;
});

// node_modules/prompts/dist/dateparts/datepart.js
var require_datepart = __commonJS((exports, module) => {
  class DatePart {
    constructor({
      token,
      date,
      parts,
      locales
    }) {
      this.token = token;
      this.date = date || new Date;
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  module.exports = DatePart;
});

// node_modules/prompts/dist/dateparts/meridiem.js
var require_meridiem = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
    }
  }
  module.exports = Meridiem;
});

// node_modules/prompts/dist/dateparts/day.js
var require_day = __commonJS((exports, module) => {
  var DatePart = require_datepart();
  var pos = (n) => {
    n = n % 10;
    return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  };

  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date = this.date.getDate();
      let day = this.date.getDay();
      return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
    }
  }
  module.exports = Day;
});

// node_modules/prompts/dist/dateparts/hours.js
var require_hours = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours = this.date.getHours();
      if (/h/.test(this.token))
        hours = hours % 12 || 12;
      return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
    }
  }
  module.exports = Hours;
});

// node_modules/prompts/dist/dateparts/milliseconds.js
var require_milliseconds = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  module.exports = Milliseconds;
});

// node_modules/prompts/dist/dateparts/minutes.js
var require_minutes = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  module.exports = Minutes;
});

// node_modules/prompts/dist/dateparts/month.js
var require_month = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
    }
  }
  module.exports = Month;
});

// node_modules/prompts/dist/dateparts/seconds.js
var require_seconds = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s = this.date.getSeconds();
      return this.token.length > 1 ? String(s).padStart(2, "0") : s;
    }
  }
  module.exports = Seconds;
});

// node_modules/prompts/dist/dateparts/year.js
var require_year = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year.substr(-2) : year;
    }
  }
  module.exports = Year;
});

// node_modules/prompts/dist/dateparts/index.js
var require_dateparts = __commonJS((exports, module) => {
  module.exports = {
    DatePart: require_datepart(),
    Meridiem: require_meridiem(),
    Day: require_day(),
    Hours: require_hours(),
    Milliseconds: require_milliseconds(),
    Minutes: require_minutes(),
    Month: require_month(),
    Seconds: require_seconds(),
    Year: require_year()
  };
});

// node_modules/prompts/dist/elements/date.js
var require_date = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var figures = _require.figures;
  var _require2 = require_src();
  var erase = _require2.erase;
  var cursor = _require2.cursor;
  var _require3 = require_dateparts();
  var DatePart = _require3.DatePart;
  var Meridiem = _require3.Meridiem;
  var Day = _require3.Day;
  var Hours = _require3.Hours;
  var Milliseconds = _require3.Milliseconds;
  var Minutes = _require3.Minutes;
  var Month = _require3.Month;
  var Seconds = _require3.Seconds;
  var Year = _require3.Year;
  var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  var regexGroups = {
    1: ({
      token
    }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    3: (opts) => new Month(opts),
    4: (opts) => new Year(opts),
    5: (opts) => new Meridiem(opts),
    6: (opts) => new Hours(opts),
    7: (opts) => new Minutes(opts),
    8: (opts) => new Seconds(opts),
    9: (opts) => new Milliseconds(opts)
  };
  var dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };

  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || new Date;
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date) {
      if (date)
        this._date.setTime(date.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({
          token: result[idx] || match,
          date: this.date,
          parts: this.parts,
          locales: this.locales
        }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i) => {
        if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
          arr[arr.length - 1] += i;
        else
          arr.push(i);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n) {
      this.typed = "";
      this.cursor = n;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === "string") {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = "red";
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce((a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = DatePrompt;
});

// node_modules/prompts/dist/elements/number.js
var require_number = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var cursor = _require.cursor;
  var erase = _require.erase;
  var _require2 = require_util();
  var style = _require2.style;
  var figures = _require2.figures;
  var clear = _require2.clear;
  var lines = _require2.lines;
  var isNumber = /[0-9]/;
  var isDef = (any) => any !== undefined;
  var round = (number, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : (-Infinity);
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = `red`;
          _this2.fire();
          _this2.render();
          return;
        }
        let x = _this2.value;
        _this2.value = x !== `` ? x : _this2.initial;
        _this2.done = true;
        _this2.aborted = false;
        _this2.error = false;
        _this2.fire();
        _this2.render();
        _this2.out.write(`\n`);
        _this2.close();
      })();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max)
        return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min)
        return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0)
        return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c))
        return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1000)
        this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`)
        return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max)
        this.value = this.max;
      if (this.value < this.min)
        this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  module.exports = NumberPrompt;
});

// node_modules/prompts/dist/elements/multiselect.js
var require_multiselect = __commonJS((exports, module) => {
  var color = require_kleur();
  var _require = require_src();
  var cursor = _require.cursor;
  var Prompt = require_prompt();
  var _require2 = require_util();
  var clear = _require2.clear;
  var figures = _require2.figures;
  var style = _require2.style;
  var wrap = _require2.wrap;
  var entriesToDisplay = _require2.entriesToDisplay;

  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = {
            title: ch,
            value: idx
          };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === undefined ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== undefined || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return "\nInstructions:\n" + `    ${figures.arrowUp}/${figures.arrowDown}: Highlight option\n` + `    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection\n` + (this.maxChoices === undefined ? `    a: Toggle all\n` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, {
              margin: prefix.length,
              width: this.out.columns
            });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let _entriesToDisplay = entriesToDisplay(this.cursor, options.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      let prefix, styledOptions = [];
      for (let i = startIndex;i < endIndex; i++) {
        if (i === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.value);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = MultiselectPrompt;
});

// node_modules/prompts/dist/elements/autocomplete.js
var require_autocomplete = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var _require2 = require_util();
  var style = _require2.style;
  var clear = _require2.clear;
  var figures = _require2.figures;
  var wrap = _require2.wrap;
  var entriesToDisplay = _require2.entriesToDisplay;
  var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
  var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
  var getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : undefined;
  };

  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = {
        noMatches: opts.noMatches || "no matches found"
      };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number")
        choice = this.choices[this._fb];
      else if (typeof this._fb === "string")
        choice = {
          title: this._fb
        };
      return choice || this._fb || {
        title: this.i18n.noMatches
      };
    }
    moveSelect(i) {
      this.select = i;
      if (this.suggestions.length > 0)
        this.value = getVal(this.suggestions, i);
      else
        this.value = this.fallback.value;
      this.fire();
    }
    complete(cb) {
      var _this = this;
      return _asyncToGenerator(function* () {
        const p = _this.completing = _this.suggest(_this.input, _this.choices);
        const suggestions = yield p;
        if (_this.completing !== p)
          return;
        _this.suggestions = suggestions.map((s, i, arr) => ({
          title: getTitle(arr, i),
          value: getVal(arr, i),
          description: s.description
        }));
        _this.completing = false;
        const l = Math.max(suggestions.length - 1, 0);
        _this.moveSelect(Math.min(l, _this.select));
        cb && cb();
      })();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== undefined ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else
        this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0)
        return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap(v.description, {
            margin: 3,
            width: this.out.columns
          });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay(this.select, this.choices.length, this.limit), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style.symbol(this.done, this.aborted, this.exited), color.bold(this.msg), style.delimiter(this.completing), this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(item, this.select === i + startIndex, i === 0 && startIndex > 0, i + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
        this.outputText += `\n` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = AutocompletePrompt;
});

// node_modules/prompts/dist/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS((exports, module) => {
  var color = require_kleur();
  var _require = require_src();
  var cursor = _require.cursor;
  var MultiselectPrompt = require_multiselect();
  var _require2 = require_util();
  var clear = _require2.clear;
  var style = _require2.style;
  var figures = _require2.figures;

  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}\n`;
    }
    renderOption(cursor2, v, i) {
      let title;
      if (v.disabled)
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = AutocompleteMultiselectPrompt;
});

// node_modules/prompts/dist/elements/confirm.js
var require_confirm = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var _require2 = require_src();
  var erase = _require2.erase;
  var cursor = _require2.cursor;

  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = ConfirmPrompt;
});

// node_modules/prompts/dist/elements/index.js
var require_elements = __commonJS((exports, module) => {
  module.exports = {
    TextPrompt: require_text(),
    SelectPrompt: require_select(),
    TogglePrompt: require_toggle(),
    DatePrompt: require_date(),
    NumberPrompt: require_number(),
    MultiselectPrompt: require_multiselect(),
    AutocompletePrompt: require_autocomplete(),
    AutocompleteMultiselectPrompt: require_autocompleteMultiselect(),
    ConfirmPrompt: require_confirm()
  };
});

// node_modules/prompts/dist/prompts.js
var require_prompts = __commonJS((exports) => {
  var toPrompt = function(type, args, opts = {}) {
    return new Promise((res, rej) => {
      const p = new el[type](args);
      const onAbort = opts.onAbort || noop;
      const onSubmit = opts.onSubmit || noop;
      const onExit = opts.onExit || noop;
      p.on("state", args.onState || noop);
      p.on("submit", (x) => res(onSubmit(x)));
      p.on("exit", (x) => res(onExit(x)));
      p.on("abort", (x) => rej(onAbort(x)));
    });
  };
  var $ = exports;
  var el = require_elements();
  var noop = (v) => v;
  $.text = (args) => toPrompt("TextPrompt", args);
  $.password = (args) => {
    args.style = "password";
    return $.text(args);
  };
  $.invisible = (args) => {
    args.style = "invisible";
    return $.text(args);
  };
  $.number = (args) => toPrompt("NumberPrompt", args);
  $.date = (args) => toPrompt("DatePrompt", args);
  $.confirm = (args) => toPrompt("ConfirmPrompt", args);
  $.list = (args) => {
    const sep = args.separator || ",";
    return toPrompt("TextPrompt", args, {
      onSubmit: (str) => str.split(sep).map((s) => s.trim())
    });
  };
  $.toggle = (args) => toPrompt("TogglePrompt", args);
  $.select = (args) => toPrompt("SelectPrompt", args);
  $.multiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("MultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  $.autocompleteMultiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("AutocompleteMultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
  $.autocomplete = (args) => {
    args.suggest = args.suggest || byTitle;
    args.choices = [].concat(args.choices || []);
    return toPrompt("AutocompletePrompt", args);
  };
});

// node_modules/prompts/dist/index.js
var require_dist = __commonJS((exports, module) => {
  var ownKeys = function(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  };
  var _objectSpread = function(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  };
  var _defineProperty = function(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _createForOfIteratorHelper = function(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  };
  var _unsupportedIterableToArray = function(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  };
  var _arrayLikeToArray = function(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len);i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var prompt = function() {
    return _prompt.apply(this, arguments);
  };
  var _prompt = function() {
    _prompt = _asyncToGenerator(function* (questions = [], {
      onSubmit = noop,
      onCancel = noop
    } = {}) {
      const answers = {};
      const override2 = prompt._override || {};
      questions = [].concat(questions);
      let answer, question, quit, name, type, lastPrompt;
      const getFormattedAnswer = function() {
        var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
          if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
            return;
          }
          return question2.format ? yield question2.format(answer2, answers) : answer2;
        });
        return function getFormattedAnswer(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      var _iterator = _createForOfIteratorHelper(questions), _step;
      try {
        for (_iterator.s();!(_step = _iterator.n()).done; ) {
          question = _step.value;
          var _question = question;
          name = _question.name;
          type = _question.type;
          if (typeof type === "function") {
            type = yield type(answer, _objectSpread({}, answers), question);
            question["type"] = type;
          }
          if (!type)
            continue;
          for (let key in question) {
            if (passOn.includes(key))
              continue;
            let value = question[key];
            question[key] = typeof value === "function" ? yield value(answer, _objectSpread({}, answers), lastPrompt) : value;
          }
          lastPrompt = question;
          if (typeof question.message !== "string") {
            throw new Error("prompt message is required");
          }
          var _question2 = question;
          name = _question2.name;
          type = _question2.type;
          if (prompts[type] === undefined) {
            throw new Error(`prompt type (${type}) is not defined`);
          }
          if (override2[question.name] !== undefined) {
            answer = yield getFormattedAnswer(question, override2[question.name]);
            if (answer !== undefined) {
              answers[name] = answer;
              continue;
            }
          }
          try {
            answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : yield prompts[type](question);
            answers[name] = answer = yield getFormattedAnswer(question, answer, true);
            quit = yield onSubmit(question, answer, answers);
          } catch (err) {
            quit = !(yield onCancel(question, answers));
          }
          if (quit)
            return answers;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return answers;
    });
    return _prompt.apply(this, arguments);
  };
  var getInjectedAnswer = function(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === undefined ? deafultValue : answer;
  };
  var inject = function(answers) {
    prompt._injected = (prompt._injected || []).concat(answers);
  };
  var override = function(answers) {
    prompt._override = Object.assign({}, answers);
  };
  var prompts = require_prompts();
  var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  var noop = () => {
  };
  module.exports = Object.assign(prompt, {
    prompt,
    prompts,
    inject,
    override
  });
});

// node_modules/prompts/lib/util/action.js
var require_action2 = __commonJS((exports, module) => {
  module.exports = (key, isSelect) => {
    if (key.meta && key.name !== "escape")
      return;
    if (key.ctrl) {
      if (key.name === "a")
        return "first";
      if (key.name === "c")
        return "abort";
      if (key.name === "d")
        return "abort";
      if (key.name === "e")
        return "last";
      if (key.name === "g")
        return "reset";
    }
    if (isSelect) {
      if (key.name === "j")
        return "down";
      if (key.name === "k")
        return "up";
    }
    if (key.name === "return")
      return "submit";
    if (key.name === "enter")
      return "submit";
    if (key.name === "backspace")
      return "delete";
    if (key.name === "delete")
      return "deleteForward";
    if (key.name === "abort")
      return "abort";
    if (key.name === "escape")
      return "exit";
    if (key.name === "tab")
      return "next";
    if (key.name === "pagedown")
      return "nextPage";
    if (key.name === "pageup")
      return "prevPage";
    if (key.name === "home")
      return "home";
    if (key.name === "end")
      return "end";
    if (key.name === "up")
      return "up";
    if (key.name === "down")
      return "down";
    if (key.name === "right")
      return "right";
    if (key.name === "left")
      return "left";
    return false;
  };
});

// node_modules/prompts/lib/util/strip.js
var require_strip2 = __commonJS((exports, module) => {
  module.exports = (str) => {
    const pattern = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
    ].join("|");
    const RGX = new RegExp(pattern, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
});

// node_modules/prompts/lib/util/clear.js
var require_clear2 = __commonJS((exports, module) => {
  var strip = require_strip2();
  var { erase, cursor } = require_src();
  var width = (str) => [...strip(str)].length;
  module.exports = function(prompt, perLine) {
    if (!perLine)
      return erase.line + cursor.to(0);
    let rows = 0;
    const lines = prompt.split(/\r?\n/);
    for (let line of lines) {
      rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
    }
    return erase.lines(rows);
  };
});

// node_modules/prompts/lib/util/figures.js
var require_figures2 = __commonJS((exports, module) => {
  var main = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  };
  var win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  };
  var figures = process.platform === "win32" ? win : main;
  module.exports = figures;
});

// node_modules/prompts/lib/util/style.js
var require_style2 = __commonJS((exports, module) => {
  var c = require_kleur();
  var figures = require_figures2();
  var styles = Object.freeze({
    password: { scale: 1, render: (input) => "*".repeat(input.length) },
    emoji: { scale: 2, render: (input) => "\uD83D\uDE03".repeat(input.length) },
    invisible: { scale: 0, render: (input) => "" },
    default: { scale: 1, render: (input) => `${input}` }
  });
  var render = (type) => styles[type] || styles.default;
  var symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  module.exports = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
});

// node_modules/prompts/lib/util/lines.js
var require_lines2 = __commonJS((exports, module) => {
  var strip = require_strip2();
  module.exports = function(msg, perLine) {
    let lines = String(strip(msg) || "").split(/\r?\n/);
    if (!perLine)
      return lines.length;
    return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
  };
});

// node_modules/prompts/lib/util/wrap.js
var require_wrap2 = __commonJS((exports, module) => {
  module.exports = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
        arr[arr.length - 1] += ` ${w}`;
      else
        arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
});

// node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay2 = __commonJS((exports, module) => {
  module.exports = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0)
      startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return { startIndex, endIndex };
  };
});

// node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS((exports, module) => {
  module.exports = {
    action: require_action2(),
    clear: require_clear2(),
    style: require_style2(),
    strip: require_strip2(),
    figures: require_figures2(),
    lines: require_lines2(),
    wrap: require_wrap2(),
    entriesToDisplay: require_entriesToDisplay2()
  };
});

// node_modules/prompts/lib/elements/prompt.js
var require_prompt2 = __commonJS((exports, module) => {
  var readline = import.meta.require("readline");
  var { action } = require_util2();
  var EventEmitter = import.meta.require("events");
  var { beep, cursor } = require_src();
  var color = require_kleur();

  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => {
        return;
      })).bind(this);
      const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY)
        this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a = action(key, isSelect);
        if (a === false) {
          this._ && this._(str, key);
        } else if (typeof this[a] === "function") {
          this[a](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY)
          this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender)
        this.firstRender = false;
    }
  }
  module.exports = Prompt;
});

// node_modules/prompts/lib/elements/text.js
var require_text2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { erase, cursor } = require_src();
  var { style, clear, lines, figures } = require_util2();

  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      this.value = this.value || this.initial;
      this.cursorOffset = 0;
      this.cursor = this.rendered.length;
      await this.validate();
      if (this.error) {
        this.red = true;
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    next() {
      if (!this.placeholder)
        return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n) {
      if (this.placeholder)
        return;
      this.cursor = this.cursor + n;
      this.cursorOffset += n;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart())
        return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder)
        return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.red ? color.red(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  module.exports = TextPrompt;
});

// node_modules/prompts/lib/elements/select.js
var require_select2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
  var { cursor } = require_src();

  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === undefined ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear("", this.out.columns);
      this.render();
    }
    moveCursor(n) {
      this.cursor = n;
      this.value = this.choices[n].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else
        this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ")
        return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage);
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
      ].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i = startIndex;i < endIndex; i++) {
          let title, prefix, desc = "", v = this.choices[i];
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}\n`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  module.exports = SelectPrompt;
});

// node_modules/prompts/lib/elements/toggle.js
var require_toggle2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear } = require_util2();
  var { cursor, erase } = require_src();

  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false)
        return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true)
        return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else
        return this.bell();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.value ? this.inactive : color.cyan().underline(this.inactive),
        color.gray("/"),
        this.value ? color.cyan().underline(this.active) : this.active
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = TogglePrompt;
});

// node_modules/prompts/lib/dateparts/datepart.js
var require_datepart2 = __commonJS((exports, module) => {
  class DatePart {
    constructor({ token, date, parts, locales }) {
      this.token = token;
      this.date = date || new Date;
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  module.exports = DatePart;
});

// node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
    }
  }
  module.exports = Meridiem;
});

// node_modules/prompts/lib/dateparts/day.js
var require_day2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();
  var pos = (n) => {
    n = n % 10;
    return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  };

  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date = this.date.getDate();
      let day = this.date.getDay();
      return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
    }
  }
  module.exports = Day;
});

// node_modules/prompts/lib/dateparts/hours.js
var require_hours2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours = this.date.getHours();
      if (/h/.test(this.token))
        hours = hours % 12 || 12;
      return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
    }
  }
  module.exports = Hours;
});

// node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  module.exports = Milliseconds;
});

// node_modules/prompts/lib/dateparts/minutes.js
var require_minutes2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  module.exports = Minutes;
});

// node_modules/prompts/lib/dateparts/month.js
var require_month2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
    }
  }
  module.exports = Month;
});

// node_modules/prompts/lib/dateparts/seconds.js
var require_seconds2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s = this.date.getSeconds();
      return this.token.length > 1 ? String(s).padStart(2, "0") : s;
    }
  }
  module.exports = Seconds;
});

// node_modules/prompts/lib/dateparts/year.js
var require_year2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year.substr(-2) : year;
    }
  }
  module.exports = Year;
});

// node_modules/prompts/lib/dateparts/index.js
var require_dateparts2 = __commonJS((exports, module) => {
  module.exports = {
    DatePart: require_datepart2(),
    Meridiem: require_meridiem2(),
    Day: require_day2(),
    Hours: require_hours2(),
    Milliseconds: require_milliseconds2(),
    Minutes: require_minutes2(),
    Month: require_month2(),
    Seconds: require_seconds2(),
    Year: require_year2()
  };
});

// node_modules/prompts/lib/elements/date.js
var require_date2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear, figures } = require_util2();
  var { erase, cursor } = require_src();
  var { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require_dateparts2();
  var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  var regexGroups = {
    1: ({ token }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    3: (opts) => new Month(opts),
    4: (opts) => new Year(opts),
    5: (opts) => new Meridiem(opts),
    6: (opts) => new Hours(opts),
    7: (opts) => new Minutes(opts),
    8: (opts) => new Seconds(opts),
    9: (opts) => new Milliseconds(opts)
  };
  var dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };

  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || new Date;
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date) {
      if (date)
        this._date.setTime(date.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i) => {
        if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
          arr[arr.length - 1] += i;
        else
          arr.push(i);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n) {
      this.typed = "";
      this.cursor = n;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === "string") {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = "red";
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
      ].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce((a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = DatePrompt;
});

// node_modules/prompts/lib/elements/number.js
var require_number2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { cursor, erase } = require_src();
  var { style, figures, clear, lines } = require_util2();
  var isNumber = /[0-9]/;
  var isDef = (any) => any !== undefined;
  var round = (number, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : (-Infinity);
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = `red`;
        this.fire();
        this.render();
        return;
      }
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = true;
      this.aborted = false;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max)
        return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min)
        return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0)
        return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c))
        return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1000)
        this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`)
        return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max)
        this.value = this.max;
      if (this.value < this.min)
        this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a, l, i) => a + `\n${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  module.exports = NumberPrompt;
});

// node_modules/prompts/lib/elements/multiselect.js
var require_multiselect2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var { cursor } = require_src();
  var Prompt = require_prompt2();
  var { clear, figures, style, wrap, entriesToDisplay } = require_util2();

  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === undefined ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== undefined || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return "\nInstructions:\n" + `    ${figures.arrowUp}/${figures.arrowDown}: Highlight option\n` + `    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection\n` + (this.maxChoices === undefined ? `    a: Toggle all\n` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, { margin: prefix.length, width: this.out.columns });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let { startIndex, endIndex } = entriesToDisplay(this.cursor, options.length, this.optionsPerPage);
      let prefix, styledOptions = [];
      for (let i = startIndex;i < endIndex; i++) {
        if (i === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.value);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = MultiselectPrompt;
});

// node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { erase, cursor } = require_src();
  var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
  var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
  var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
  var getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : undefined;
  };

  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = { noMatches: opts.noMatches || "no matches found" };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number")
        choice = this.choices[this._fb];
      else if (typeof this._fb === "string")
        choice = { title: this._fb };
      return choice || this._fb || { title: this.i18n.noMatches };
    }
    moveSelect(i) {
      this.select = i;
      if (this.suggestions.length > 0)
        this.value = getVal(this.suggestions, i);
      else
        this.value = this.fallback.value;
      this.fire();
    }
    async complete(cb) {
      const p = this.completing = this.suggest(this.input, this.choices);
      const suggestions = await p;
      if (this.completing !== p)
        return;
      this.suggestions = suggestions.map((s, i, arr) => ({ title: getTitle(arr, i), value: getVal(arr, i), description: s.description }));
      this.completing = false;
      const l = Math.max(suggestions.length - 1, 0);
      this.moveSelect(Math.min(l, this.select));
      cb && cb();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== undefined ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else
        this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0)
        return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay(this.select, this.choices.length, this.limit);
      this.outputText = [
        style.symbol(this.done, this.aborted, this.exited),
        color.bold(this.msg),
        style.delimiter(this.completing),
        this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
      ].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(item, this.select === i + startIndex, i === 0 && startIndex > 0, i + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
        this.outputText += `\n` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = AutocompletePrompt;
});

// node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var { cursor } = require_src();
  var MultiselectPrompt = require_multiselect2();
  var { clear, style, figures } = require_util2();

  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}\n`;
    }
    renderOption(cursor2, v, i) {
      let title;
      if (v.disabled)
        title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else
        title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = AutocompleteMultiselectPrompt;
});

// node_modules/prompts/lib/elements/confirm.js
var require_confirm2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear } = require_util2();
  var { erase, cursor } = require_src();

  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = ConfirmPrompt;
});

// node_modules/prompts/lib/elements/index.js
var require_elements2 = __commonJS((exports, module) => {
  module.exports = {
    TextPrompt: require_text2(),
    SelectPrompt: require_select2(),
    TogglePrompt: require_toggle2(),
    DatePrompt: require_date2(),
    NumberPrompt: require_number2(),
    MultiselectPrompt: require_multiselect2(),
    AutocompletePrompt: require_autocomplete2(),
    AutocompleteMultiselectPrompt: require_autocompleteMultiselect2(),
    ConfirmPrompt: require_confirm2()
  };
});

// node_modules/prompts/lib/prompts.js
var require_prompts2 = __commonJS((exports) => {
  var toPrompt = function(type, args, opts = {}) {
    return new Promise((res, rej) => {
      const p = new el[type](args);
      const onAbort = opts.onAbort || noop;
      const onSubmit = opts.onSubmit || noop;
      const onExit = opts.onExit || noop;
      p.on("state", args.onState || noop);
      p.on("submit", (x) => res(onSubmit(x)));
      p.on("exit", (x) => res(onExit(x)));
      p.on("abort", (x) => rej(onAbort(x)));
    });
  };
  var $ = exports;
  var el = require_elements2();
  var noop = (v) => v;
  $.text = (args) => toPrompt("TextPrompt", args);
  $.password = (args) => {
    args.style = "password";
    return $.text(args);
  };
  $.invisible = (args) => {
    args.style = "invisible";
    return $.text(args);
  };
  $.number = (args) => toPrompt("NumberPrompt", args);
  $.date = (args) => toPrompt("DatePrompt", args);
  $.confirm = (args) => toPrompt("ConfirmPrompt", args);
  $.list = (args) => {
    const sep = args.separator || ",";
    return toPrompt("TextPrompt", args, {
      onSubmit: (str) => str.split(sep).map((s) => s.trim())
    });
  };
  $.toggle = (args) => toPrompt("TogglePrompt", args);
  $.select = (args) => toPrompt("SelectPrompt", args);
  $.multiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("MultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  $.autocompleteMultiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("AutocompleteMultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
  $.autocomplete = (args) => {
    args.suggest = args.suggest || byTitle;
    args.choices = [].concat(args.choices || []);
    return toPrompt("AutocompletePrompt", args);
  };
});

// node_modules/prompts/lib/index.js
var require_lib = __commonJS((exports, module) => {
  async function prompt(questions = [], { onSubmit = noop, onCancel = noop } = {}) {
    const answers = {};
    const override2 = prompt._override || {};
    questions = [].concat(questions);
    let answer, question, quit, name, type, lastPrompt;
    const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
      if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
        return;
      }
      return question2.format ? await question2.format(answer2, answers) : answer2;
    };
    for (question of questions) {
      ({ name, type } = question);
      if (typeof type === "function") {
        type = await type(answer, { ...answers }, question);
        question["type"] = type;
      }
      if (!type)
        continue;
      for (let key in question) {
        if (passOn.includes(key))
          continue;
        let value = question[key];
        question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
      }
      lastPrompt = question;
      if (typeof question.message !== "string") {
        throw new Error("prompt message is required");
      }
      ({ name, type } = question);
      if (prompts[type] === undefined) {
        throw new Error(`prompt type (${type}) is not defined`);
      }
      if (override2[question.name] !== undefined) {
        answer = await getFormattedAnswer(question, override2[question.name]);
        if (answer !== undefined) {
          answers[name] = answer;
          continue;
        }
      }
      try {
        answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : await prompts[type](question);
        answers[name] = answer = await getFormattedAnswer(question, answer, true);
        quit = await onSubmit(question, answer, answers);
      } catch (err) {
        quit = !await onCancel(question, answers);
      }
      if (quit)
        return answers;
    }
    return answers;
  }
  var getInjectedAnswer = function(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === undefined ? deafultValue : answer;
  };
  var inject = function(answers) {
    prompt._injected = (prompt._injected || []).concat(answers);
  };
  var override = function(answers) {
    prompt._override = Object.assign({}, answers);
  };
  var prompts = require_prompts2();
  var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  var noop = () => {
  };
  module.exports = Object.assign(prompt, { prompt, prompts, inject, override });
});

// node_modules/prompts/index.js
var require_prompts3 = __commonJS((exports, module) => {
  var isNodeLT = function(tar) {
    tar = (Array.isArray(tar) ? tar : tar.split(".")).map(Number);
    let i = 0, src = process.versions.node.split(".").map(Number);
    for (;i < tar.length; i++) {
      if (src[i] > tar[i])
        return false;
      if (tar[i] > src[i])
        return true;
    }
    return false;
  };
  module.exports = isNodeLT("8.6.0") ? require_dist() : require_lib();
});

// node_modules/@iarna/toml/lib/parser.js
var require_parser = __commonJS((exports, module) => {
  var ParserEND = 1114112;

  class ParserError extends Error {
    constructor(msg, filename, linenumber) {
      super("[ParserError] " + msg, filename, linenumber);
      this.name = "ParserError";
      this.code = "ParserError";
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ParserError);
    }
  }

  class State {
    constructor(parser) {
      this.parser = parser;
      this.buf = "";
      this.returned = null;
      this.result = null;
      this.resultTable = null;
      this.resultArr = null;
    }
  }

  class Parser {
    constructor() {
      this.pos = 0;
      this.col = 0;
      this.line = 0;
      this.obj = {};
      this.ctx = this.obj;
      this.stack = [];
      this._buf = "";
      this.char = null;
      this.ii = 0;
      this.state = new State(this.parseStart);
    }
    parse(str) {
      if (str.length === 0 || str.length == null)
        return;
      this._buf = String(str);
      this.ii = -1;
      this.char = -1;
      let getNext;
      while (getNext === false || this.nextChar()) {
        getNext = this.runOne();
      }
      this._buf = null;
    }
    nextChar() {
      if (this.char === 10) {
        ++this.line;
        this.col = -1;
      }
      ++this.ii;
      this.char = this._buf.codePointAt(this.ii);
      ++this.pos;
      ++this.col;
      return this.haveBuffer();
    }
    haveBuffer() {
      return this.ii < this._buf.length;
    }
    runOne() {
      return this.state.parser.call(this, this.state.returned);
    }
    finish() {
      this.char = ParserEND;
      let last;
      do {
        last = this.state.parser;
        this.runOne();
      } while (this.state.parser !== last);
      this.ctx = null;
      this.state = null;
      this._buf = null;
      return this.obj;
    }
    next(fn) {
      if (typeof fn !== "function")
        throw new ParserError("Tried to set state to non-existent state: " + JSON.stringify(fn));
      this.state.parser = fn;
    }
    goto(fn) {
      this.next(fn);
      return this.runOne();
    }
    call(fn, returnWith) {
      if (returnWith)
        this.next(returnWith);
      this.stack.push(this.state);
      this.state = new State(fn);
    }
    callNow(fn, returnWith) {
      this.call(fn, returnWith);
      return this.runOne();
    }
    return(value) {
      if (this.stack.length === 0)
        throw this.error(new ParserError("Stack underflow"));
      if (value === undefined)
        value = this.state.buf;
      this.state = this.stack.pop();
      this.state.returned = value;
    }
    returnNow(value) {
      this.return(value);
      return this.runOne();
    }
    consume() {
      if (this.char === ParserEND)
        throw this.error(new ParserError("Unexpected end-of-buffer"));
      this.state.buf += this._buf[this.ii];
    }
    error(err) {
      err.line = this.line;
      err.col = this.col;
      err.pos = this.pos;
      return err;
    }
    parseStart() {
      throw new ParserError("Must declare a parseStart method");
    }
  }
  Parser.END = ParserEND;
  Parser.Error = ParserError;
  module.exports = Parser;
});

// node_modules/@iarna/toml/lib/create-datetime.js
var require_create_datetime = __commonJS((exports, module) => {
  module.exports = (value) => {
    const date = new Date(value);
    if (isNaN(date)) {
      throw new TypeError("Invalid Datetime");
    } else {
      return date;
    }
  };
});

// node_modules/@iarna/toml/lib/format-num.js
var require_format_num = __commonJS((exports, module) => {
  module.exports = (d, num) => {
    num = String(num);
    while (num.length < d)
      num = "0" + num;
    return num;
  };
});

// node_modules/@iarna/toml/lib/create-datetime-float.js
var require_create_datetime_float = __commonJS((exports, module) => {
  var f = require_format_num();

  class FloatingDateTime extends Date {
    constructor(value) {
      super(value + "Z");
      this.isFloating = true;
    }
    toISOString() {
      const date = `${this.getUTCFullYear()}-${f(2, this.getUTCMonth() + 1)}-${f(2, this.getUTCDate())}`;
      const time = `${f(2, this.getUTCHours())}:${f(2, this.getUTCMinutes())}:${f(2, this.getUTCSeconds())}.${f(3, this.getUTCMilliseconds())}`;
      return `${date}T${time}`;
    }
  }
  module.exports = (value) => {
    const date = new FloatingDateTime(value);
    if (isNaN(date)) {
      throw new TypeError("Invalid Datetime");
    } else {
      return date;
    }
  };
});

// node_modules/@iarna/toml/lib/create-date.js
var require_create_date = __commonJS((exports, module) => {
  var f = require_format_num();
  var DateTime = global.Date;

  class Date2 extends DateTime {
    constructor(value) {
      super(value);
      this.isDate = true;
    }
    toISOString() {
      return `${this.getUTCFullYear()}-${f(2, this.getUTCMonth() + 1)}-${f(2, this.getUTCDate())}`;
    }
  }
  module.exports = (value) => {
    const date = new Date2(value);
    if (isNaN(date)) {
      throw new TypeError("Invalid Datetime");
    } else {
      return date;
    }
  };
});

// node_modules/@iarna/toml/lib/create-time.js
var require_create_time = __commonJS((exports, module) => {
  var f = require_format_num();

  class Time extends Date {
    constructor(value) {
      super(`0000-01-01T${value}Z`);
      this.isTime = true;
    }
    toISOString() {
      return `${f(2, this.getUTCHours())}:${f(2, this.getUTCMinutes())}:${f(2, this.getUTCSeconds())}.${f(3, this.getUTCMilliseconds())}`;
    }
  }
  module.exports = (value) => {
    const date = new Time(value);
    if (isNaN(date)) {
      throw new TypeError("Invalid Datetime");
    } else {
      return date;
    }
  };
});

// node_modules/@iarna/toml/lib/toml-parser.js
var require_toml_parser = __commonJS((exports, module) => {
  var isDigit = function(cp) {
    return cp >= CHAR_0 && cp <= CHAR_9;
  };
  var isHexit = function(cp) {
    return cp >= CHAR_A && cp <= CHAR_F || cp >= CHAR_a && cp <= CHAR_f || cp >= CHAR_0 && cp <= CHAR_9;
  };
  var isBit = function(cp) {
    return cp === CHAR_1 || cp === CHAR_0;
  };
  var isOctit = function(cp) {
    return cp >= CHAR_0 && cp <= CHAR_7;
  };
  var isAlphaNumQuoteHyphen = function(cp) {
    return cp >= CHAR_A && cp <= CHAR_Z || cp >= CHAR_a && cp <= CHAR_z || cp >= CHAR_0 && cp <= CHAR_9 || cp === CHAR_APOS || cp === CHAR_QUOT || cp === CHAR_LOWBAR || cp === CHAR_HYPHEN;
  };
  var isAlphaNumHyphen = function(cp) {
    return cp >= CHAR_A && cp <= CHAR_Z || cp >= CHAR_a && cp <= CHAR_z || cp >= CHAR_0 && cp <= CHAR_9 || cp === CHAR_LOWBAR || cp === CHAR_HYPHEN;
  };
  var hasKey = function(obj, key) {
    if (hasOwnProperty.call(obj, key))
      return true;
    if (key === "__proto__")
      defineProperty(obj, "__proto__", descriptor);
    return false;
  };
  var InlineTable = function() {
    return Object.defineProperties({}, {
      [_type]: { value: INLINE_TABLE }
    });
  };
  var isInlineTable = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === INLINE_TABLE;
  };
  var Table = function() {
    return Object.defineProperties({}, {
      [_type]: { value: TABLE },
      [_declared]: { value: false, writable: true }
    });
  };
  var isTable = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === TABLE;
  };
  var InlineList = function(type) {
    return Object.defineProperties([], {
      [_type]: { value: INLINE_LIST },
      [_contentType]: { value: type }
    });
  };
  var isInlineList = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === INLINE_LIST;
  };
  var List = function() {
    return Object.defineProperties([], {
      [_type]: { value: LIST }
    });
  };
  var isList = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === LIST;
  };
  var Integer = function(value) {
    let num = Number(value);
    if (Object.is(num, -0))
      num = 0;
    if (global.BigInt && !Number.isSafeInteger(num)) {
      return new BoxedBigInt(value);
    } else {
      return Object.defineProperties(new Number(num), {
        isNaN: { value: function() {
          return isNaN(this);
        } },
        [_type]: { value: INTEGER },
        [_inspect]: { value: () => `[Integer: ${value}]` }
      });
    }
  };
  var isInteger = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === INTEGER;
  };
  var Float = function(value) {
    return Object.defineProperties(new Number(value), {
      [_type]: { value: FLOAT },
      [_inspect]: { value: () => `[Float: ${value}]` }
    });
  };
  var isFloat = function(obj) {
    if (obj === null || typeof obj !== "object")
      return false;
    return obj[_type] === FLOAT;
  };
  var tomlType = function(value) {
    const type = typeof value;
    if (type === "object") {
      if (value === null)
        return "null";
      if (value instanceof Date)
        return "datetime";
      if (_type in value) {
        switch (value[_type]) {
          case INLINE_TABLE:
            return "inline-table";
          case INLINE_LIST:
            return "inline-list";
          case TABLE:
            return "table";
          case LIST:
            return "list";
          case FLOAT:
            return "float";
          case INTEGER:
            return "integer";
        }
      }
    }
    return type;
  };
  var makeParserClass = function(Parser) {

    class TOMLParser extends Parser {
      constructor() {
        super();
        this.ctx = this.obj = Table();
      }
      atEndOfWord() {
        return this.char === CHAR_NUM || this.char === CTRL_I || this.char === CHAR_SP || this.atEndOfLine();
      }
      atEndOfLine() {
        return this.char === Parser.END || this.char === CTRL_J || this.char === CTRL_M;
      }
      parseStart() {
        if (this.char === Parser.END) {
          return null;
        } else if (this.char === CHAR_LSQB) {
          return this.call(this.parseTableOrList);
        } else if (this.char === CHAR_NUM) {
          return this.call(this.parseComment);
        } else if (this.char === CTRL_J || this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M) {
          return null;
        } else if (isAlphaNumQuoteHyphen(this.char)) {
          return this.callNow(this.parseAssignStatement);
        } else {
          throw this.error(new TomlError(`Unknown character "${this.char}"`));
        }
      }
      parseWhitespaceToEOL() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M) {
          return null;
        } else if (this.char === CHAR_NUM) {
          return this.goto(this.parseComment);
        } else if (this.char === Parser.END || this.char === CTRL_J) {
          return this.return();
        } else {
          throw this.error(new TomlError("Unexpected character, expected only whitespace or comments till end of line"));
        }
      }
      parseAssignStatement() {
        return this.callNow(this.parseAssign, this.recordAssignStatement);
      }
      recordAssignStatement(kv) {
        let target = this.ctx;
        let finalKey = kv.key.pop();
        for (let kw of kv.key) {
          if (hasKey(target, kw) && (!isTable(target[kw]) || target[kw][_declared])) {
            throw this.error(new TomlError("Can't redefine existing key"));
          }
          target = target[kw] = target[kw] || Table();
        }
        if (hasKey(target, finalKey)) {
          throw this.error(new TomlError("Can't redefine existing key"));
        }
        if (isInteger(kv.value) || isFloat(kv.value)) {
          target[finalKey] = kv.value.valueOf();
        } else {
          target[finalKey] = kv.value;
        }
        return this.goto(this.parseWhitespaceToEOL);
      }
      parseAssign() {
        return this.callNow(this.parseKeyword, this.recordAssignKeyword);
      }
      recordAssignKeyword(key) {
        if (this.state.resultTable) {
          this.state.resultTable.push(key);
        } else {
          this.state.resultTable = [key];
        }
        return this.goto(this.parseAssignKeywordPreDot);
      }
      parseAssignKeywordPreDot() {
        if (this.char === CHAR_PERIOD) {
          return this.next(this.parseAssignKeywordPostDot);
        } else if (this.char !== CHAR_SP && this.char !== CTRL_I) {
          return this.goto(this.parseAssignEqual);
        }
      }
      parseAssignKeywordPostDot() {
        if (this.char !== CHAR_SP && this.char !== CTRL_I) {
          return this.callNow(this.parseKeyword, this.recordAssignKeyword);
        }
      }
      parseAssignEqual() {
        if (this.char === CHAR_EQUALS) {
          return this.next(this.parseAssignPreValue);
        } else {
          throw this.error(new TomlError('Invalid character, expected "="'));
        }
      }
      parseAssignPreValue() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else {
          return this.callNow(this.parseValue, this.recordAssignValue);
        }
      }
      recordAssignValue(value) {
        return this.returnNow({ key: this.state.resultTable, value });
      }
      parseComment() {
        do {
          if (this.char === Parser.END || this.char === CTRL_J) {
            return this.return();
          }
        } while (this.nextChar());
      }
      parseTableOrList() {
        if (this.char === CHAR_LSQB) {
          this.next(this.parseList);
        } else {
          return this.goto(this.parseTable);
        }
      }
      parseTable() {
        this.ctx = this.obj;
        return this.goto(this.parseTableNext);
      }
      parseTableNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else {
          return this.callNow(this.parseKeyword, this.parseTableMore);
        }
      }
      parseTableMore(keyword) {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else if (this.char === CHAR_RSQB) {
          if (hasKey(this.ctx, keyword) && (!isTable(this.ctx[keyword]) || this.ctx[keyword][_declared])) {
            throw this.error(new TomlError("Can't redefine existing key"));
          } else {
            this.ctx = this.ctx[keyword] = this.ctx[keyword] || Table();
            this.ctx[_declared] = true;
          }
          return this.next(this.parseWhitespaceToEOL);
        } else if (this.char === CHAR_PERIOD) {
          if (!hasKey(this.ctx, keyword)) {
            this.ctx = this.ctx[keyword] = Table();
          } else if (isTable(this.ctx[keyword])) {
            this.ctx = this.ctx[keyword];
          } else if (isList(this.ctx[keyword])) {
            this.ctx = this.ctx[keyword][this.ctx[keyword].length - 1];
          } else {
            throw this.error(new TomlError("Can't redefine existing key"));
          }
          return this.next(this.parseTableNext);
        } else {
          throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
        }
      }
      parseList() {
        this.ctx = this.obj;
        return this.goto(this.parseListNext);
      }
      parseListNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else {
          return this.callNow(this.parseKeyword, this.parseListMore);
        }
      }
      parseListMore(keyword) {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else if (this.char === CHAR_RSQB) {
          if (!hasKey(this.ctx, keyword)) {
            this.ctx[keyword] = List();
          }
          if (isInlineList(this.ctx[keyword])) {
            throw this.error(new TomlError("Can't extend an inline array"));
          } else if (isList(this.ctx[keyword])) {
            const next = Table();
            this.ctx[keyword].push(next);
            this.ctx = next;
          } else {
            throw this.error(new TomlError("Can't redefine an existing key"));
          }
          return this.next(this.parseListEnd);
        } else if (this.char === CHAR_PERIOD) {
          if (!hasKey(this.ctx, keyword)) {
            this.ctx = this.ctx[keyword] = Table();
          } else if (isInlineList(this.ctx[keyword])) {
            throw this.error(new TomlError("Can't extend an inline array"));
          } else if (isInlineTable(this.ctx[keyword])) {
            throw this.error(new TomlError("Can't extend an inline table"));
          } else if (isList(this.ctx[keyword])) {
            this.ctx = this.ctx[keyword][this.ctx[keyword].length - 1];
          } else if (isTable(this.ctx[keyword])) {
            this.ctx = this.ctx[keyword];
          } else {
            throw this.error(new TomlError("Can't redefine an existing key"));
          }
          return this.next(this.parseListNext);
        } else {
          throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
        }
      }
      parseListEnd(keyword) {
        if (this.char === CHAR_RSQB) {
          return this.next(this.parseWhitespaceToEOL);
        } else {
          throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"));
        }
      }
      parseValue() {
        if (this.char === Parser.END) {
          throw this.error(new TomlError("Key without value"));
        } else if (this.char === CHAR_QUOT) {
          return this.next(this.parseDoubleString);
        }
        if (this.char === CHAR_APOS) {
          return this.next(this.parseSingleString);
        } else if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) {
          return this.goto(this.parseNumberSign);
        } else if (this.char === CHAR_i) {
          return this.next(this.parseInf);
        } else if (this.char === CHAR_n) {
          return this.next(this.parseNan);
        } else if (isDigit(this.char)) {
          return this.goto(this.parseNumberOrDateTime);
        } else if (this.char === CHAR_t || this.char === CHAR_f) {
          return this.goto(this.parseBoolean);
        } else if (this.char === CHAR_LSQB) {
          return this.call(this.parseInlineList, this.recordValue);
        } else if (this.char === CHAR_LCUB) {
          return this.call(this.parseInlineTable, this.recordValue);
        } else {
          throw this.error(new TomlError("Unexpected character, expecting string, number, datetime, boolean, inline array or inline table"));
        }
      }
      recordValue(value) {
        return this.returnNow(value);
      }
      parseInf() {
        if (this.char === CHAR_n) {
          return this.next(this.parseInf2);
        } else {
          throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'));
        }
      }
      parseInf2() {
        if (this.char === CHAR_f) {
          if (this.state.buf === "-") {
            return this.return((-Infinity));
          } else {
            return this.return(Infinity);
          }
        } else {
          throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'));
        }
      }
      parseNan() {
        if (this.char === CHAR_a) {
          return this.next(this.parseNan2);
        } else {
          throw this.error(new TomlError('Unexpected character, expected "nan"'));
        }
      }
      parseNan2() {
        if (this.char === CHAR_n) {
          return this.return(NaN);
        } else {
          throw this.error(new TomlError('Unexpected character, expected "nan"'));
        }
      }
      parseKeyword() {
        if (this.char === CHAR_QUOT) {
          return this.next(this.parseBasicString);
        } else if (this.char === CHAR_APOS) {
          return this.next(this.parseLiteralString);
        } else {
          return this.goto(this.parseBareKey);
        }
      }
      parseBareKey() {
        do {
          if (this.char === Parser.END) {
            throw this.error(new TomlError("Key ended without value"));
          } else if (isAlphaNumHyphen(this.char)) {
            this.consume();
          } else if (this.state.buf.length === 0) {
            throw this.error(new TomlError("Empty bare keys are not allowed"));
          } else {
            return this.returnNow();
          }
        } while (this.nextChar());
      }
      parseSingleString() {
        if (this.char === CHAR_APOS) {
          return this.next(this.parseLiteralMultiStringMaybe);
        } else {
          return this.goto(this.parseLiteralString);
        }
      }
      parseLiteralString() {
        do {
          if (this.char === CHAR_APOS) {
            return this.return();
          } else if (this.atEndOfLine()) {
            throw this.error(new TomlError("Unterminated string"));
          } else if (this.char === CHAR_DEL || this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I) {
            throw this.errorControlCharInString();
          } else {
            this.consume();
          }
        } while (this.nextChar());
      }
      parseLiteralMultiStringMaybe() {
        if (this.char === CHAR_APOS) {
          return this.next(this.parseLiteralMultiString);
        } else {
          return this.returnNow();
        }
      }
      parseLiteralMultiString() {
        if (this.char === CTRL_M) {
          return null;
        } else if (this.char === CTRL_J) {
          return this.next(this.parseLiteralMultiStringContent);
        } else {
          return this.goto(this.parseLiteralMultiStringContent);
        }
      }
      parseLiteralMultiStringContent() {
        do {
          if (this.char === CHAR_APOS) {
            return this.next(this.parseLiteralMultiEnd);
          } else if (this.char === Parser.END) {
            throw this.error(new TomlError("Unterminated multi-line string"));
          } else if (this.char === CHAR_DEL || this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I && this.char !== CTRL_J && this.char !== CTRL_M) {
            throw this.errorControlCharInString();
          } else {
            this.consume();
          }
        } while (this.nextChar());
      }
      parseLiteralMultiEnd() {
        if (this.char === CHAR_APOS) {
          return this.next(this.parseLiteralMultiEnd2);
        } else {
          this.state.buf += "'";
          return this.goto(this.parseLiteralMultiStringContent);
        }
      }
      parseLiteralMultiEnd2() {
        if (this.char === CHAR_APOS) {
          return this.return();
        } else {
          this.state.buf += "''";
          return this.goto(this.parseLiteralMultiStringContent);
        }
      }
      parseDoubleString() {
        if (this.char === CHAR_QUOT) {
          return this.next(this.parseMultiStringMaybe);
        } else {
          return this.goto(this.parseBasicString);
        }
      }
      parseBasicString() {
        do {
          if (this.char === CHAR_BSOL) {
            return this.call(this.parseEscape, this.recordEscapeReplacement);
          } else if (this.char === CHAR_QUOT) {
            return this.return();
          } else if (this.atEndOfLine()) {
            throw this.error(new TomlError("Unterminated string"));
          } else if (this.char === CHAR_DEL || this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I) {
            throw this.errorControlCharInString();
          } else {
            this.consume();
          }
        } while (this.nextChar());
      }
      recordEscapeReplacement(replacement) {
        this.state.buf += replacement;
        return this.goto(this.parseBasicString);
      }
      parseMultiStringMaybe() {
        if (this.char === CHAR_QUOT) {
          return this.next(this.parseMultiString);
        } else {
          return this.returnNow();
        }
      }
      parseMultiString() {
        if (this.char === CTRL_M) {
          return null;
        } else if (this.char === CTRL_J) {
          return this.next(this.parseMultiStringContent);
        } else {
          return this.goto(this.parseMultiStringContent);
        }
      }
      parseMultiStringContent() {
        do {
          if (this.char === CHAR_BSOL) {
            return this.call(this.parseMultiEscape, this.recordMultiEscapeReplacement);
          } else if (this.char === CHAR_QUOT) {
            return this.next(this.parseMultiEnd);
          } else if (this.char === Parser.END) {
            throw this.error(new TomlError("Unterminated multi-line string"));
          } else if (this.char === CHAR_DEL || this.char <= CTRL_CHAR_BOUNDARY && this.char !== CTRL_I && this.char !== CTRL_J && this.char !== CTRL_M) {
            throw this.errorControlCharInString();
          } else {
            this.consume();
          }
        } while (this.nextChar());
      }
      errorControlCharInString() {
        let displayCode = "\\u00";
        if (this.char < 16) {
          displayCode += "0";
        }
        displayCode += this.char.toString(16);
        return this.error(new TomlError(`Control characters (codes < 0x1f and 0x7f) are not allowed in strings, use ${displayCode} instead`));
      }
      recordMultiEscapeReplacement(replacement) {
        this.state.buf += replacement;
        return this.goto(this.parseMultiStringContent);
      }
      parseMultiEnd() {
        if (this.char === CHAR_QUOT) {
          return this.next(this.parseMultiEnd2);
        } else {
          this.state.buf += '"';
          return this.goto(this.parseMultiStringContent);
        }
      }
      parseMultiEnd2() {
        if (this.char === CHAR_QUOT) {
          return this.return();
        } else {
          this.state.buf += '""';
          return this.goto(this.parseMultiStringContent);
        }
      }
      parseMultiEscape() {
        if (this.char === CTRL_M || this.char === CTRL_J) {
          return this.next(this.parseMultiTrim);
        } else if (this.char === CHAR_SP || this.char === CTRL_I) {
          return this.next(this.parsePreMultiTrim);
        } else {
          return this.goto(this.parseEscape);
        }
      }
      parsePreMultiTrim() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else if (this.char === CTRL_M || this.char === CTRL_J) {
          return this.next(this.parseMultiTrim);
        } else {
          throw this.error(new TomlError("Can't escape whitespace"));
        }
      }
      parseMultiTrim() {
        if (this.char === CTRL_J || this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M) {
          return null;
        } else {
          return this.returnNow();
        }
      }
      parseEscape() {
        if (this.char in escapes) {
          return this.return(escapes[this.char]);
        } else if (this.char === CHAR_u) {
          return this.call(this.parseSmallUnicode, this.parseUnicodeReturn);
        } else if (this.char === CHAR_U) {
          return this.call(this.parseLargeUnicode, this.parseUnicodeReturn);
        } else {
          throw this.error(new TomlError("Unknown escape character: " + this.char));
        }
      }
      parseUnicodeReturn(char) {
        try {
          const codePoint = parseInt(char, 16);
          if (codePoint >= SURROGATE_FIRST && codePoint <= SURROGATE_LAST) {
            throw this.error(new TomlError("Invalid unicode, character in range 0xD800 - 0xDFFF is reserved"));
          }
          return this.returnNow(String.fromCodePoint(codePoint));
        } catch (err) {
          throw this.error(TomlError.wrap(err));
        }
      }
      parseSmallUnicode() {
        if (!isHexit(this.char)) {
          throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));
        } else {
          this.consume();
          if (this.state.buf.length >= 4)
            return this.return();
        }
      }
      parseLargeUnicode() {
        if (!isHexit(this.char)) {
          throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"));
        } else {
          this.consume();
          if (this.state.buf.length >= 8)
            return this.return();
        }
      }
      parseNumberSign() {
        this.consume();
        return this.next(this.parseMaybeSignedInfOrNan);
      }
      parseMaybeSignedInfOrNan() {
        if (this.char === CHAR_i) {
          return this.next(this.parseInf);
        } else if (this.char === CHAR_n) {
          return this.next(this.parseNan);
        } else {
          return this.callNow(this.parseNoUnder, this.parseNumberIntegerStart);
        }
      }
      parseNumberIntegerStart() {
        if (this.char === CHAR_0) {
          this.consume();
          return this.next(this.parseNumberIntegerExponentOrDecimal);
        } else {
          return this.goto(this.parseNumberInteger);
        }
      }
      parseNumberIntegerExponentOrDecimal() {
        if (this.char === CHAR_PERIOD) {
          this.consume();
          return this.call(this.parseNoUnder, this.parseNumberFloat);
        } else if (this.char === CHAR_E || this.char === CHAR_e) {
          this.consume();
          return this.next(this.parseNumberExponentSign);
        } else {
          return this.returnNow(Integer(this.state.buf));
        }
      }
      parseNumberInteger() {
        if (isDigit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnder);
        } else if (this.char === CHAR_E || this.char === CHAR_e) {
          this.consume();
          return this.next(this.parseNumberExponentSign);
        } else if (this.char === CHAR_PERIOD) {
          this.consume();
          return this.call(this.parseNoUnder, this.parseNumberFloat);
        } else {
          const result = Integer(this.state.buf);
          if (result.isNaN()) {
            throw this.error(new TomlError("Invalid number"));
          } else {
            return this.returnNow(result);
          }
        }
      }
      parseNoUnder() {
        if (this.char === CHAR_LOWBAR || this.char === CHAR_PERIOD || this.char === CHAR_E || this.char === CHAR_e) {
          throw this.error(new TomlError("Unexpected character, expected digit"));
        } else if (this.atEndOfWord()) {
          throw this.error(new TomlError("Incomplete number"));
        }
        return this.returnNow();
      }
      parseNoUnderHexOctBinLiteral() {
        if (this.char === CHAR_LOWBAR || this.char === CHAR_PERIOD) {
          throw this.error(new TomlError("Unexpected character, expected digit"));
        } else if (this.atEndOfWord()) {
          throw this.error(new TomlError("Incomplete number"));
        }
        return this.returnNow();
      }
      parseNumberFloat() {
        if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnder, this.parseNumberFloat);
        } else if (isDigit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_E || this.char === CHAR_e) {
          this.consume();
          return this.next(this.parseNumberExponentSign);
        } else {
          return this.returnNow(Float(this.state.buf));
        }
      }
      parseNumberExponentSign() {
        if (isDigit(this.char)) {
          return this.goto(this.parseNumberExponent);
        } else if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) {
          this.consume();
          this.call(this.parseNoUnder, this.parseNumberExponent);
        } else {
          throw this.error(new TomlError("Unexpected character, expected -, + or digit"));
        }
      }
      parseNumberExponent() {
        if (isDigit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnder);
        } else {
          return this.returnNow(Float(this.state.buf));
        }
      }
      parseNumberOrDateTime() {
        if (this.char === CHAR_0) {
          this.consume();
          return this.next(this.parseNumberBaseOrDateTime);
        } else {
          return this.goto(this.parseNumberOrDateTimeOnly);
        }
      }
      parseNumberOrDateTimeOnly() {
        if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnder, this.parseNumberInteger);
        } else if (isDigit(this.char)) {
          this.consume();
          if (this.state.buf.length > 4)
            this.next(this.parseNumberInteger);
        } else if (this.char === CHAR_E || this.char === CHAR_e) {
          this.consume();
          return this.next(this.parseNumberExponentSign);
        } else if (this.char === CHAR_PERIOD) {
          this.consume();
          return this.call(this.parseNoUnder, this.parseNumberFloat);
        } else if (this.char === CHAR_HYPHEN) {
          return this.goto(this.parseDateTime);
        } else if (this.char === CHAR_COLON) {
          return this.goto(this.parseOnlyTimeHour);
        } else {
          return this.returnNow(Integer(this.state.buf));
        }
      }
      parseDateTimeOnly() {
        if (this.state.buf.length < 4) {
          if (isDigit(this.char)) {
            return this.consume();
          } else if (this.char === CHAR_COLON) {
            return this.goto(this.parseOnlyTimeHour);
          } else {
            throw this.error(new TomlError("Expected digit while parsing year part of a date"));
          }
        } else {
          if (this.char === CHAR_HYPHEN) {
            return this.goto(this.parseDateTime);
          } else {
            throw this.error(new TomlError("Expected hyphen (-) while parsing year part of date"));
          }
        }
      }
      parseNumberBaseOrDateTime() {
        if (this.char === CHAR_b) {
          this.consume();
          return this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerBin);
        } else if (this.char === CHAR_o) {
          this.consume();
          return this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerOct);
        } else if (this.char === CHAR_x) {
          this.consume();
          return this.call(this.parseNoUnderHexOctBinLiteral, this.parseIntegerHex);
        } else if (this.char === CHAR_PERIOD) {
          return this.goto(this.parseNumberInteger);
        } else if (isDigit(this.char)) {
          return this.goto(this.parseDateTimeOnly);
        } else {
          return this.returnNow(Integer(this.state.buf));
        }
      }
      parseIntegerHex() {
        if (isHexit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnderHexOctBinLiteral);
        } else {
          const result = Integer(this.state.buf);
          if (result.isNaN()) {
            throw this.error(new TomlError("Invalid number"));
          } else {
            return this.returnNow(result);
          }
        }
      }
      parseIntegerOct() {
        if (isOctit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnderHexOctBinLiteral);
        } else {
          const result = Integer(this.state.buf);
          if (result.isNaN()) {
            throw this.error(new TomlError("Invalid number"));
          } else {
            return this.returnNow(result);
          }
        }
      }
      parseIntegerBin() {
        if (isBit(this.char)) {
          this.consume();
        } else if (this.char === CHAR_LOWBAR) {
          return this.call(this.parseNoUnderHexOctBinLiteral);
        } else {
          const result = Integer(this.state.buf);
          if (result.isNaN()) {
            throw this.error(new TomlError("Invalid number"));
          } else {
            return this.returnNow(result);
          }
        }
      }
      parseDateTime() {
        if (this.state.buf.length < 4) {
          throw this.error(new TomlError("Years less than 1000 must be zero padded to four characters"));
        }
        this.state.result = this.state.buf;
        this.state.buf = "";
        return this.next(this.parseDateMonth);
      }
      parseDateMonth() {
        if (this.char === CHAR_HYPHEN) {
          if (this.state.buf.length < 2) {
            throw this.error(new TomlError("Months less than 10 must be zero padded to two characters"));
          }
          this.state.result += "-" + this.state.buf;
          this.state.buf = "";
          return this.next(this.parseDateDay);
        } else if (isDigit(this.char)) {
          this.consume();
        } else {
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseDateDay() {
        if (this.char === CHAR_T || this.char === CHAR_SP) {
          if (this.state.buf.length < 2) {
            throw this.error(new TomlError("Days less than 10 must be zero padded to two characters"));
          }
          this.state.result += "-" + this.state.buf;
          this.state.buf = "";
          return this.next(this.parseStartTimeHour);
        } else if (this.atEndOfWord()) {
          return this.returnNow(createDate(this.state.result + "-" + this.state.buf));
        } else if (isDigit(this.char)) {
          this.consume();
        } else {
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseStartTimeHour() {
        if (this.atEndOfWord()) {
          return this.returnNow(createDate(this.state.result));
        } else {
          return this.goto(this.parseTimeHour);
        }
      }
      parseTimeHour() {
        if (this.char === CHAR_COLON) {
          if (this.state.buf.length < 2) {
            throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));
          }
          this.state.result += "T" + this.state.buf;
          this.state.buf = "";
          return this.next(this.parseTimeMin);
        } else if (isDigit(this.char)) {
          this.consume();
        } else {
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseTimeMin() {
        if (this.state.buf.length < 2 && isDigit(this.char)) {
          this.consume();
        } else if (this.state.buf.length === 2 && this.char === CHAR_COLON) {
          this.state.result += ":" + this.state.buf;
          this.state.buf = "";
          return this.next(this.parseTimeSec);
        } else {
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseTimeSec() {
        if (isDigit(this.char)) {
          this.consume();
          if (this.state.buf.length === 2) {
            this.state.result += ":" + this.state.buf;
            this.state.buf = "";
            return this.next(this.parseTimeZoneOrFraction);
          }
        } else {
          throw this.error(new TomlError("Incomplete datetime"));
        }
      }
      parseOnlyTimeHour() {
        if (this.char === CHAR_COLON) {
          if (this.state.buf.length < 2) {
            throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));
          }
          this.state.result = this.state.buf;
          this.state.buf = "";
          return this.next(this.parseOnlyTimeMin);
        } else {
          throw this.error(new TomlError("Incomplete time"));
        }
      }
      parseOnlyTimeMin() {
        if (this.state.buf.length < 2 && isDigit(this.char)) {
          this.consume();
        } else if (this.state.buf.length === 2 && this.char === CHAR_COLON) {
          this.state.result += ":" + this.state.buf;
          this.state.buf = "";
          return this.next(this.parseOnlyTimeSec);
        } else {
          throw this.error(new TomlError("Incomplete time"));
        }
      }
      parseOnlyTimeSec() {
        if (isDigit(this.char)) {
          this.consume();
          if (this.state.buf.length === 2) {
            return this.next(this.parseOnlyTimeFractionMaybe);
          }
        } else {
          throw this.error(new TomlError("Incomplete time"));
        }
      }
      parseOnlyTimeFractionMaybe() {
        this.state.result += ":" + this.state.buf;
        if (this.char === CHAR_PERIOD) {
          this.state.buf = "";
          this.next(this.parseOnlyTimeFraction);
        } else {
          return this.return(createTime(this.state.result));
        }
      }
      parseOnlyTimeFraction() {
        if (isDigit(this.char)) {
          this.consume();
        } else if (this.atEndOfWord()) {
          if (this.state.buf.length === 0)
            throw this.error(new TomlError("Expected digit in milliseconds"));
          return this.returnNow(createTime(this.state.result + "." + this.state.buf));
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"));
        }
      }
      parseTimeZoneOrFraction() {
        if (this.char === CHAR_PERIOD) {
          this.consume();
          this.next(this.parseDateTimeFraction);
        } else if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) {
          this.consume();
          this.next(this.parseTimeZoneHour);
        } else if (this.char === CHAR_Z) {
          this.consume();
          return this.return(createDateTime(this.state.result + this.state.buf));
        } else if (this.atEndOfWord()) {
          return this.returnNow(createDateTimeFloat(this.state.result + this.state.buf));
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"));
        }
      }
      parseDateTimeFraction() {
        if (isDigit(this.char)) {
          this.consume();
        } else if (this.state.buf.length === 1) {
          throw this.error(new TomlError("Expected digit in milliseconds"));
        } else if (this.char === CHAR_HYPHEN || this.char === CHAR_PLUS) {
          this.consume();
          this.next(this.parseTimeZoneHour);
        } else if (this.char === CHAR_Z) {
          this.consume();
          return this.return(createDateTime(this.state.result + this.state.buf));
        } else if (this.atEndOfWord()) {
          return this.returnNow(createDateTimeFloat(this.state.result + this.state.buf));
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"));
        }
      }
      parseTimeZoneHour() {
        if (isDigit(this.char)) {
          this.consume();
          if (/\d\d$/.test(this.state.buf))
            return this.next(this.parseTimeZoneSep);
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected digit"));
        }
      }
      parseTimeZoneSep() {
        if (this.char === CHAR_COLON) {
          this.consume();
          this.next(this.parseTimeZoneMin);
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected colon"));
        }
      }
      parseTimeZoneMin() {
        if (isDigit(this.char)) {
          this.consume();
          if (/\d\d$/.test(this.state.buf))
            return this.return(createDateTime(this.state.result + this.state.buf));
        } else {
          throw this.error(new TomlError("Unexpected character in datetime, expected digit"));
        }
      }
      parseBoolean() {
        if (this.char === CHAR_t) {
          this.consume();
          return this.next(this.parseTrue_r);
        } else if (this.char === CHAR_f) {
          this.consume();
          return this.next(this.parseFalse_a);
        }
      }
      parseTrue_r() {
        if (this.char === CHAR_r) {
          this.consume();
          return this.next(this.parseTrue_u);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseTrue_u() {
        if (this.char === CHAR_u) {
          this.consume();
          return this.next(this.parseTrue_e);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseTrue_e() {
        if (this.char === CHAR_e) {
          return this.return(true);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseFalse_a() {
        if (this.char === CHAR_a) {
          this.consume();
          return this.next(this.parseFalse_l);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseFalse_l() {
        if (this.char === CHAR_l) {
          this.consume();
          return this.next(this.parseFalse_s);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseFalse_s() {
        if (this.char === CHAR_s) {
          this.consume();
          return this.next(this.parseFalse_e);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseFalse_e() {
        if (this.char === CHAR_e) {
          return this.return(false);
        } else {
          throw this.error(new TomlError("Invalid boolean, expected true or false"));
        }
      }
      parseInlineList() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M || this.char === CTRL_J) {
          return null;
        } else if (this.char === Parser.END) {
          throw this.error(new TomlError("Unterminated inline array"));
        } else if (this.char === CHAR_NUM) {
          return this.call(this.parseComment);
        } else if (this.char === CHAR_RSQB) {
          return this.return(this.state.resultArr || InlineList());
        } else {
          return this.callNow(this.parseValue, this.recordInlineListValue);
        }
      }
      recordInlineListValue(value) {
        if (this.state.resultArr) {
          const listType = this.state.resultArr[_contentType];
          const valueType = tomlType(value);
          if (listType !== valueType) {
            throw this.error(new TomlError(`Inline lists must be a single type, not a mix of ${listType} and ${valueType}`));
          }
        } else {
          this.state.resultArr = InlineList(tomlType(value));
        }
        if (isFloat(value) || isInteger(value)) {
          this.state.resultArr.push(value.valueOf());
        } else {
          this.state.resultArr.push(value);
        }
        return this.goto(this.parseInlineListNext);
      }
      parseInlineListNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I || this.char === CTRL_M || this.char === CTRL_J) {
          return null;
        } else if (this.char === CHAR_NUM) {
          return this.call(this.parseComment);
        } else if (this.char === CHAR_COMMA) {
          return this.next(this.parseInlineList);
        } else if (this.char === CHAR_RSQB) {
          return this.goto(this.parseInlineList);
        } else {
          throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"));
        }
      }
      parseInlineTable() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else if (this.char === Parser.END || this.char === CHAR_NUM || this.char === CTRL_J || this.char === CTRL_M) {
          throw this.error(new TomlError("Unterminated inline array"));
        } else if (this.char === CHAR_RCUB) {
          return this.return(this.state.resultTable || InlineTable());
        } else {
          if (!this.state.resultTable)
            this.state.resultTable = InlineTable();
          return this.callNow(this.parseAssign, this.recordInlineTableValue);
        }
      }
      recordInlineTableValue(kv) {
        let target = this.state.resultTable;
        let finalKey = kv.key.pop();
        for (let kw of kv.key) {
          if (hasKey(target, kw) && (!isTable(target[kw]) || target[kw][_declared])) {
            throw this.error(new TomlError("Can't redefine existing key"));
          }
          target = target[kw] = target[kw] || Table();
        }
        if (hasKey(target, finalKey)) {
          throw this.error(new TomlError("Can't redefine existing key"));
        }
        if (isInteger(kv.value) || isFloat(kv.value)) {
          target[finalKey] = kv.value.valueOf();
        } else {
          target[finalKey] = kv.value;
        }
        return this.goto(this.parseInlineTableNext);
      }
      parseInlineTableNext() {
        if (this.char === CHAR_SP || this.char === CTRL_I) {
          return null;
        } else if (this.char === Parser.END || this.char === CHAR_NUM || this.char === CTRL_J || this.char === CTRL_M) {
          throw this.error(new TomlError("Unterminated inline array"));
        } else if (this.char === CHAR_COMMA) {
          return this.next(this.parseInlineTable);
        } else if (this.char === CHAR_RCUB) {
          return this.goto(this.parseInlineTable);
        } else {
          throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"));
        }
      }
    }
    return TOMLParser;
  };
  module.exports = makeParserClass(require_parser());
  module.exports.makeParserClass = makeParserClass;

  class TomlError extends Error {
    constructor(msg) {
      super(msg);
      this.name = "TomlError";
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, TomlError);
      this.fromTOML = true;
      this.wrapped = null;
    }
  }
  TomlError.wrap = (err) => {
    const terr = new TomlError(err.message);
    terr.code = err.code;
    terr.wrapped = err;
    return terr;
  };
  module.exports.TomlError = TomlError;
  var createDateTime = require_create_datetime();
  var createDateTimeFloat = require_create_datetime_float();
  var createDate = require_create_date();
  var createTime = require_create_time();
  var CTRL_I = 9;
  var CTRL_J = 10;
  var CTRL_M = 13;
  var CTRL_CHAR_BOUNDARY = 31;
  var CHAR_SP = 32;
  var CHAR_QUOT = 34;
  var CHAR_NUM = 35;
  var CHAR_APOS = 39;
  var CHAR_PLUS = 43;
  var CHAR_COMMA = 44;
  var CHAR_HYPHEN = 45;
  var CHAR_PERIOD = 46;
  var CHAR_0 = 48;
  var CHAR_1 = 49;
  var CHAR_7 = 55;
  var CHAR_9 = 57;
  var CHAR_COLON = 58;
  var CHAR_EQUALS = 61;
  var CHAR_A = 65;
  var CHAR_E = 69;
  var CHAR_F = 70;
  var CHAR_T = 84;
  var CHAR_U = 85;
  var CHAR_Z = 90;
  var CHAR_LOWBAR = 95;
  var CHAR_a = 97;
  var CHAR_b = 98;
  var CHAR_e = 101;
  var CHAR_f = 102;
  var CHAR_i = 105;
  var CHAR_l = 108;
  var CHAR_n = 110;
  var CHAR_o = 111;
  var CHAR_r = 114;
  var CHAR_s = 115;
  var CHAR_t = 116;
  var CHAR_u = 117;
  var CHAR_x = 120;
  var CHAR_z = 122;
  var CHAR_LCUB = 123;
  var CHAR_RCUB = 125;
  var CHAR_LSQB = 91;
  var CHAR_BSOL = 92;
  var CHAR_RSQB = 93;
  var CHAR_DEL = 127;
  var SURROGATE_FIRST = 55296;
  var SURROGATE_LAST = 57343;
  var escapes = {
    [CHAR_b]: "\b",
    [CHAR_t]: "\t",
    [CHAR_n]: `
`,
    [CHAR_f]: "\f",
    [CHAR_r]: `\r`,
    [CHAR_QUOT]: '"',
    [CHAR_BSOL]: "\\"
  };
  var _type = Symbol("type");
  var _declared = Symbol("declared");
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var defineProperty = Object.defineProperty;
  var descriptor = { configurable: true, enumerable: true, writable: true, value: undefined };
  var INLINE_TABLE = Symbol("inline-table");
  var TABLE = Symbol("table");
  var _contentType = Symbol("content-type");
  var INLINE_LIST = Symbol("inline-list");
  var LIST = Symbol("list");
  var _custom;
  try {
    const utilInspect = (0, eval)("require('util').inspect");
    _custom = utilInspect.custom;
  } catch (_) {
  }
  var _inspect = _custom || "inspect";

  class BoxedBigInt {
    constructor(value) {
      try {
        this.value = global.BigInt.asIntN(64, value);
      } catch (_) {
        this.value = null;
      }
      Object.defineProperty(this, _type, { value: INTEGER });
    }
    isNaN() {
      return this.value === null;
    }
    toString() {
      return String(this.value);
    }
    [_inspect]() {
      return `[BigInt: ${this.toString()}]}`;
    }
    valueOf() {
      return this.value;
    }
  }
  var INTEGER = Symbol("integer");
  var FLOAT = Symbol("float");
});

// node_modules/@iarna/toml/parse-pretty-error.js
var require_parse_pretty_error = __commonJS((exports, module) => {
  var prettyError = function(err, buf) {
    if (err.pos == null || err.line == null)
      return err;
    let msg = err.message;
    msg += ` at row ${err.line + 1}, col ${err.col + 1}, pos ${err.pos}:\n`;
    if (buf && buf.split) {
      const lines = buf.split(/\n/);
      const lineNumWidth = String(Math.min(lines.length, err.line + 3)).length;
      let linePadding = " ";
      while (linePadding.length < lineNumWidth)
        linePadding += " ";
      for (let ii = Math.max(0, err.line - 1);ii < Math.min(lines.length, err.line + 2); ++ii) {
        let lineNum = String(ii + 1);
        if (lineNum.length < lineNumWidth)
          lineNum = " " + lineNum;
        if (err.line === ii) {
          msg += lineNum + "> " + lines[ii] + "\n";
          msg += linePadding + "  ";
          for (let hh = 0;hh < err.col; ++hh) {
            msg += " ";
          }
          msg += "^\n";
        } else {
          msg += lineNum + ": " + lines[ii] + "\n";
        }
      }
    }
    err.message = msg + "\n";
    return err;
  };
  module.exports = prettyError;
});

// node_modules/@iarna/toml/parse-string.js
var require_parse_string = __commonJS((exports, module) => {
  var parseString = function(str) {
    if (global.Buffer && global.Buffer.isBuffer(str)) {
      str = str.toString("utf8");
    }
    const parser = new TOMLParser;
    try {
      parser.parse(str);
      return parser.finish();
    } catch (err) {
      throw prettyError(err, str);
    }
  };
  module.exports = parseString;
  var TOMLParser = require_toml_parser();
  var prettyError = require_parse_pretty_error();
});

// node_modules/@iarna/toml/parse-async.js
var require_parse_async = __commonJS((exports, module) => {
  var parseAsync = function(str, opts) {
    if (!opts)
      opts = {};
    const index = 0;
    const blocksize = opts.blocksize || 40960;
    const parser = new TOMLParser;
    return new Promise((resolve, reject) => {
      setImmediate(parseAsyncNext, index, blocksize, resolve, reject);
    });
    function parseAsyncNext(index2, blocksize2, resolve, reject) {
      if (index2 >= str.length) {
        try {
          return resolve(parser.finish());
        } catch (err) {
          return reject(prettyError(err, str));
        }
      }
      try {
        parser.parse(str.slice(index2, index2 + blocksize2));
        setImmediate(parseAsyncNext, index2 + blocksize2, blocksize2, resolve, reject);
      } catch (err) {
        reject(prettyError(err, str));
      }
    }
  };
  module.exports = parseAsync;
  var TOMLParser = require_toml_parser();
  var prettyError = require_parse_pretty_error();
});

// node_modules/@iarna/toml/parse-stream.js
var require_parse_stream = __commonJS((exports, module) => {
  var parseStream = function(stm) {
    if (stm) {
      return parseReadable(stm);
    } else {
      return parseTransform(stm);
    }
  };
  var parseReadable = function(stm) {
    const parser = new TOMLParser;
    stm.setEncoding("utf8");
    return new Promise((resolve, reject) => {
      let readable;
      let ended = false;
      let errored = false;
      function finish() {
        ended = true;
        if (readable)
          return;
        try {
          resolve(parser.finish());
        } catch (err) {
          reject(err);
        }
      }
      function error(err) {
        errored = true;
        reject(err);
      }
      stm.once("end", finish);
      stm.once("error", error);
      readNext();
      function readNext() {
        readable = true;
        let data;
        while ((data = stm.read()) !== null) {
          try {
            parser.parse(data);
          } catch (err) {
            return error(err);
          }
        }
        readable = false;
        if (ended)
          return finish();
        if (errored)
          return;
        stm.once("readable", readNext);
      }
    });
  };
  var parseTransform = function() {
    const parser = new TOMLParser;
    return new stream.Transform({
      objectMode: true,
      transform(chunk, encoding, cb) {
        try {
          parser.parse(chunk.toString(encoding));
        } catch (err) {
          this.emit("error", err);
        }
        cb();
      },
      flush(cb) {
        try {
          this.push(parser.finish());
        } catch (err) {
          this.emit("error", err);
        }
        cb();
      }
    });
  };
  module.exports = parseStream;
  var stream = import.meta.require("stream");
  var TOMLParser = require_toml_parser();
});

// node_modules/@iarna/toml/parse.js
var require_parse = __commonJS((exports, module) => {
  module.exports = require_parse_string();
  module.exports.async = require_parse_async();
  module.exports.stream = require_parse_stream();
  module.exports.prettyError = require_parse_pretty_error();
});

// node_modules/@iarna/toml/stringify.js
var require_stringify = __commonJS((exports, module) => {
  var stringify = function(obj) {
    if (obj === null)
      throw typeError("null");
    if (obj === undefined)
      throw typeError("undefined");
    if (typeof obj !== "object")
      throw typeError(typeof obj);
    if (typeof obj.toJSON === "function")
      obj = obj.toJSON();
    if (obj == null)
      return null;
    const type = tomlType(obj);
    if (type !== "table")
      throw typeError(type);
    return stringifyObject("", "", obj);
  };
  var typeError = function(type) {
    return new Error("Can only stringify objects, not " + type);
  };
  var arrayOneTypeError = function() {
    return new Error("Array values can't have mixed types");
  };
  var getInlineKeys = function(obj) {
    return Object.keys(obj).filter((key) => isInline(obj[key]));
  };
  var getComplexKeys = function(obj) {
    return Object.keys(obj).filter((key) => !isInline(obj[key]));
  };
  var toJSON = function(obj) {
    let nobj = Array.isArray(obj) ? [] : Object.prototype.hasOwnProperty.call(obj, "__proto__") ? { ["__proto__"]: undefined } : {};
    for (let prop of Object.keys(obj)) {
      if (obj[prop] && typeof obj[prop].toJSON === "function" && !("toISOString" in obj[prop])) {
        nobj[prop] = obj[prop].toJSON();
      } else {
        nobj[prop] = obj[prop];
      }
    }
    return nobj;
  };
  var stringifyObject = function(prefix, indent, obj) {
    obj = toJSON(obj);
    var inlineKeys;
    var complexKeys;
    inlineKeys = getInlineKeys(obj);
    complexKeys = getComplexKeys(obj);
    var result = [];
    var inlineIndent = indent || "";
    inlineKeys.forEach((key) => {
      var type = tomlType(obj[key]);
      if (type !== "undefined" && type !== "null") {
        result.push(inlineIndent + stringifyKey(key) + " = " + stringifyAnyInline(obj[key], true));
      }
    });
    if (result.length > 0)
      result.push("");
    var complexIndent = prefix && inlineKeys.length > 0 ? indent + "  " : "";
    complexKeys.forEach((key) => {
      result.push(stringifyComplex(prefix, complexIndent, key, obj[key]));
    });
    return result.join("\n");
  };
  var isInline = function(value) {
    switch (tomlType(value)) {
      case "undefined":
      case "null":
      case "integer":
      case "nan":
      case "float":
      case "boolean":
      case "string":
      case "datetime":
        return true;
      case "array":
        return value.length === 0 || tomlType(value[0]) !== "table";
      case "table":
        return Object.keys(value).length === 0;
      default:
        return false;
    }
  };
  var tomlType = function(value) {
    if (value === undefined) {
      return "undefined";
    } else if (value === null) {
      return "null";
    } else if (typeof value === "bigint" || Number.isInteger(value) && !Object.is(value, -0)) {
      return "integer";
    } else if (typeof value === "number") {
      return "float";
    } else if (typeof value === "boolean") {
      return "boolean";
    } else if (typeof value === "string") {
      return "string";
    } else if ("toISOString" in value) {
      return isNaN(value) ? "undefined" : "datetime";
    } else if (Array.isArray(value)) {
      return "array";
    } else {
      return "table";
    }
  };
  var stringifyKey = function(key) {
    var keyStr = String(key);
    if (/^[-A-Za-z0-9_]+$/.test(keyStr)) {
      return keyStr;
    } else {
      return stringifyBasicString(keyStr);
    }
  };
  var stringifyBasicString = function(str) {
    return '"' + escapeString(str).replace(/"/g, '\\"') + '"';
  };
  var stringifyLiteralString = function(str) {
    return "'" + str + "'";
  };
  var numpad = function(num, str) {
    while (str.length < num)
      str = "0" + str;
    return str;
  };
  var escapeString = function(str) {
    return str.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/([\u0000-\u001f\u007f])/, (c) => "\\u" + numpad(4, c.codePointAt(0).toString(16)));
  };
  var stringifyMultilineString = function(str) {
    let escaped = str.split(/\n/).map((str2) => {
      return escapeString(str2).replace(/"(?="")/g, '\\"');
    }).join("\n");
    if (escaped.slice(-1) === '"')
      escaped += "\\\n";
    return '"""\n' + escaped + '"""';
  };
  var stringifyAnyInline = function(value, multilineOk) {
    let type = tomlType(value);
    if (type === "string") {
      if (multilineOk && /\n/.test(value)) {
        type = "string-multiline";
      } else if (!/[\b\t\n\f\r']/.test(value) && /"/.test(value)) {
        type = "string-literal";
      }
    }
    return stringifyInline(value, type);
  };
  var stringifyInline = function(value, type) {
    if (!type)
      type = tomlType(value);
    switch (type) {
      case "string-multiline":
        return stringifyMultilineString(value);
      case "string":
        return stringifyBasicString(value);
      case "string-literal":
        return stringifyLiteralString(value);
      case "integer":
        return stringifyInteger(value);
      case "float":
        return stringifyFloat(value);
      case "boolean":
        return stringifyBoolean(value);
      case "datetime":
        return stringifyDatetime(value);
      case "array":
        return stringifyInlineArray(value.filter((_) => tomlType(_) !== "null" && tomlType(_) !== "undefined" && tomlType(_) !== "nan"));
      case "table":
        return stringifyInlineTable(value);
      default:
        throw typeError(type);
    }
  };
  var stringifyInteger = function(value) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, "_");
  };
  var stringifyFloat = function(value) {
    if (value === Infinity) {
      return "inf";
    } else if (value === (-Infinity)) {
      return "-inf";
    } else if (Object.is(value, NaN)) {
      return "nan";
    } else if (Object.is(value, -0)) {
      return "-0.0";
    }
    var chunks = String(value).split(".");
    var int = chunks[0];
    var dec = chunks[1] || 0;
    return stringifyInteger(int) + "." + dec;
  };
  var stringifyBoolean = function(value) {
    return String(value);
  };
  var stringifyDatetime = function(value) {
    return value.toISOString();
  };
  var isNumber = function(type) {
    return type === "float" || type === "integer";
  };
  var arrayType = function(values) {
    var contentType = tomlType(values[0]);
    if (values.every((_) => tomlType(_) === contentType))
      return contentType;
    if (values.every((_) => isNumber(tomlType(_))))
      return "float";
    return "mixed";
  };
  var validateArray = function(values) {
    const type = arrayType(values);
    if (type === "mixed") {
      throw arrayOneTypeError();
    }
    return type;
  };
  var stringifyInlineArray = function(values) {
    values = toJSON(values);
    const type = validateArray(values);
    var result = "[";
    var stringified = values.map((_) => stringifyInline(_, type));
    if (stringified.join(", ").length > 60 || /\n/.test(stringified)) {
      result += "\n  " + stringified.join(",\n  ") + "\n";
    } else {
      result += " " + stringified.join(", ") + (stringified.length > 0 ? " " : "");
    }
    return result + "]";
  };
  var stringifyInlineTable = function(value) {
    value = toJSON(value);
    var result = [];
    Object.keys(value).forEach((key) => {
      result.push(stringifyKey(key) + " = " + stringifyAnyInline(value[key], false));
    });
    return "{ " + result.join(", ") + (result.length > 0 ? " " : "") + "}";
  };
  var stringifyComplex = function(prefix, indent, key, value) {
    var valueType = tomlType(value);
    if (valueType === "array") {
      return stringifyArrayOfTables(prefix, indent, key, value);
    } else if (valueType === "table") {
      return stringifyComplexTable(prefix, indent, key, value);
    } else {
      throw typeError(valueType);
    }
  };
  var stringifyArrayOfTables = function(prefix, indent, key, values) {
    values = toJSON(values);
    validateArray(values);
    var firstValueType = tomlType(values[0]);
    if (firstValueType !== "table")
      throw typeError(firstValueType);
    var fullKey = prefix + stringifyKey(key);
    var result = "";
    values.forEach((table) => {
      if (result.length > 0)
        result += "\n";
      result += indent + "[[" + fullKey + "]]\n";
      result += stringifyObject(fullKey + ".", indent, table);
    });
    return result;
  };
  var stringifyComplexTable = function(prefix, indent, key, value) {
    var fullKey = prefix + stringifyKey(key);
    var result = "";
    if (getInlineKeys(value).length > 0) {
      result += indent + "[" + fullKey + "]\n";
    }
    return result + stringifyObject(fullKey + ".", indent, value);
  };
  module.exports = stringify;
  module.exports.value = stringifyInline;
});

// node_modules/@iarna/toml/toml.js
var require_toml = __commonJS((exports) => {
  exports.parse = require_parse();
  exports.stringify = require_stringify();
});

// src/index.ts
var import_prompts = __toESM(require_prompts3(), 1);
var toml = __toESM(require_toml(), 1);
import {spawn} from "child_process";
import {readFileSync} from "fs";
import {existsSync} from "fs";
var args = process.argv.slice(2);
var appName;
if (args.includes("--app") || args.includes("-a")) {
  const index = args.indexOf("--app") > -1 ? args.indexOf("--app") : args.indexOf("-a");
  appName = args[index + 1];
}
var envFile = "./.env";
var env = readFileSync(envFile, "utf8");
var lines = env.split("\n");
var secrets = false;
var secretValues = {};
for (const line of lines) {
  if (line.includes("# FLY SECRETS")) {
    secrets = true;
    continue;
  }
  if (secrets) {
    const [key, value] = line.split("=");
    if (!key || !value) {
      console.log("Skipping line:", `${line}\nPlease check your .env file`);
      continue;
    }
    secretValues[key] = value;
  }
}
console.log("The following secrets will be set:");
for (const [key, value] of Object.entries(secretValues)) {
  console.log(`${key}: ${value}`);
}
var confirm = await import_prompts.default({
  type: "confirm",
  name: "value",
  message: "Confirm setting secrets?",
  initial: true
});
if (confirm.value) {
  if (!appName) {
    const tomlFile = "./fly.toml";
    if (existsSync(tomlFile)) {
      const tomlContent = readFileSync(tomlFile, "utf8");
      const parsedToml = toml.default.parse(tomlContent);
      if (parsedToml.app) {
        const detectedAppName = parsedToml.app;
        if (!detectedAppName) {
          const setAppName = await import_prompts.default({
            type: "text",
            name: "value",
            message: "Please provide app name"
          });
          appName = setAppName.value;
        }
        const confirmTomlAppName = await import_prompts.default({
          type: "confirm",
          name: "value",
          message: `fly.toml detected, would you like to use ${detectedAppName} detected in that file?`,
          initial: true
        });
        if (confirmTomlAppName.value) {
          appName = detectedAppName;
        } else {
          const setAppName = await import_prompts.default({
            type: "text",
            name: "value",
            message: "Please provide app name"
          });
          appName = setAppName.value;
        }
      }
    }
  }
  let command = "fly secrets set";
  for (const [key, value] of Object.entries(secretValues)) {
    command += ` ${key}="${value}"`;
  }
  if (appName) {
    command += ` --app ${appName}`;
  }
  const child = spawn(command, {
    shell: true
  });
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  child.stderr.on("data", (data) => {
    process.stdout.write(data);
  });
  child.on("close", (code) => {
    if (code === 0) {
      console.log("Fly secrets set!");
    } else {
      console.log(`Command exited with code ${code}`);
    }
    process.exit(code);
  });
} else {
  console.log("Aborted");
}
if (!appName) {
  console.log("Please provide app name with --app or -a flag");
  process.exit(1);
}
