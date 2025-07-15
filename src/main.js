import "./style.css";

document.querySelector("#app").innerHTML = `  
  <div class="keyboard">
    <!-- F1 à F12 -->
    <div class="flex flex-row grid-rows-1">
      <div data-key="ESC" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-1 flex items-center justify-center" id="key">ESC</div>
      <div data-key="F1" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">F1</div>
      <div data-key="F2" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">F2</div>
      <div data-key="F3" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-4 flex items-center justify-center" id="key">F3</div>
      <div data-key="F4" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">F4</div>
      <div data-key="F5" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">F5</div>
      <div data-key=F6"" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">F6</div>
      <div data-key="F7" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">F7</div>
      <div data-key="F8" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-9 flex items-center justify-center" id="key">F8</div>
      <div data-key="F9" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-10 flex items-center justify-center" id="key">F9</div>
      <div data-key="F10" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-11 flex items-center justify-center" id="key">F10</div>
      <div data-key="F11" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-12 flex items-center justify-center" id="key">F11</div>
      <div data-key="F12" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-13 flex items-center justify-center" id="key">F12</div>
      <div data-key="⏏" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-14 flex items-center justify-center" id="key">⏏</div>
    </div>

    <div class="keyboard-full">
      <!-- Partie principale -->
      <div class="main">
        <div class="flex flex-row grid-rows-2">
          <div data-key="²" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-1 flex items-center justify-center" id="key">²</div>
          <div data-key="&" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">&</div>
          <div data-key="é" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">é</div>
          <div data-key='"'; class="shadow-3xl rounded-lg w-12 h-12 grid-cols-4 flex items-center justify-center" id="key">"</div>
          <div data-key="'" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">'</div>
          <div data-key="(" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">(</div>
          <div data-key="-" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">-</div>
          <div data-key="è" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">è</div>
          <div data-key="_" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-9 flex items-center justify-center" id="key">_</div>
          <div data-key="ç" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-10 flex items-center justify-center" id="key">ç</div>
          <div data-key="à" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-11 flex items-center justify-center" id="key">à</div>
          <div data-key=")" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-12 flex items-center justify-center" id="key">)</div>
          <div data-key="=" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-13 flex items-center justify-center" id="key">=</div>
          <div data-key="←" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-14 flex items-center justify-center" id="key">←</div>
        </div>
        <div class="flex flex-row grid-rows-3">
          <div data-key="Tab" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-1 flex items-center justify-center" id="key">Tab</div>
          <div data-key="A" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">A</div>
          <div data-key="Z" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">Z</div>
          <div data-key="E" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-4 flex items-center justify-center" id="key">E</div>
          <div data-key="R" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">R</div>
          <div data-key="T" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">T</div>
          <div data-key="Y" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">Y</div>
          <div data-key="U" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">U</div>
          <div data-key="I" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-9 flex items-center justify-center" id="key">I</div>
          <div data-key="O" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-10 flex items-center justify-center" id="key">O</div>
          <div data-key="P" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-11 flex items-center justify-center" id="key">P</div>
          <div data-key="^" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-12 flex items-center justify-center" id="key">^</div>
          <div data-key="$" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-13 flex items-center justify-center" id="key">$</div>
          <div data-key="Entrée" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-14 flex items-center justify-center" id="key">Entrée</div>
        </div>
        <div class="flex flex-row grid-rows-4">
          <div data-key="" class="shadow-3xl rounded-lg w-24 h-12 grid-cols-1 flex items-center justify-center" id="key">Caps</div>
          <div data-key="Q" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">Q</div>
          <div data-key="S" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">S</div>
          <div data-key="D" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-4 flex items-center justify-center" id="key">D</div>
          <div data-key="F" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">F</div>
          <div data-key="G" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">G</div>
          <div data-key="H" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">H</div>
          <div data-key="J" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">J</div>
          <div data-key="K" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-9 flex items-center justify-center" id="key">K</div>
          <div data-key="L" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-10 flex items-center justify-center" id="key">L</div>
          <div data-key="M" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-11 flex items-center justify-center" id="key">M</div>
          <div data-key="ù" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-12 flex items-center justify-center" id="key">ù</div>
          <div data-key="*" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-13 flex items-center justify-center" id="key">*</div>
        </div>
        <div class="flex flex-row grid-rows-5">
          <div data-key="Shift" class="shadow-3xl rounded-lg w-24 h-12 grid-cols-1 flex items-center justify-center" id="key">Shift</div>
          <div data-key="W" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">W</div>
          <div data-key="X" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">X</div>
          <div data-key="C" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-4 flex items-center justify-center" id="key">C</div>
          <div data-key="V" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">V</div>
          <div data-key="B" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">B</div>
          <div data-key="N" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">N</div>
          <div data-key="," class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">,</div>
          <div data-key=";" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-9 flex items-center justify-center" id="key">;</div>
          <div data-key=":" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-10 flex items-center justify-center" id="key">:</div>
          <div data-key="!" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-11 flex items-center justify-center" id="key">!</div>
          <div data-key="Shift" class="shadow-3xl rounded-lg w-24 h-12 grid-cols-12 flex items-center justify-center" id="key">Shift</div>
        </div>
        <div class="flex flex-row grid-rows-6">
          <div data-key="Ctrl" class="shadow-3xl rounded-lg w-24 h-12 grid-cols-1 flex items-center justify-center" id="key">Ctrl</div>
          <div data-key="Win" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-2 flex items-center justify-center" id="key">Win</div>
          <div data-key="Alt" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-3 flex items-center justify-center" id="key">Alt</div>
          <div data-key="Espace" class="shadow-3xl rounded-lg w-48 h-12 grid-cols-4 flex items-center justify-center" id="key">Espace</div>
          <div data-key="AltGr" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-5 flex items-center justify-center" id="key">AltGr</div>
          <div data-key="Win" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-6 flex items-center justify-center" id="key">Win</div>
          <div data-key="Menu" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">Menu</div>
          <div data-key="<" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key"><</div>
          <div data-key=">" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-7 flex items-center justify-center" id="key">></div>
          <div data-key="Ctrl" class="shadow-3xl rounded-lg w-12 h-12 grid-cols-8 flex items-center justify-center" id="key">Ctrl</div>
        </div>
      </div>

      <!-- Flèches de navigation -->
        <div class="flex flex-col space-y-1">
          <!-- Up Arrow -->
          <div data-key="↑" class="shadow-3xl rounded-lg w-12 h-12 flex items-center justify-center ml-13" id="key">
            ↑
          </div>

          <!-- Left, Down, Right Arrows -->
          <div class="flex space-x-1">
            <div data-key="←" class="shadow-3xl rounded-lg w-12 h-12 flex items-center justify-center" id="key">
              ←
            </div>
            <div data-key="↓" class="shadow-3xl rounded-lg w-12 h-12 flex items-center justify-center" id="key">
              ↓
            </div>
            <div data-key="→" class="shadow-3xl rounded-lg w-12 h-12 flex items-center justify-center" id="key">
              →
            </div>
          </div>
        </div>

      <!-- Pavé numérique -->
      <div class="numpad">
        <div class="row">
          <div data-key="Num" class="shadow-3xl rounded-lg w-12 h-12" id="key">Num</div>
          <div data-key="/" class="shadow-3xl rounded-lg w-12 h-12" id="key">/</div>
          <div data-key="*" class="shadow-3xl rounded-lg w-12 h-12" id="key">*</div>
          <div data-key="-" class="shadow-3xl rounded-lg w-12 h-12" id="key">-</div>
        </div>
        <div class="row">
          <div data-key="7" class="shadow-3xl rounded-lg w-12 h-12" id="key">7</div>
          <div data-key="8" class="shadow-3xl rounded-lg w-12 h-12" id="key">8</div>
          <div data-key="9" class="shadow-3xl rounded-lg w-12 h-12" id="key">9</div>
          <div data-key="+" class="shadow-3xl rounded-lg w-12 h-12" id="key" style="height: 92px;">+</div>
        </div>
        <div class="row">
          <div data-key="4" class="shadow-3xl rounded-lg w-12 h-12" id="key">4</div>
          <div data-key="5" class="shadow-3xl rounded-lg w-12 h-12" id="key">5</div>
          <div data-key="6" class="shadow-3xl rounded-lg w-12 h-12" id="key">6</div>
        </div>
        <div class="row">
          <div data-key="1" class="shadow-3xl rounded-lg w-12 h-12" id="key">1</div>
          <div data-key="2" class="shadow-3xl rounded-lg w-12 h-12" id="key">2</div>
          <div data-key="3" class="shadow-3xl rounded-lg w-12 h-12" id="key">3</div>
          <div data-key="Entrée" class="shadow-3xl rounded-lg w-12 h-12" id="key" style="height: 92px;">Entrée</div>
        </div>
        <div class="row">
          <div data-key="0" class="shadow-3xl rounded-lg w-12 h-12" id="key" style="flex: 2;">0</div>
          <div data-key="." class="shadow-3xl rounded-lg w-12 h-12" id="key">.</div>
        </div>
      </div>
    </div>
  </div>
`;

document.addEventListener("keypress", (e) => {
  console.log(e.key); // Affiche uniquement les touches du clavier // & ( ) - = erreur dans le terminal : Failed to execute 'querySelector' on 'Document'
});

const div = document.querySelector("div");
div.addEventListener("click", (e) => {
  console.log(e.target.textContent); // Affiche l'ID de la clé
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const virtualKey = document.querySelector(`[data-key=${key}]`);
  if (virtualKey) {
    virtualKey.style.color = "black"; // allume la touche
  }
});

document.addEventListener("keyup", (e) => {
  const key = e.key;
  const virtualKey = document.querySelector(`[data-key=${key}]`);
  if (virtualKey) {
    virtualKey.classList.style.color = "black"; // éteint la touche
  }
});
