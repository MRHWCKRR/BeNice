const modeToggle = document.getElementById('modeToggle');
const modeButtons = modeToggle.querySelectorAll('button');
const modeHint = document.getElementById('modeHint');
const leftLabel = document.getElementById('leftLabel');
const rightLabel = document.getElementById('rightLabel');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const translateBtn = document.getElementById('translateBtn');
const copyBtn = document.getElementById('copyBtn');
const charCount = document.getElementById('charCount');
const errorNote = document.getElementById('errorNote');
const stampBadge = document.getElementById('stampBadge');

let mode = 'decode';

const copy = {
    decode: {
        hint: "Paste your corporate bs. Get the honest plain english version.",
        left: "Corporate email",
        right: "What they actually mean",
        placeholder: "Your translation appears here",
        inputPlaceholder: "Put your corporate bs email here.",
        stamp: "Honest"
    },
    encode: {
        hint: "Let out your anger and type here.",
        left: "What you actually mean",
        right: "Polite shit that won't get you fired",
        placeholder: "Your polite bs comes out here.",
        inputPlaceholder: "Fuck you I am not doing this bullshit work over the whole weekend, I have a life too.",
        stamp: "Approved"
    }
}

function applyMode() {
    const c = copy[mode];
    modeToggle.classList.toggle('encode', mode === 'encode');
    modeButtons.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    modeHint.textContent = c.hint;
    leftLabel.textContent = c.left;
    rightLabel.textContent = c.right;
    inputText.placeholder = c.inputPlaceholder;
    outputText.setAttribute('data-placeholder', c.placeholder);
}

modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.mode === mode) return;
        mode = btn.dataset.mode;
        modeToggle.classList.toggle('encode', mode === 'encode');
        applyMode();
    });
});