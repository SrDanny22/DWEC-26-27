const ESTILOS = /* css */ `
  :host {
    display: inline-block;
  }

  .semaforo {
    background-color: black;
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    border-radius: 12px;
  }

  .luz {
    width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
    filter: brightness(0.2);
    transition: filter 0.15s ease-in-out;
  }

  .luz-encendida {
    filter: brightness(1);
  }

  .luz-roja {
    background-color: red;
  }

  .luz-ambar {
    background-color: orange;
  }

  .luz-verde {
    background-color: green;
  }
`;

class MiSemaforo extends HTMLElement {
  static get observedAttributes() {
    return ['duracion-rojo', 'duracion-ambar', 'duracion-verde'];
  }

  #duraciones = { rojo: 5, ambar: 2, verde: 5 };
  #orden = ['rojo', 'verde', 'ambar'];
  #indice = 0;
  #temporizador = null;
  #temporizadorParpadeo = null;
  #luces = new Map();

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${ESTILOS}</style>
      <div class="semaforo" part="semaforo">
        <div class="luz luz-roja" data-color="rojo"></div>
        <div class="luz luz-ambar" data-color="ambar"></div>
        <div class="luz luz-verde" data-color="verde"></div>
      </div>
    `;

    for (const luz of this.shadowRoot.querySelectorAll('.luz')) {
      this.#luces.set(luz.dataset.color, luz);
    }

    this.addEventListener('semaforoencendido', () => this.#arrancar());
  }

  connectedCallback() {
    this.#leerDuraciones();

    queueMicrotask(() => {
      if (this.isConnected) {
        this.dispatchEvent(
          new CustomEvent('semaforoencendido', { bubbles: true, composed: true })
        );
      }
    });
  }

  disconnectedCallback() {
    this.#detener();
  }

  attributeChangedCallback(_nombre, valorAnterior, valorNuevo) {
    if (valorAnterior === valorNuevo) return;

    this.#leerDuraciones();

    if (this.isConnected) {
      this.#arrancar();
    }
  }

  parpadearAmbar(veces = 3) {
    this.#detener();
    this.#apagarTodas();
    this.#indice = 0;
    this.#parpadearAmbar(veces, () => this.#siguienteLuz());
  }

  #leerDuraciones() {
    const leer = (atributo, porDefecto) => {
      const valor = Number.parseFloat(this.getAttribute(atributo));
      return Number.isFinite(valor) && valor > 0 ? valor : porDefecto;
    };

    this.#duraciones = {
      rojo: leer('duracion-rojo', 5),
      ambar: leer('duracion-ambar', 2),
      verde: leer('duracion-verde', 5),
    };
  }

  #arrancar() {
    this.#detener();
    this.#apagarTodas();
    this.#indice = 0;
    this.#parpadearAmbar(3, () => this.#siguienteLuz());
  }

  #parpadearAmbar(veces, alTerminar) {
    const ambar = this.#luces.get('ambar');
    let restantes = veces * 2;

    const paso = () => {
      if (restantes === 0) {
        ambar.classList.remove('luz-encendida');
        this.#temporizadorParpadeo = null;
        alTerminar?.();
        return;
      }

      ambar.classList.toggle('luz-encendida');
      restantes -= 1;
      this.#temporizadorParpadeo = setTimeout(paso, 400);
    };

    paso();
  }

  #siguienteLuz() {
    if (!this.isConnected) return;

    const color = this.#orden[this.#indice % this.#orden.length];
    this.#indice += 1;

    this.#encenderLuz(color);
    this.dispatchEvent(
      new CustomEvent('luzencendida', {
        detail: { color },
        bubbles: true,
        composed: true,
      })
    );

    this.#temporizador = setTimeout(
      () => this.#siguienteLuz(),
      this.#duraciones[color] * 1000
    );
  }

  #encenderLuz(color) {
    for (const [nombre, luz] of this.#luces) {
      luz.classList.toggle('luz-encendida', nombre === color);
    }
  }

  #apagarTodas() {
    for (const luz of this.#luces.values()) {
      luz.classList.remove('luz-encendida');
    }
  }

  #detener() {
    clearTimeout(this.#temporizador);
    clearTimeout(this.#temporizadorParpadeo);
    this.#temporizador = null;
    this.#temporizadorParpadeo = null;
  }
}

customElements.define('mi-semaforo', MiSemaforo);
