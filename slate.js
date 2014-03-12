// Configs
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "orderScreensLeftToRight" : true
});

// Monitors
var monDell = "2560x1440";
var monTboltR = "2";
var monLaptop = "2880x1800";
var monMain = "1";

// Operations
var lapChat = S.op("corner", {
  "screen" : monLaptop,
  "direction" : "top-left",
  "width" : "screenSizeX/8",
  "height" : "screenSizeY"
});
var lapMain = lapChat.dup({ "direction" : "top-right", "width" : "7*screenSizeX/8" });
var lapLeft = lapChat.dup({ "width" : "6*screenSizeX/8" });
var tboltLFull = S.op("move", {
  "screen" : monDell,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});

var tboltLLeft = tboltLFull.dup({ "width" : "screenSizeX/3" });
var tboltLMid = tboltLLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
var tboltLRight = tboltLLeft.dup({ "x" : "screenOriginX+(screenSizeX*2/3)" });
var tboltLLeftTop = tboltLLeft.dup({ "height" : "screenSizeY/2" });
var tboltLLeftBot = tboltLLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltLMidTop = tboltLMid.dup({ "height" : "screenSizeY/2" });
var tboltLMidBot = tboltLMidTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltLRightTop = tboltLRight.dup({ "height" : "screenSizeY/2" });
var tboltLRightBot = tboltLRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });

var dell = tboltLFull.dup({ "width" : "screenSizeX/2" });
var dellL = dell;
var dellM = dell.dup({ "x" : "screenSizeX/6" });
var dellR = dell.dup({ "x" : "screenSizeX/2" });
var dellLTop = dellL.dup({ "height" : "screenSizeY*2/3" });
var dellLBot = dellLTop.dup({ "y" : "screenSizeY/3" });
var dellMTop = dellM.dup({ "height" : "screenSizeY*2/3" });
var dellMBot = dellMTop.dup({ "y" : "screenSizeY/3" });
var dellRTop = dellR.dup({ "height" : "screenSize*2/3" });
var dellRBot = dellRTop.dup({ "y" : "screenSize/3" });

var dellwide = tboltLFull.dup({ "width" : "screenSizeX*4/7" });
var dellwideL = dellwide;
var dellwideLM = dellwide.dup({ "x" : "screenSizeX/10" });
var dellwideM = dellwide.dup({ "x" : "screenSizeX/7" });
var dellwideR = dellwide.dup({ "x" : "screenSizeX*4/7" });
var dellwideLTop = dellwideL.dup({ "height" : "screenSizeY*2/3" });
var dellwideLBot = dellwideLTop.dup({ "y" : "screenSizeY/3" });
var dellwideLMTop = dellwideLM.dup({ "height" : "screenSizeY*2/3" });
var dellwideLMBot = dellwideLMTop.dup({ "y" : "screenSizeY/3" });
var dellwideMTop = dellwideM.dup({ "height" : "screenSizeY*2/3" });
var dellwideMBot = dellwideMTop.dup({ "y" : "screenSizeY/3" });
var dellwideRTop = dellwideR.dup({ "height" : "screenSize*2/3" });
var dellwideRBot = dellwideRTop.dup({ "y" : "screenSize/3" });


var tboltRFull = S.op("move", {
  "screen" : monTboltR,
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
var tboltRLeft = tboltRFull.dup({ "width" : "screenSizeX/3" });
var tboltRMid = tboltRLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
var tboltRRight = tboltRLeft.dup({ "x" : "screenOriginX+(screenSizeX*2/3)" });
var tboltRLeftTop = tboltRLeft.dup({ "height" : "screenSizeY/2" });
var tboltRLeftBot = tboltRLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltRMidTop = tboltRMid.dup({ "height" : "screenSizeY/2" });
var tboltRMidBot = tboltRMidTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltRRightTop = tboltRRight.dup({ "height" : "screenSizeY/2" });
var tboltRRightBot = tboltRRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });


// common layout hashes
var lapMainHash = {
  "operations" : [lapMain],
  "ignore-fail" : true,
  "repeat" : true
};
var lapLeftHash = {
  "operations" : [lapLeft],
  "ignore-fail": true,
  "repeat" : true
};
var adiumHash = {
  "operations" : [lapChat, lapMain],
  "ignore-fail" : true,
  "title-order" : ["Contacts"],
  "repeat-last" : true
};
var mvimHash = {
  "operations" : [tboltLRight, tboltRLeft],
  "repeat" : true
};
var iTermHash = {
  "operations" : [tboltLMidTop, tboltLMidBot, tboltRMidTop, tboltRMidBot, tboltRRightBot],
  "sort-title" : true,
  "repeat" : true
};
var iTermHash2 = {
  "operations" : dellLBot,
  "repeat" : true
}

var genBrowserHash = function(regex) {
  return {
    "operations" : [function(windowObject) {
      var title = windowObject.title();
      if (title !== undefined && title.match(regex)) {
        windowObject.doOperation(dellLTop.dup({ "width" : "screenSizeX/3" }));
      } else if (title !== undefined && title.match(/벅스 음악 플레이어/)) {
      } else if (title !== undefined && title.match(/Facebook/)) {
        windowObject.doOperation(lapMain);
      } else {
        windowObject.doOperation(dellwideLM);
      }
    }],
    "ignore-fail" : true,
    "repeat" : true
  };
}

// 3 monitor layout
var threeMonitorLayout = S.lay("threeMonitor", {
  "Adium" : {
    "operations" : [lapChat, tboltLLeftBot],
    "ignore-fail" : true,
    "title-order" : ["Contacts"],
    "repeat-last" : true
  },
  "MacVim" : mvimHash,
  "iTerm" : iTermHash,
  "Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "Google Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "GitX" : {
    "operations" : [tboltLLeftTop],
    "repeat" : true
  },
  "Firefox" : genBrowserHash(/^Firebug\s-\s.+$/),
  "Safari" : genBrowserHash(/^Web\sInspector/),
  "Spotify" : {
    "operations" : [tboltRRightTop],
    "repeat" : true
  }
});

// 1 monitor layout
var oneMonitorLayout = S.lay("oneMonitor", {
  "Adium" : adiumHash,
  "MacVim" : lapMainHash,
  "iTerm" : lapLeftHash,
  "Terminal" : lapLeftHash,
  "Chrome" : lapMainHash,
  "Google Chrome" : lapMainHash,
  "Xcode" : lapMainHash,
  "GitX" : lapMainHash,
  "Firefox" : lapMainHash,
  "Safari" : lapMainHash,
  "Eclipse" : lapMainHash,
  "IntelliJ IDEA" : lapMainHash,
  "RubyMine" : lapMainHash,
  "Sublime Text" : lapMainHash,
  "TextMate" : lapLeftHash,
  "Dash" : lapMainHash,
  "Spotify" : lapMainHash
});

// 1 monitor layout with Dell 2560x1440
var dellOneMonitorLayout = S.lay("dellOneMonitor", {
  "Adium" : {
    "operations" : [lapChat, tboltLLeftBot],
    "ignore-fail" : true,
    "title-order" : ["Contacts"],
    "repeat-last" : true
  },
  "MacVim" : mvimHash,
  "iTerm" : iTermHash2,
  "Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "Google Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "GitX" : {
    "operations" : [tboltLLeftTop],
    "repeat" : true
  },
  "Firefox" : genBrowserHash(/^Firebug\s-\s.+$/),
  "Safari" : genBrowserHash(/^Web\sInspector/),
  "Spotify" : {
    "operations" : [tboltRRightTop],
    "repeat" : true
  },
  "IntelliJ IDEA" : { "operations" : dellwideR, "repeat" : true},
  "RubyMine" : { "operations" : dellwideR, "repeat" : true},
  "Dash" : { "operations" : dellLTop },
  "Sublime Text" : { "operations" : dellwideM, "repeat" : true},
  "Terminal" : { "operations" : dellMBot, "repeat" : true},
  "Sequel Pro" : { "operations" : dellMTop }
});

var twoMonitorLayout = S.lay("twoMonitor", {
  "Adium" : {
    "operations" : [lapChat, tboltLLeftBot],
    "ignore-fail" : true,
    "title-order" : ["Contacts"],
    "repeat-last" : true
  },
  "MacVim" : mvimHash,
  "iTerm" : {
    "operations" : S.op("move", {
      "screen" : monDell,
      "x" : "screenOriginX",
      "y" : -1440,
      "width" : 2560/2,
      "height" : 1440
    }),
    "repeat" : true
  },
  "Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "Google Chrome" : genBrowserHash(/^Developer\sTools\s-\s.+$/),
  "GitX" : {
    "operations" : [tboltLLeftTop],
    "repeat" : true
  },
  "Firefox" : genBrowserHash(/^Firebug\s-\s.+$/),
  "Safari" : genBrowserHash(/^Web\sInspector/),
  "Spotify" : {
    "operations" : [tboltRRightTop],
    "repeat" : true
  },
  "IntelliJ IDEA" : { "operations" : dellwideR, "repeat" : true},
  "RubyMine" : { "operations" : dellwideR, "repeat" : true},
  "Dash" : { "operations" : dellLTop },
  "Sublime Text" : { "operations" : dellwideM, "repeat" : true},
  "Terminal" : { "operations" : dellMBot, "repeat" : true},
  "Sequel Pro" : { "operations" : dellMTop }
})

// Defaults
S.def(3, threeMonitorLayout);
S.def(2, twoMonitorLayout);
//S.def(1, oneMonitorLayout);
S.def(["2880x1800"], oneMonitorLayout);
S.def(["2560x1440"], dellOneMonitorLayout);

// Layout Operations
var threeMonitor = S.op("layout", { "name" : threeMonitorLayout });
var twoMonitor = S.op("layout", { "name" : twoMonitorLayout });
var oneMonitor = S.op("layout", { "name" : oneMonitorLayout });
var dellOneMonitor = S.op("layout", { "name" : dellOneMonitorLayout });
var universalLayout = function() {
  // Should probably make sure the resolutions match but w/e
  S.log("SCREEN COUNT: "+S.screenCount());
  if (S.screenCount() === 3) {
    threeMonitor.run();
  } else if (S.screenCount() === 2) {
    twoMonitor.run();
  } else if (S.screenCount() === 1) {
    if (S.screenForRef(0).rect().width == 2560) {
      dellOneMonitor.run();
    } else {
      oneMonitor.run();
    }
  }
};

// Batch bind everything. Less typing.
S.bnda({
  // Layout Bindings
  "padEnter:ctrl" : universalLayout,
  //"space:ctrl" : universalLayout,
  "space:ctrl;alt;cmd" : universalLayout,

  // Basic Location Bindings
  /*
  "pad0:ctrl" : lapChat,
  "[:ctrl" : lapChat,
  "pad.:ctrl" : lapMain,
  "]:ctrl" : lapMain,
  "pad1:ctrl" : tboltLLeftBot,
  "pad2:ctrl" : tboltLMidBot,
  "pad3:ctrl" : tboltLRightBot,
  "pad4:ctrl" : tboltLLeftTop,
  "pad5:ctrl" : tboltLMidTop,
  "pad6:ctrl" : tboltLRightTop,
  "pad7:ctrl" : tboltLLeft,
  "pad8:ctrl" : tboltLMid,
  "pad9:ctrl" : tboltLRight,
  "pad=:ctrl" : tboltLFull,
  "pad1:alt" : tboltRLeftBot,
  "pad2:alt" : tboltRMidBot,
  "pad3:alt" : tboltRRightBot,
  "pad4:alt" : tboltRLeftTop,
  "pad5:alt" : tboltRMidTop,
  "pad6:alt" : tboltRRightTop,
  "pad7:alt" : tboltRLeft,
  "pad8:alt" : tboltRMid,
  "pad9:alt" : tboltRRight,
  "pad=:alt" : tboltRFull,
  */

  // Resize Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  /*
  "right:ctrl" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  "left:ctrl" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
  "up:ctrl" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
  "down:ctrl" : S.op("resize", { "width" : "+0", "height" : "+10%" }),
  "right:alt" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
  "left:alt" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
  "up:alt" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
  "down:alt" : S.op("resize", { "width" : "+-1", "height" : "-10%", "anchor" : "bottom-right" }),
  */
  "f:ctrl;alt;cmd" : S.op("move", { "x" : "screenOriginX", "y" : "screenOriginY", "width" : "screenSizeX", "height" : "screenSizeY" }),

  // Push Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  /*
  "right:ctrl;shift" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/2" }),
  "left:ctrl;shift" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/2" }),
  "up:ctrl;shift" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),
  "down:ctrl;shift" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),
  */

  // Nudge Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  /*
  "right:ctrl;alt" : S.op("nudge", { "x" : "+10%", "y" : "+0" }),
  "left:ctrl;alt" : S.op("nudge", { "x" : "-10%", "y" : "+0" }),
  "up:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "-10%" }),
  "down:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "+10%" }),
  */

  // Throw Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  /*
  "pad1:ctrl;alt" : S.op("throw", { "screen" : "2", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad2:ctrl;alt" : S.op("throw", { "screen" : "1", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "pad3:ctrl;alt" : S.op("throw", { "screen" : "0", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "right:ctrl;alt;cmd" : S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "left:ctrl;alt;cmd" : S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "up:ctrl;alt;cmd" : S.op("throw", { "screen" : "up", "width" : "screenSizeX", "height" : "screenSizeY" }),
  "down:ctrl;alt;cmd" : S.op("throw", { "screen" : "down", "width" : "screenSizeX", "height" : "screenSizeY" }),
  */
  ";:ctrl;alt;cmd" : S.op("throw", { "screen" : "next" }),

  // Focus Bindings
  // NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  /*
  "l:cmd" : S.op("focus", { "direction" : "right" }),
  "h:cmd" : S.op("focus", { "direction" : "left" }),
  "k:cmd" : S.op("focus", { "direction" : "up" }),
  "j:cmd" : S.op("focus", { "direction" : "down" }),
  "k:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "j:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "right:cmd" : S.op("focus", { "direction" : "right" }),
  "left:cmd" : S.op("focus", { "direction" : "left" }),
  "up:cmd" : S.op("focus", { "direction" : "up" }),
  "down:cmd" : S.op("focus", { "direction" : "down" }),
  "up:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  "down:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  */

  // Window Hints
  "esc:cmd" : S.op("hint"),

  // Switch currently doesn't work well so I'm commenting it out until I fix it.
  //"tab:cmd" : S.op("switch"),

  // Gcid
  "esc:ctrl" : S.op("grid"),

  "esc:ctrl;alt;cmd" : S.op("relaunch")
});

// Test Cases
S.src(".slate.test", true);
S.src(".slate.test.js", true);

// Log that we're done configuring
S.log("[SLATE] -------------- Finished Loading Config --------------");
