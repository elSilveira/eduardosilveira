import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      name: "everydayspeech.com", image: "assets/eds.png", link: "https://everydayspeech.com/"
    },
    {
      name: "wearelayer.com", image: "assets/layer.png", link: "https://wearelayer.com/"
    },
    {
      name: "albaraka.com", image: "assets/albaraka.png", link: "https://albaraka.com/"
    },
    {
      name: "trio.dev", image: "assets/trio.png", link: "https://trio.dev/"
    },
    {
      name: "insidesistemas.com.br", image: "assets/inside.png", link: "https://insidesistemas.com.br/"
    },
    {
      name: "clovercrm.com.br", image: "assets/datacoper.png", link: "https://clovercrm.com.br/a-solucao/"
    },
    {
      name: "easycomtec.com", image: "assets/easy.jpg", link: "https://www.easycomtec.com/"
    },
    {
      name: "vengreso.com", image: "assets/vengresso.png", link: "https://vengreso.com/"
    }
  ]
}
