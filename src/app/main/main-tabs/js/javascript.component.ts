import { Component } from '@angular/core';
import * as pako from 'pako';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html'
})
export class JavascriptComponent {
  public textoOriginal: any = '';
  sequenciaComprimida?: Uint8Array | ArrayBuffer;

  constructor() { }

  // Função para codificar o texto
  codificarTexto(texto: string) {
    this.sequenciaComprimida = pako.deflate(texto);
    return this.sequenciaComprimida;
  }

  // Função para decodificar a sequência
  decodificarSequencia(sequencia: string) {
    if(this.sequenciaComprimida != undefined)
    return pako.inflate(this.sequenciaComprimida, { to: 'string' });
    return ''
  }
  get decripted() { return this.decodificarSequencia(this.textoOriginal) };

  get encripted() { return this.codificarTexto(this.textoOriginal) };
}