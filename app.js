const stockDatabase = {
  AAPL: {
    name: "Apple Inc.",
    signal: "Buy",
    confidence: 82,
    entry: 218.4,
    stop: 208.1,
    target: 234.8,
    summary:
      "Trend is constructive, momentum remains above its short-term average, and catalysts are improving. Risk is controlled with a defined stop and flexible exit plan.",
  },
  MSFT: {
    name: "Microsoft Corp.",
    signal: "Buy",
    confidence: 88,
    entry: 432.75,
    stop: 417.2,
    target: 462.5,
    summary:
      "Cloud demand remains strong and AI-related revenue momentum is improving. The setup favors follow-through while keeping downside risk clearly defined.",
  },
  NVDA: {
    name: "NVIDIA Corp.",
    signal: "Buy",
    confidence: 91,
    entry: 124.15,
    stop: 116.9,
    target: 139.8,
    summary:
      "Momentum is clearly positive and leadership remains strong across AI infrastructure. This is a trend-following setup with a high probability of continuation.",
  },
  AMZN: {
    name: "Amazon.com Inc.",
    signal: "Hold",
    confidence: 68,
    entry: 181.8,
    stop: 171.4,
    target: 194.2,
    summary:
      "The trend remains intact but momentum is less forceful than the strongest leaders. A measured approach is preferable until the next confirmation point.",
  },
  TSLA: {
    name: "Tesla Inc.",
    signal: "Hold",
    confidence: 61,
    entry: 224.6,
    stop: 212.9,
    target: 244.1,
    summary:
      "Volatility remains elevated and the setup is less stable than market leaders. Risk control matters more than chasing momentum in this environment.",
  },
};

const quickList = document.getElementById("quickList");
const tickerInput = document.getElementById("tickerInput");
const stockForm = document.getElementById("stockForm");
const downloadBtn = document.getElementById("downloadBtn");

const resultTitle = document.getElementById("resultTitle");
const signalText = document.getElementById("signalText");
const confidenceText = document.getElementById("confidenceText");
const entryText = document.getElementById("entryText");
const stopText = document.getElementById("stopText");
const targetText = document.getElementById("targetText");
const summaryBox = document.getElementById("summaryBox");

function updateSignal(stockSymbol) {
  const symbol = stockSymbol.toUpperCase();
  const data = stockDatabase[symbol] || {
    name: `${symbol} Corp.`,
    signal: "Watch",
    confidence: 55,
    entry: 100.0,
    stop: 92.0,
    target: 110.0,
    summary:
      "The setup is not clear enough for an aggressive entry. A patient approach may be better until trend and risk metrics improve.",
  };

  resultTitle.textContent = `${symbol} overview`;
  signalText.textContent = data.signal;
  confidenceText.textContent = `${data.confidence}%`;
  entryText.textContent = `$${data.entry.toFixed(2)}`;
  stopText.textContent = `$${data.stop.toFixed(2)}`;
  targetText.textContent = `$${data.target.toFixed(2)}`;
  summaryBox.textContent = `${data.name}: ${data.summary}`;
}

stockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const symbol = tickerInput.value.trim();
  if (!symbol) {
    tickerInput.focus();
    return;
  }

  updateSignal(symbol);
  tickerInput.value = symbol.toUpperCase();
});

quickList.addEventListener("click", (event) => {
  const target = event.target.closest("button[data-symbol]");
  if (!target) return;

  [...quickList.querySelectorAll(".chip")].forEach((chip) => chip.classList.remove("active"));
  target.classList.add("active");

  const symbol = target.dataset.symbol;
  tickerInput.value = symbol;
  updateSignal(symbol);
});

downloadBtn.addEventListener("click", () => {
  const rows = [
    ["Ticker", "Signal", "Confidence", "Entry", "Stop", "Target"],
    [
      tickerInput.value || "AAPL",
      signalText.textContent,
      confidenceText.textContent,
      entryText.textContent.replace("$", ""),
      stopText.textContent.replace("$", ""),
      targetText.textContent.replace("$", ""),
    ],
  ];

  const csv = rows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "signalpilot-report.csv";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
});

updateSignal("AAPL");
